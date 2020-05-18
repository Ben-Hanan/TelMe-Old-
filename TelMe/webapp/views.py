from django.shortcuts import render

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
    context = {
        'plans': plans
    }
    return render(request, 'webapp/home.html', context)

def products(request):
    return render(request, 'webapp/products.html')