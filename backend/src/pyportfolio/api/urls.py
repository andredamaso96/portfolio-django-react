from django.urls import include, re_path, path

from .views import (
        AboutListView, 
        AboutDetailView,
        SkillViewSet,
        ExperienceListView,
        ExperienceDetailView
    )

# from pyportfolio.api.views import SkillViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'skills', SkillViewSet, basename='skills')
#urlpatterns = router.urls

urlpatterns = [
    path('about/', AboutListView.as_view()),
    path('about/<pk>', AboutDetailView.as_view()),
    re_path('', include(router.urls)),
    path('experiences/', ExperienceListView.as_view()),
    path('experiences/<pk>', ExperienceDetailView.as_view()),
    # path('skills/', SkillListView.as_view()),
    # path('skills/<pk>', SkillDetailView.as_view()),
    # path('skills/create/', SkillCreateView.as_view()),
]
