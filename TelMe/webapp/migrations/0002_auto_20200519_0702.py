# Generated by Django 3.0.6 on 2020-05-19 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('telco', models.CharField(max_length=200)),
                ('contract', models.DurationField()),
                ('price', models.FloatField()),
            ],
        ),
        migrations.DeleteModel(
            name='Products',
        ),
    ]