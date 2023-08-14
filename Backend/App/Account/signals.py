from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from django.contrib.auth.models import User, Group, Permission
from .models import User


# @receiver(pre_save, sender = User)
# def addToGroup(sender, instance, **kwargs):
    
#     if(instance.is_superuser):
#         instance.save()
#         print('yes')
    # group, created = Group.objects.get_or_create(name = 'Клиент')
    # group.permissions.add(Permission.objects.get(id=24))
    # if kwargs['created']:
        
    #     if (instance.is_superuser):
    #     else:
    #         user = User.objects.get(username = instance)
    #         # user.permissions.all()
    #         user.groups.add(group)
    #         user.save()
        