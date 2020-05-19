from django.shortcuts import render
from django.views.generic import ListView
from .models import Product

def home(request):
    template = 'webapp/home.html'
    return render(request, template)

class Products(ListView):
    model = Product
    template_name = 'webapp/products.html'