from django.shortcuts import render
from django.views.generic import ListView
from .models import Product

plans = [
    {
        'product': 'Plan1',
        'title': 'Singtel',
        'price': '$50',
        'contract': '2 years'
    },
    {
        'product': 'Plan2',
        'title': 'StarHub',
        'price': '$40',
        'contract': '1 year'
    }
]

def home(request):
    template = 'webapp/home.html'
    return render(request, template)

class Products(ListView):
    model = Product
    template_name = 'webapp/products.html'