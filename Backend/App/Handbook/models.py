from django.db import models

# Create your models here.

class ModelOfMachine(models.Model):
    title = models.CharField(max_length=128, verbose_name='Модель машины')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')

    class Meta:
        verbose_name = 'Модель машины'
        verbose_name_plural = 'Модели машины'

class ModelOfEngine(models.Model):
    title = models.CharField(max_length=128, verbose_name='Модель двигателя')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')

    class Meta:
        verbose_name = 'Модель двигателя'
        verbose_name_plural = 'Модели двигателей'

class ModelOfTransmission(models.Model):
    title = models.CharField(max_length=128, verbose_name='Модель трансмиссии')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')

    class Meta:
        verbose_name = 'Модель Трансмиссии'
        verbose_name_plural = 'Модели трансмиссии'

class ModelOfMainAxle(models.Model):
    title = models.CharField(max_length=128, verbose_name='Модель ведущего моста')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')
    
    class Meta:
        verbose_name = 'Модель ведущего моста'
        verbose_name_plural = 'Модели ведущего моста'


class ModelOfSteeringAxle(models.Model):
    title = models.CharField(max_length=128, verbose_name='Модель управляемого моста')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')
    
    class Meta:
        verbose_name = 'Модель управляемого моста'
        verbose_name_plural = 'Модели управляемого моста'

class TypeOfMaintenance(models.Model):
    title = models.CharField(max_length=128, verbose_name='Вид ТО')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')
    
    class Meta:
        verbose_name = 'Вид ТО'
        verbose_name_plural = 'Виды ТО'
    
class TypeOfFailure(models.Model):
    title = models.CharField(max_length=128, verbose_name='характер отказа')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')
    
    class Meta:
        verbose_name = 'Причина отказа'
        verbose_name_plural = 'Причины отказа'
    
    
class MethodOfRecovery(models.Model):
    title = models.CharField(max_length=128, verbose_name='способ восстановления')
    name = models.CharField(max_length=128, verbose_name='Название')
    description = models.CharField(max_length=128, verbose_name='Описание')
    
    class Meta:
        verbose_name = 'Способ Восстановления'
        verbose_name_plural = 'Способы восстановления'
    