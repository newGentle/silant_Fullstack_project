from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User, Group, Permission
from .models import User


@receiver(post_save, sender = User)
def addToGroup(sender, instance, **kwargs):
    group, created = Group.objects.get_or_create(name = 'Клиент')
    group.permissions.add(Permission.objects.get(id=24))
    if kwargs['created']:
        user = User.objects.get(username = instance)
        user.groups.add(group)
        user.save()
    