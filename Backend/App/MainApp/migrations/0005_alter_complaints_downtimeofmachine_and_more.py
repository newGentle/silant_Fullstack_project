# Generated by Django 4.2.3 on 2023-08-25 04:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0004_alter_maintenance_maintenanceservicecompany'),
    ]

    operations = [
        migrations.AlterField(
            model_name='complaints',
            name='downtimeOfMachine',
            field=models.IntegerField(blank=True, verbose_name='Время простоя'),
        ),
        migrations.AlterField(
            model_name='complaints',
            name='usedSpareParts',
            field=models.CharField(blank=True, max_length=128, verbose_name='Используемые запасные части'),
        ),
    ]
