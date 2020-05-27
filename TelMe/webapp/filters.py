import django_filters
from .models import Product

class ProductFilter(django_filters.FilterSet):
    class Meta:
        model = Product
        fields = '__all__'
        exclude = ['name', 'price', 'description', 'date_created', 'tags', 'liked']
