# Generated by Django 3.2.6 on 2023-05-03 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_userandvacancy_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userandvacancy',
            name='user_id',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='userandvacancy',
            name='vacancy_id',
            field=models.CharField(max_length=255),
        ),
    ]
