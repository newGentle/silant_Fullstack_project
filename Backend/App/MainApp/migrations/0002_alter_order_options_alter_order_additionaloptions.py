# Generated by Django 4.2.3 on 2023-08-21 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MainApp', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name': 'Заказ', 'verbose_name_plural': 'Заказы'},
        ),
        migrations.AlterField(
            model_name='order',
            name='additionalOptions',
            field=models.TextField(verbose_name='Доп. опции'),
        ),
    ]
