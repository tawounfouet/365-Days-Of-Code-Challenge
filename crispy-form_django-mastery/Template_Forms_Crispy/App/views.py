from django.shortcuts import render
from .forms import CandidateForm
from django.http import HttpResponseRedirect
from django.contrib import messages

def home(request):

    form = CandidateForm(request.POST or None)
    if form.is_valid():
        form.save()
        messages.success(request, "Registered Successfully !")
        return HttpResponseRedirect('/')
    context = {
        "form":form
    }

    return render(request, "home.html", context)