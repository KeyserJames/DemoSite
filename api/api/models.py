from django.db import models

# Create your models here.
class InputModel(models.Model):
    inputText = models.TextField()

def __str__(self):
    return self.inputText