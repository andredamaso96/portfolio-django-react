from rest_framework.generics import ListAPIView, RetrieveAPIView
from pyportfolio.models import About, Skills
from .serializers import AboutSerializer, SkillSerializer


class AboutListView(ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class AboutDetailView(RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class SkillListView(ListAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer

class SkillDetailView(RetrieveAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer