from django.db import models

# Create your models here.

class Machine(models.Model):
    factoryNumberOfMachine = models.CharField(unique=True, primary_key=True, max_length=128, verbose_name='Зав. № машины')
    modelOfMachine = models.ForeignKey('Handbook', verbose_name='Модель техники', related_name='handbook_modelOfMachine', on_delete=models.CASCADE)
    modelOfEngine = models.ForeignKey('Handbook', verbose_name='Модель двигателя', related_name='handbook_modelOfEngine', on_delete=models.CASCADE)
    factoryNumberOfEngine = models.CharField(max_length=128, verbose_name='Зав. № двигателя')
    modelOfTransmission = models.ForeignKey('Handbook', verbose_name='Модель трансмиссии', related_name='handbook_modelOfTransmission', on_delete=models.CASCADE)
    factoryNumberOfTransmission = models.CharField(max_length=128, verbose_name='Зав. № трансмиссии')
    modelOfMainAxle = models.ForeignKey('Handbook', verbose_name='Модель ведущего моста', related_name='handbook_modelofMainAxle', on_delete=models.CASCADE)
    factoryNumberOfMainAxle = models.CharField(max_length=128, verbose_name='Зав. № ведущего моста')
    modelOfSteeringAxle = models.ForeignKey('Handbook', verbose_name='Модель управляемого моста', related_name='handbook_modelOfSteeringAxle', on_delete=models.CASCADE)
    factoryNumberOfSteeringAxle = models.CharField(max_length=128, verbose_name='Зав. № управляемого моста')
    supplyContract = models.CharField(max_length=128, verbose_name='Договор поставки №, дата')
    dateOfShipment = models.DateField(verbose_name='Дата отгрузки с завода')
    consumer = models.CharField(max_length=128, verbose_name='Грузополучатель')
    operationAddress = models.CharField(max_length=128, verbose_name='Адрес поставки')
    additionalOptions = models.CharField(max_length=128, verbose_name='Доп. опции')
    client = models.ForeignKey('Users', verbose_name='Клиент', related_name='handbook_client', on_delete=models.CASCADE)
    serviceCompany = models.ForeignKey('Users', verbose_name='Сервисная компания', related_name='handbook_serviceCompany', on_delete=models.CASCADE)
    
    class Meta:
        verbose_name = 'Машина'
        verbose_name_plural = 'Машины'
    
    def __str__(self):
        return self.factoryNumberOfMachine


class Maintenance(models.Model):
    typeOfMaintenance = models.ForeignKey('Handbook', verbose_name='Вид ТО', related_name='handbook_typeofmaintenance', on_delete=models.CASCADE)
    dateOfMaintenance = models.DateField(verbose_name='Дата проведения ТО')
    operatingTime = models.IntegerField(verbose_name='Наработка, м/час')
    numberOrderWork = models.CharField(max_length=128, verbose_name='№ заказ-наряда')
    dateOrderWork = models.DateField(verbose_name='Дата заказ-наряда')
    maintenanceServiceCompany = models.ForeignKey('Handbook', verbose_name='Организация, проводившая ТО', related_name='handbook_maintenanceservicecompany', on_delete=models.CASCADE)
    machine = models.ForeignKey(Machine, verbose_name='Машина', related_name='machine', on_delete=models.CASCADE)
    serviceCompany = models.ForeignKey('Users', verbose_name='Сервисная компания', related_name='handbook_serviceCompany', on_delete=models.CASCADE)
    

class Complaints(models.Model):
    dateOfFailure = models.DateField(verbose_name='Дата отказа')
    operatingTime = models.IntegerField(verbose_name='Наработка, м/час')
    nodeOfFailure = models.ForeignKey('Handbook', verbose_name='Узел отказа', related_name='handbook_nodeoffailure', on_delete=models.CASCADE)
    descriptionOfFailure = models.CharField(verbose_name='Описание отказа')
    recoveryMethod = models.ForeignKey('Handbook', verbose_name='Способ восстановления', related_name='handbook_recoverymethod', on_delete=models.CASCADE)
    usedSpareParts = models.CharField(verbose_name='Используемые запасные части')
    dateOfRecovery = models.DateField(verbose_name='Дата восстановления')
    downtimeOfMachine = models.IntegerField()
    machine = models.ForeignKey(Machine, verbose_name='Машина', related_name='machine', on_delete=models.CASCADE)
    serviceCompany = models.ForeignKey('Users', verbose_name='Сервисная компания', related_name='handbook_serviceCompany', on_delete=models.CASCADE)
    
    
    def save(self, *args, **kwargs):
        self.downtimeOfMachine = self.dateOfRecovery - self.dateOfFailure
        super(Complaints, self).save(*args, **kwargs)
    

class Handbook(models.Model):
    name = models.CharField(verbose_name='Название')
    