from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User, Group, Permission
from .models import *


@receiver(post_save, sender = Client)
def addToGroup(sender, instance, **kwargs):
    group, created = Group.objects.get_or_create(name = 'Клиент')
    group.permissions.add(Permission.objects.get(id=24))
    if kwargs['created']:
        user = User.objects.get(username = instance.username)
        user.groups.add(group)
        user.save()
    
@receiver(post_save, sender = ServiceCompany)
def addToGroup(sender, instance, **kwargs):
    pass

@receiver(post_save, sender = Manager)
def addToGroup(sender, instance, **kwargs):
    pass