from .views import ProductListView
from django.urls import path

urlpatterns = [
    path('product-list/', ProductListView.asview(), name='product-list')
]
