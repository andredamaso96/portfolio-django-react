# Generated by Django 3.1.7 on 2021-03-09 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyportfolio', '0005_auto_20210309_1745'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experience',
            name='jobs_duties',
            field=models.TextField(),
        ),
    ]
