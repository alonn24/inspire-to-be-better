from django.db import models
from django.utils import timezone


class Subscriber(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=40)
    email = models.EmailField(blank=False, null=False)
    password = models.CharField(max_length=40, blank=False, null=False)
    created = models.DateTimeField(editable=False)

    def save(self, *args, **kwargs):
        """ On save, update timestamps """
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Subscriber, self).save(*args, **kwargs)
