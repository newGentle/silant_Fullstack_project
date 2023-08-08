from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save
from django.contrib.auth.models import User, Group, Permission
from .models import *


@receiver(post_save, sender = Client)
def addToGroup(sender, instance, **kwargs):
    
    # print(User.objects.get(username = instance).exists())
    
    group, created = Group.objects.get_or_create(name = 'Клиент')
    if kwargs['created']:
        user = User.objects.get(username = instance.username)
        user.groups.add(group)
        user.save()