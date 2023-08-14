import uuid
from django.core.exceptions import ObjectDoesNotExist
from django.http import Http404
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin, User

# Create your models here.

# class UserManager(BaseUserManager):
#     def get_object_by_public_id(self, public_id):
#         try:
#             instance = self.get(public_id=public_id)
#             return instance
#         except (ObjectDoesNotExist, ValueError, TypeError):
#             return Http404
    
#     def create_user(self, username, password=None, **kwargs):
#         if username is None:
#             raise TypeError('Задайте Имя пользователя')
#         if password is None:
#             raise TypeError('Задайте Пароль пользователя')
        
#         user = self.model(username=username, **kwargs)
#         user.set_password(password)
#         user.save(using = self._db)
        
#         return user
    
#     def create_superuser(self, username, password, **kwargs):
#         if password is None:
#             raise TypeError('Задайте Пароль суперпользователя')
#         if username is None:
#             raise TypeError('Задайте Имя суперпользователя')
        
#         user = self.create_user(username, password, **kwargs)
#         user.is_superuser = True
#         user.is_staff = True
#         user.save(using = self._db)
        
#         return user
    
    
# class User(AbstractBaseUser, PermissionsMixin):
#     class Role(models.TextChoices):
#         CONSUMER = 'CR', 'Клиент'
#         MANAGER = 'MR', 'Менеджер'
#         SERVICECOMPANY = 'SC', 'Сервисная компания'
        
#     public_id = models.UUIDField(db_index=True, unique=True, default=uuid.uuid4, editable=False)
#     username = models.CharField(db_index=True, max_length=128, unique=True)
#     first_name = models.CharField(max_length=255)
#     last_name = models.CharField(max_length=255)
#     # email = models.EmailField(db_index=True, unique=True, blank=True)
#     role = models.CharField(max_length=2, choices=Role.choices, default='')
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)
#     is_superuser = models.BooleanField(default=False)
#     created = models.DateTimeField(auto_now=True)
#     updated = models.DateTimeField(auto_now_add=True)
#     USERNAME_FIELD = 'username'
#     # REQUIRED_FIELDS = ['username']
    
#     objects = UserManager()
    
#     def __str__(self):
#         return f'{self.username}'
    
#     @property
#     def name(self):
#         return f'{self.first_name} {self.last_name}'
                

# class ServiceCompany(models.Model):
#     user = models.OneToOneField(User, verbose_name='Название компании', related_name='service_company_user', on_delete=models.CASCADE)
#     description = models.CharField(max_length=128, verbose_name='Описание')
    
#     class Meta:
#         verbose_name = 'Сервисная компания'
#         verbose_name_plural = 'Сервисные компании'
    
#     def __str__(self):
#         return f'{self.user}'
    

# class Client(models.Model):
#     user = models.OneToOneField(User, verbose_name='Клиент', related_name='client_user', on_delete=models.CASCADE)
    
#     class Meta:
#         verbose_name = 'Клиент'
#         verbose_name_plural = 'Клиенты'
        
#     def __str__(self):
#         return f'{self.user}'


# class Manager(models.Model):
#     user = models.OneToOneField(User, verbose_name='Менеджер', related_name='manager_user', on_delete=models.CASCADE)
    
#     class Meta:
#         verbose_name = 'Менеджер'
#         verbose_name_plural = 'Менеджеры'
 
#     def __str__(self):
#         return f'{self.user}'



class Users(models.Model):
    class Role(models.TextChoices):
        CONSUMER = 'CR', 'Клиент'
        MANAGER = 'MR', 'Менеджер'
        SERVICECOMPANY = 'SC', 'Сервисная компания'
        
    user = models.OneToOneField(User, related_name='users', on_delete=models.CASCADE)
    role = models.CharField(max_length=2, choices=Role.choices, default='')
    
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
    
    def __str__(self):
        return f'{self.user.username}'
    