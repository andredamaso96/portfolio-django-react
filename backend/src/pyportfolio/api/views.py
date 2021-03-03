from rest_framework.generics import ListAPIView, RetrieveAPIView
from pyportfolio.models import About
from .setializers import AboutSerializer


class AboutListView(ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class AboutDetailView(RetrieveAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer