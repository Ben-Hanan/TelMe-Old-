# Generated by Django 2.1.7 on 2020-05-27 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0005_auto_20200527_1031'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='tags',
            field=models.ManyToManyField(blank=True, to='webapp.Tag'),
        ),
    ]
