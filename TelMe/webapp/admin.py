from django.contrib import admin
from .models import Product, Tag, Review, Like

# Register your models here.

admin.site.register(Tag)
admin.site.register(Product)
admin.site.register(Review)
admin.site.register(Like)