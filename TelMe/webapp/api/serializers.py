from rest_framework import serializers
from webapp.models import Product


class ProductSerializer(serializers.ModelSerializer):
    telco = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'telco',
            'category',
            'contract',
            'price',
            'description',
            'date_created',
            'liked'
        )

    def get_telco(self, obj):
        return obj.get_telco_display()
    
    def get_category(self, obj):
        return obj.get_telco_display()

class ProductDetailSerializer(serializers.ModelSerializer):
    telco = serializers.SerializerMethodField()
    category = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'telco',
            'category',
            'contract',
            'price',
            'description',
            'date_created',
            'liked'
        )

    def get_telco(self, obj):
        return obj.get_telco_display()
    
    def get_category(self, obj):
        return obj.get_telco_display()
