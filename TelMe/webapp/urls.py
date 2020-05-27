from django.urls import path
from . import views
from webapp.views import ProductList, productdetail

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', views.products, name='products'),
    path('like/', views.like_product, name='like-product'),
    path('products_details/', ProductList.as_view()),
    path('products_details/<int:id>/', productdetail, name='product-detail'),
]
