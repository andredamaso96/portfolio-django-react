from rest_framework import serializers

from pyportfolio.models import About, Skills, Experience, Education, Project, Contact

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ('title', 'description', 'image')
        lookup_field = 'id'

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('technology', 'value')
        lookup_field = 'id'

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('job_title', 'company', 'start_date', 'end_date', 'jobs_duties', 'location', 'technologies')
        lookup_field = 'id'

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('course', 'school', 'start_date', 'end_date')
        lookup_field = 'id'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        # fields = ('title', 'description', 'technologies', 'image', 'Github')
        fields = '__all__'
        lookup_field = 'id'

class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'message', 'date_contact')
        