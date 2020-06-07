from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from django_filters import rest_framework as filters
from webapp.models import Product
from .serializers import (
    ProductSerializer,
    ProductDetailSerializer,
)

class ProductFilter(filters.FilterSet):
    class Meta:
        model = Product
        fields = ('telco', 'category', 'contract')

class ProductListView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = ProductFilter

class ProductDetailView(RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ProductDetailSerializer
    queryset = Product.objects.all()