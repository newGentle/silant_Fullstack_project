from django.contrib import admin
from .models import *

# Register your models here.

# @admin.register(ServiceCompany)
# class ServiceCompanyAdmin(admin.ModelAdmin):
#     fields = ['username', 'password']

# @admin.register(Client)
# class ClientAdmin(admin.ModelAdmin):
#     fields = ['username', 'password']
#     # list_display = ['username']

# @admin.register(Manager)
# class ManagerAdmin(admin.ModelAdmin):
#     fields = ['username', 'password']
    
admin.site.register(Client)
admin.site.register(ServiceCompany)
admin.site.register(Manager)