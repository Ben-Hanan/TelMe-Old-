from django.db import models

# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length = 200)

    def __str__(self):
        return self.name

class Product(models.Model):
    CATEGORY = (
        ('Postpaid', 'Postpaid'),
        ('Prepaid', 'Prepaid'),
        ('Pay-as-you-go', 'Pay-as-you-go'),
    )

    TELCO = (
        ('Singtel', 'Singtel'),
        ('Starhub', 'Starhub'),
        ('M1', 'M1'),
    )

    name = models.CharField(max_length=200, null=True)
    telco = models.CharField(max_length=200, null=True, choices=TELCO)
    category = models.CharField(max_length=200, null=True, choices=CATEGORY)
    contract = models.CharField(max_length=10, null=True)
    price = models.FloatField(null=True)
    description = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name