# Generated by Django 4.2.3 on 2023-07-05 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='text',
            name='text',
        ),
        migrations.AddField(
            model_name='text',
            name='text1',
            field=models.TextField(default='text'),
        ),
        migrations.AddField(
            model_name='text',
            name='text2',
            field=models.TextField(default='text'),
        ),
        migrations.AddField(
            model_name='text',
            name='text3',
            field=models.TextField(default='text'),
        ),
    ]
