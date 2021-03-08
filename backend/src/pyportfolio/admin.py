from django.contrib import admin

# Register your models here.
from .models import About, Skills

myModels = [About, Skills]  # iterable list
admin.site.register(myModels)

#admin.site.register(About)
