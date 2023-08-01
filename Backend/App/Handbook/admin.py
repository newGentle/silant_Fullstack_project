from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(ModelOfMachine)
admin.site.register(ModelOfEngine)
admin.site.register(ModelOfTransmission)
admin.site.register(ModelOfMainAxle)
admin.site.register(ModelOfSteeringAxle)
admin.site.register(TypeOfMaintenance)
admin.site.register(TypeOfFailure)
admin.site.register(MethodOfRecovery)