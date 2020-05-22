from django.shortcuts import render
from .models import *
from .filters import ProductFilter
from django.core.paginator import Paginator

def home(request):
    template = 'webapp/home.html'
    context = {

    }
    return render(request, template, context)

def products(request):
    template = 'webapp/products.html'
    products = Product.objects.all()
    myFilter = ProductFilter(request.GET, queryset=products)
    products = myFilter.qs
    paginator = Paginator(products, 10)
    page = request.GET.get('page')
    products = paginator.get_page(page)

    context = {
        'products' : products,
        'myFilter' : myFilter
    }
    
    return render(request, template, context)