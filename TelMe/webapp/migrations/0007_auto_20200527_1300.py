# Generated by Django 2.1.7 on 2020-05-27 13:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0006_auto_20200527_1035'),
    ]

    operations = [
        migrations.RenameField(
            model_name='like',
            old_name='post',
            new_name='product',
        ),
    ]
