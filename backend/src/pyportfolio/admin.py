from django.contrib import admin

# Register your models here.
from .models import About, Skills, Experience

myModels = [About, Skills, Experience]  # iterable list
admin.site.register(myModels)

#admin.site.register(About)
