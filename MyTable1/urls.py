from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),    
    path('dataret', views.dataret, name='dataret'),
    path('metrics', views.metrics, name='metrics'),
    

]
