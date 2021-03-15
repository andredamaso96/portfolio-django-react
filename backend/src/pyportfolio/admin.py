from django.contrib import admin

# Register your models here.
from .models import About, Skills, Experience, Education, Project, Contact

myModels = [About, Skills, Experience, Education, Project, Contact]  # iterable list
admin.site.register(myModels)

#admin.site.register(About)
