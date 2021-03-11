from django.contrib import admin

# Register your models here.
from .models import About, Skills, Experience, Education

myModels = [About, Skills, Experience, Education]  # iterable list
admin.site.register(myModels)

#admin.site.register(About)
