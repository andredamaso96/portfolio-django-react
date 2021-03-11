from rest_framework import serializers

from pyportfolio.models import About, Skills, Experience, Education

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ('title', 'description', 'image')

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('technology', 'value')

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('job_title', 'company', 'start_date', 'end_date', 'jobs_duties', 'location', 'technologies')

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('course', 'school', 'start_date', 'end_date')
        