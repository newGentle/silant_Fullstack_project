from .models import *
from Handbook.models import *
from rest_framework import serializers

class ModelOfMachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfMachine
        fields = ['id', 'title',]


class ModelOfEngineSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfEngine
        fields = ['id', 'title',]


class ModelOfTransmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfTransmission
        fields = ['id', 'title',]


class ModelOfMainAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfMainAxle
        fields = ['id', 'title',]


class ModelOfSteeringAxleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModelOfSteeringAxle
        fields = ['id', 'title',]


class MachineSerializer(serializers.ModelSerializer):
    modelOfMachine = ModelOfMachineSerializer(read_only=True)
    modelOfEngine = ModelOfEngineSerializer(read_only=True)
    modelOfTransmission = ModelOfTransmissionSerializer(read_only=True)
    modelOfMainAxle = ModelOfMainAxleSerializer(read_only=True)
    modelOfSteeringAxle = ModelOfSteeringAxleSerializer(read_only=True)
    class Meta:
        model = Machine
        fields = ['factoryNumberOfMachine', 'modelOfMachine', 'modelOfEngine', \
                'factoryNumberOfEngine', 'modelOfTransmission', 'factoryNumberOfTransmission', \
                'modelOfMainAxle', 'factoryNumberOfMainAxle', 'modelOfSteeringAxle', \
                'factoryNumberOfSteeringAxle']
        