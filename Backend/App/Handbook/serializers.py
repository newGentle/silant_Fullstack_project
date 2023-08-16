from .models import *
from rest_framework import serializers

class ModelOfEngineSerialiser(serializers.ModelSerializer):
    class Meta:
        model = ModelOfEngine
        fields = ('__all__')
