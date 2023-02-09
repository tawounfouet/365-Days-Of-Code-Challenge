from django.core.mail import send_mail
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse

from listings.models import Band, Listing
from listings.forms import BandForm, ContactUsForm, ListingForm


def band_list(request):
    bands = Band.objects.all()
    return render(request,
                  'listings/band_list.html',
                  {'bands': bands})


def band_detail(request, id):
    band = Band.objects.get(id=id)  # Nous mettons cette ligne pour obtenir le band avec cet id
    return render(request,
                  'listings/band_detail.html',
                  {'band': band})  # nous mettons cette ligne pour passer le groupe au gabarit


def band_create(request):
    if request.method == 'POST':
        form = BandForm(request.POST)
        if form.is_valid():
            # Création d'un nouveau 'Band' (groupe) et sauvegarde dans la base de données
            band = form.save()
            # Redirection vers la page de détail correspondant au groupe que nous venons de créer
            return HttpResponseRedirect(reverse('band-detail', kwargs={'id': band.id}))
    else:
        form = BandForm()

    return render(request,
                  'listings/band_create.html',
                  {'form': form})


def band_update(request, id):
    band = Band.objects.get(id=id)

    if request.method == 'POST':
        form = BandForm(request.POST, instance=band)
        if form.is_valid():
            # Mise à jour du groupe existant dans la base de données
            form.save()
            # Redirection vers la page de détail correspondant au groupe que nous venons de mettre à jour
            return HttpResponseRedirect(reverse('band-detail', kwargs={'id': band.id}))
    else:
        form = BandForm(instance=band)

    return render(request,
                  'listings/band_update.html',
                  {'form': form})


def band_delete(request, id):
    band = Band.objects.get(id=id)  # Nous en avons besoin pour les méthodes GET et POST

    if request.method == 'POST':
        # Suppression du groupe dans la base de données
        band.delete()
        # Redirection vers la liste des groupes
        return HttpResponseRedirect(reverse('band-list'))

    # Pas besoin d'un 'else' ici. Si il s'agit d'une requête GET continuant le programme tout simplement

    return render(request,
                  'listings/band_delete.html',
                  {'band': band})


def listing_list(request):
    listings = Listing.objects.all()
    return render(request,
                  'listings/listing_list.html',
                  {'listings': listings})


def listing_detail(request, id):
    listing = Listing.objects.get(id=id)
    return render(request,
                  'listings/listing_detail.html',
                  {'listing': listing})


def listing_create(request):
    if request.method == 'POST':
        form = ListingForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/listings/')
    else:
        form = ListingForm()

    return render(request,
                  'listings/listing_create.html',
                  {'form': form})


def listing_update(request, id):
    listing = Listing.objects.get(id=id)

    if request.method == 'POST':
        form = ListingForm(request.POST, instance=band)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(f'/listings/{id}/')
    else:
        form = ListingForm(instance=band)

    return render(request,
                  'listings/listing_update.html',
                  {'form': form})


def listing_delete(request, id):
    listing = Listing.objects.get(id=id)

    if request.method == 'POST':
        listing.delete()
        return HttpResponseRedirect(reverse('listing-list'))

    return render(request,
                  'listings/listing_delete.html',
                  {'listing': listing})


def about(request):
    return render(request, 'listings/about.html')


def contact(request):
    if request.method == 'POST':
        # Création d'une instance de notre formulaire et remplissage de ce dernier avec les données du POST
        form = ContactUsForm(request.POST)

        if form.is_valid():
            send_mail(
                subject=f'Message from {form.cleaned_data["name"] or "anonymous"} via MerchEx Contact Us form',
                message=form.cleaned_data['message'],
                from_email=form.cleaned_data['email'],
                recipient_list=['admin@merchex.xyz'],
            )
            return HttpResponseRedirect('/email-sent/')
        # Si le formulaire n'est pas valide, nous laissons l'éxécution continuer jusqu'au return
        # ci-dessous et afficher à nouveau le formulaire (avec des erreurs)

    else:
        # Ceci devrait être une requête GET, du coup nous créons un formulaire vide
        form = ContactUsForm() # ajout d'un nouveau formulaire

    return render(request,
                  'listings/contact.html',
                  {'form': form})  # passe ce formulaire en gabarit

def email_sent(request):
    return render(request, 'listings/email_sent.html')
