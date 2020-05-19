from django.urls import path
from . import views
from .views import Products
app_name = 'webapp'

urlpatterns = [
    path('', views.home, name='home'),
    path('products/', Products.as_view(), name='products'),
]
