# Generated by Django 3.0.5 on 2022-01-06 10:55

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('MyTable1', '0002_auto_20220105_2028'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dateitem',
            name='user_id',
        ),
        migrations.AddField(
            model_name='dateitem',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False),
        ),
    ]
