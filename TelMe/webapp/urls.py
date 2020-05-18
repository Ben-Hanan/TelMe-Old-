from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='webapp-home'),
    path('products/', views.products, name='webapp-products'),
]