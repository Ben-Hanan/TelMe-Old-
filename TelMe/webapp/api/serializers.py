from rest_framework import serializers
from webapp.models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = (
            'name',
            'telco',
            'ctegory',
            'contract',
            'price',
            'description',
            'date_created',
            'tags',
            'liked'
        )
