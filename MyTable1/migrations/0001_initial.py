# Generated by Django 3.0.5 on 2022-01-05 08:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='date_item',
            fields=[
                ('user_id', models.IntegerField(primary_key=True, serialize=False)),
                ('date1', models.DateField()),
                ('date2', models.DateField()),
            ],
        ),
    ]
