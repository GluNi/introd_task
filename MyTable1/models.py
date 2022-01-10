from django.db import models
import uuid

# Create your models here.
# Здесь описана структура БД
class DateItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    registration_date = models.DateField()
    last_activity_date = models.DateField()
    

    
    def __str__(self) -> str:
        return f'ID: {self.id}, RD: {self.registration_date}, LAD: {self.last_activity_date}'
        #return '{0} {1} {2}'.format(self.user_id, self.date1, self.date2)

   