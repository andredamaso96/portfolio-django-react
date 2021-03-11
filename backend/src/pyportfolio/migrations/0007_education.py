# Generated by Django 3.1.7 on 2021-03-11 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pyportfolio', '0006_auto_20210309_1753'),
    ]

    operations = [
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('course', models.CharField(max_length=120)),
                ('school', models.CharField(max_length=80)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
            ],
        ),
    ]
