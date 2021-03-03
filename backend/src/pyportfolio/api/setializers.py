from rest_framework import serializers

from pyportfolio.models import About

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = ('title', 'description', 'image')