from django.db import models

class About(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField(blank=True)

    def __str__(self):
        return self.title
