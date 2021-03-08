from django.urls import path

from .views import AboutListView, AboutDetailView, SkillListView, SkillDetailView

urlpatterns = [
    path('about/', AboutListView.as_view()),
    path('about/<pk>', AboutDetailView.as_view()),
    path('skills/', SkillListView.as_view()),
    path('skills/<pk>', SkillDetailView.as_view())
]
