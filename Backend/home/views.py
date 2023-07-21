from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def Login(request):
    return render(request, 'login.html')

def Signup(request):
    return render(request, 'Signup.html')