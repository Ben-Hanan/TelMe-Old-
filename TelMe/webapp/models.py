from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Tag(models.Model):
    name = models.CharField(max_length=200)

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

    CONTRACT = (
        ('6 Months', '6 Months'),
        ('1 Year', '1 Year'),
        ('2 Years', '2 Years'),
        ('More than 2 Years', 'More than 2 Years'),
    )
    name = models.CharField(max_length=200, null=True)
    telco = models.CharField(max_length=200, null=True, choices=TELCO)
    category = models.CharField(max_length=200, null=True, choices=CATEGORY)
    contract = models.CharField(max_length=20, null=True, choices=CONTRACT)
    price = models.FloatField(null=True)
    description = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)
    tags = models.ManyToManyField(Tag, blank=True)
    liked = models.ManyToManyField(
        User, default=None, blank=True, related_name='liked')

    def __str__(self):
        return self.name

    @property
    def num_likes(self):
        return self.liked.all.count()


class Review(models.Model):
    product = models.OneToOneField(Product, on_delete=models.CASCADE)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='author')
    review = models.CharField(max_length=200, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name


class Like(models.Model):
    LIKE_CHOICES = (
        ('Like', 'Like'),
        ('Unlike', 'Unlike'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    value = models.CharField(choices=LIKE_CHOICES,
                             default='Like', max_length=10)

    def __str__(self):
        return str(self.product)
