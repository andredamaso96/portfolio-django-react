from django.urls import include, re_path, path

from .views import (
        AboutListView, 
        AboutDetailView,
        SkillViewSet,
        ExperienceListView,
        ExperienceDetailView,
        EducationListView,
        EducationDetailView,
        ProjectListView,
        ProjectDetailView,
        ContactCreateView,
        ContactViewSet
    )

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'skills', SkillViewSet, basename='skills')
router.register(r'contact', ContactViewSet, 'contact')
#urlpatterns = router.urls

urlpatterns = [
    path('about/', AboutListView.as_view()),
    path('about/<pk>', AboutDetailView.as_view()),
    re_path('', include(router.urls)),
    path('experiences/', ExperienceListView.as_view()),
    path('experiences/<pk>', ExperienceDetailView.as_view()),
    path('educations/', EducationListView.as_view()),
    path('educations/<pk>', EducationDetailView.as_view()),
    path('projects/', ProjectListView.as_view()),
    path('projects/<pk>', ProjectDetailView.as_view()),
    path('contact/', ContactCreateView.as_view()),

]
