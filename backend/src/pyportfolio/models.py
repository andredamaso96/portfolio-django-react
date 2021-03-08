from django.db import models

class About(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    image = models.ImageField(blank=True)

    def __str__(self):
        return self.title


class Skills(models.Model):
    technology = models.CharField(max_length=120)
    value = models.IntegerField()

    def __str__(self):
        return self.technology
     
# class Experience(models.Model):
#     job_tittle = models.CharField(max_length=120)
#     company = models.CharField(max_length=80)
#     start_date = 