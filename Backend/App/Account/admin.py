from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(ServiceCompany)
admin.site.register(Client)

@admin.register(Manager)
class ManagerAdmin(admin.ModelAdmin):
    fields = ['name',]