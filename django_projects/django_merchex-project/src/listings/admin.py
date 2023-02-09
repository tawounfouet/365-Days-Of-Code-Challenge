from django.contrib import admin

from listings.models import Band, Listing


class BandAdmin(admin.ModelAdmin):
    list_display = ('name', 'year_formed', 'genre') # liste des champs que nous voulons sur l'affichage de la liste


class ListingAdmin(admin.ModelAdmin):
    list_display = ('title',)


admin.site.register(Band, BandAdmin) #nous modifions cette ligne, en ajoutant un deuxème argument
admin.site.register(Listing, ListingAdmin)
