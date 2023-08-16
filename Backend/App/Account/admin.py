from django.contrib import admin
from .models import User
from .forms import *
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

# Register your models here.

# @admin.register(Users)
# class UsersAdmin(admin.ModelAdmin):
#     list_display = ['user', 'role']

class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm
    list_display = ('username', 'role', 'is_superuser')
    list_filter = ('is_superuser', )
    fieldsets = (
        (None, {'fields': ('username', 'password', 'role')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'role', 'password1', 'password2'),
        }),
    )
    search_fields = ('username',)
    ordering = ('username',)
    filter_horizontal = ()
    
admin.site.register(User, UserAdmin)