from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length = 200)
    telco = models.CharField(max_length = 200)
    contract = models.CharField(max_length = 10)
    price = models.FloatField(null=True)


    def __str__(self):
        return self.name