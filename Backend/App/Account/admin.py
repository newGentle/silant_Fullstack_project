from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(User)

@admin.register(ServiceCompany)
class ServiceCompanyAdmin(admin.ModelAdmin):
    fields = ['username', 'password', 'name']

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    fields = ['username', 'password', 'name']
    list_display = ['username', 'name']

@admin.register(Manager)
class ManagerAdmin(admin.ModelAdmin):
    fields = ['username', 'password', 'name']
    