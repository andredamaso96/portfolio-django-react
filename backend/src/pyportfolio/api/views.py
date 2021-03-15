from rest_framework import viewsets

from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from pyportfolio.models import About, Skills, Experience, Education, Project, Contact
from .serializers import AboutSerializer, SkillSerializer, ExperienceSerializer, EducationSerializer, ProjectSerializer, ContactSerializers

from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.parsers import (
MultiPartParser,
FormParser,
JSONParser
)
from rest_framework import status
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView


class AboutListView(ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class AboutDetailView(RetrieveAPIView):
    lookup_field = 'pk'
    queryset = About.objects.all()
    serializer_class = AboutSerializer


class SkillViewSet(viewsets.ModelViewSet):
    lookup_field = 'pk'
    serializer_class = SkillSerializer
    queryset = Skills.objects.all()


class ExperienceListView(ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class ExperienceDetailView(RetrieveAPIView):
    lookup_field = 'pk'
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class EducationListView(ListAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class EducationDetailView(RetrieveAPIView):
    lookup_field = 'pk'
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class ProjectListView(ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectDetailView(RetrieveAPIView):
    lookup_field = 'pk'
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactCreateView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializers
    permission_classes= (AllowAny,)

    def post(self,request):
        parser_classes = (MultiPartParser, )
        serializer = ContactSerializers(data=self.queryset)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializers
    queryset = Contact.objects.all()

