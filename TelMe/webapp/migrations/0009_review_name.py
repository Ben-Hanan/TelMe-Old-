# Generated by Django 2.1.7 on 2020-06-02 03:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0008_auto_20200527_1410'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
    ]