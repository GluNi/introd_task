from django.contrib import admin

# Register your models here.
from .models import DateItem
#admin.site.register(DateItem) shows column in admin:
class DateItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'registration_date', 'last_activity_date')

# Register the admin class with the associated model
admin.site.register(DateItem, DateItemAdmin)
