import datetime
from django.shortcuts import render, get_object_or_404
from .models import DateItem
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .forms import DateItemForm
import uuid
from .utils import get_plot
import numpy as np
import statistics



# Create your views here.
def metrics(request):
    mydata_list = DateItem.objects.all()
    now = datetime.date.today()    
    X=7
    num_return_X = 0
    num_log_in_X = 0 
    x = []  
    for mydata in mydata_list:
        x.append(mydata.last_activity_date.toordinal() - mydata.registration_date.toordinal())        
        if (mydata.last_activity_date.toordinal() - mydata.registration_date.toordinal()) >= X:
            num_return_X += 1
        if (now.toordinal() - mydata.registration_date.toordinal()) >= X:
            num_log_in_X +=1
            
    if len(x)>0:
        q10 = round(np.percentile(x, 10), 2)
        q90 = round(np.percentile(x, 90), 2)
        mean=round(statistics.mean(x), 2)
        median=round(statistics.median(x), 2)
        chart = get_plot(x)
        lenx = len(x)
        if num_log_in_X>0:
           metrics = round((num_return_X/num_log_in_X)*100, 2)
        else:
           metrics = 'Impossible to calculate'
    else:
        return render(request, 'data_list.html')             
    return render(request, 'data_list.html', {'mydata_list': mydata_list,
                                              'now': now,
                                              'X': X,
                                              'metrics': metrics,
                                              'q10': q10,
                                              'q90': q90,
                                              'mean': mean,
                                              'median': median,
                                              'chart': chart,
                                              'lenx': lenx,
                                              })


def index(request):
    """View function for home page of site."""
    mydata_list = DateItem.objects.all()
    num_fields = DateItem.objects.all().count()      

    context = {         
         'num_id': num_fields,  
         'mydata_list': mydata_list,
    }

    # Render the HTML template index.html with the data in the context variable
    return render(request, 'index.html', context=context)

def dataret(request):
    if request.method == 'POST':
        data = DateItem(id=uuid.uuid4(),
                        registration_date=request.POST['Registration'],
                        last_activity_date=request.POST['Last Activity'
                        ])    
        data.save()
    return HttpResponseRedirect(reverse('index'))


	