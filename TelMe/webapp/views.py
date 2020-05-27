from django.shortcuts import render, redirect
from .models import *
from .filters import ProductFilter
from django.core.paginator import Paginator
from django.views.generic import ListView

class ProductList(ListView):
    model = Product

def productdetail(request,id):
    product = Product.objects.get(id = id)
    return render(request, 'webapp/product_details.html', {'product': product})

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
    paginator = Paginator(products, 4)
    page = request.GET.get('page')
    products = paginator.get_page(page)

    context = {
        'products' : products,
        'myFilter' : myFilter
    }
    
    return render(request, template, context)

def like_product(request):
    user = request.user
    if request.method == 'POST':
        product_id = request.POST.get('product_id')
        product_obj = Product.objects.get(id=product_id)

        if user in product_obj.liked.all():
            product_obj.liked.remove(user)
        else:
            product_obj.liked.add(user)
        
        like, created = Like.objects.get_or_create(user=user, product_id=product_id)

        if not created:
            if like.value == 'Like':
                like.value = 'Unlike'
            else:
                like.value = 'Like'
        
        like.save()
    return redirect('products')