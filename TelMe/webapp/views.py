from django.shortcuts import render
from django.views.generic import ListView
from .models import Product
from .filters import ProductFilter

def home(request):
    template = 'webapp/home.html'
    myFilter = ProductFilter()
    context = {
        'myFilter' : myFilter
    }
    
    return render(request, template, context)

class Products(ListView):
    model = Product
    template_name = 'webapp/products.html'