from rest_framework.generics import ListAPIView
from webapp.models import Product
from .serializers import ProductSerializer
from rest_framework.permissions import AllowAny


class ProductListView(ListAPIView):
    permission_classes = (AllowAny, )
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
