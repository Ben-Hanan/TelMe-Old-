# Generated by Django 2.1.7 on 2020-05-21 03:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0003_auto_20200519_0714'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(choices=[('Postpaid', 'Postpaid'), ('Prepaid', 'Prepaid'), ('Pay-as-you-go', 'Pay-as-you-go')], max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='contract',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='name',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='telco',
            field=models.CharField(choices=[('Singtel', 'Singtel'), ('Starhub', 'Starhub'), ('M1', 'M1')], max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='tags',
            field=models.ManyToManyField(to='webapp.Tag'),
        ),
    ]