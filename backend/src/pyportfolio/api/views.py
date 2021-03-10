from rest_framework import viewsets

from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from pyportfolio.models import About, Skills, Experience
from .serializers import AboutSerializer, SkillSerializer, ExperienceSerializer


class AboutListView(ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class AboutDetailView(RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer


class SkillViewSet(viewsets.ModelViewSet):
    serializer_class = SkillSerializer
    queryset = Skills.objects.all()


class ExperienceListView(ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ExperienceDetailView(RetrieveAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
