from rest_framework import serializers

from pyportfolio.models import About, Skills

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ('title', 'description', 'image')

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('technology', 'value')