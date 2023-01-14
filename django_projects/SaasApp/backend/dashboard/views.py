from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages


# Other Auth Imports
from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import user_passes_test


# Local Imports
from .forms import *
from .models import *


# Create your views here.
def home(request):
    ##profile = UserProfile.objects.create(user=request.user)
    context = {}

    return render(request, 'dashboard/home.html', context)


def profile(request):
    context = {}
    #user = request.user

    if request.method == 'GET':
        form = ProfileForm(instance=request.user.profile)
        image_form = ProfileImageForm(instance=request.user.profile)
        context['form'] = form
        context['image_form'] = image_form
        return render(request, 'dashboard/profile.html', context)

    if request.method == 'POST':
        form = ProfileForm(request.POST, instance=request.user.profile)
        image_form = ProfileImageForm(
            request.POST, request.FILES, instance=request.user.profile)

        if form.is_valid():
            form.save()
            return redirect('profile')
        if image_form.is_valid():
            image_form.save()
            return redirect('profile')

    return render(request, 'dashboard/profile.html', context)
