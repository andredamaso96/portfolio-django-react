from django.urls import path

from .views import AboutListView, AboutDetailView

urlpatterns = [
    path('about/', AboutListView.as_view()),
    path('about/<pk>', AboutDetailView.as_view())
    
]
