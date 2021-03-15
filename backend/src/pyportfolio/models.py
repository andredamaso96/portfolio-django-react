from django.contrib.postgres.fields import ArrayField
from django.db import models
from datetime import date

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


class Experience(models.Model):
    job_title = models.CharField(max_length=120)
    company = models.CharField(max_length=80)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    jobs_duties = models.TextField()
    location = models.CharField(max_length=40)
    technologies = models.CharField(max_length=120)

    def __str__(self):
        return self.job_title + ", " + self.company


class Education(models.Model):
    course = models.CharField(max_length=120)
    school = models.CharField(max_length=80)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.course


class Project(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    technologies = models.CharField(max_length=100)
    image = models.ImageField(blank=True)
    github_url = models.URLField(name='Github')
    
    def __str__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    message = models.TextField(max_length=300)
    date_contact = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
    


    