from django import forms
import datetime
from django.core.exceptions import ValidationError
from django.utils.translation import ugettext_lazy as _


class DateItemForm(forms.Form): 
    #UserID = forms.IntegerField()   
    RegDate = forms.DateField()
    LADate = forms.DateField() 

   