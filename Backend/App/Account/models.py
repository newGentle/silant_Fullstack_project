from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class ServiceCompany(models.Model):
    name = models.OneToOneField(User, verbose_name='Название компании', on_delete=models.CASCADE)
    description = models.CharField(max_length=128, verbose_name='Описание')
    
    class Meta:
        verbose_name = 'Сервисная компания'
        verbose_name_plural = 'Сервисные компании'

class Client(models.Model):
    name = models.OneToOneField(User, verbose_name='Клиент', on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Клиент'
        verbose_name_plural = 'Клиенты'
        
    def __str__(self):
        return self.name

class Manager(models.Model):
    name = models.OneToOneField(User, verbose_name='Менеджер', on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Менеджер'
        verbose_name_plural = 'Менеджеры'
 
    def __str__(self):
        return self.name