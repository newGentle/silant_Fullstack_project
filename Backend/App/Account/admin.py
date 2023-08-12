from typing import Any, Optional
from django.contrib import admin
from django.db.models.fields.related import RelatedField
from django.db.models.query import QuerySet
from django.http.request import HttpRequest
from .models import *

# Register your models here.

# @admin.register(ServiceCompany)
# class ServiceCompanyAdmin(admin.ModelAdmin):
#     def get_field_queryset(self, db, db_field, request):
#         for item in User.objects.all():
#             if Client.objects.filter(user_id=item.pk):
#                 pass
#             print(User.objects.get(pk = item.pk))
    
    
    
    
    


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