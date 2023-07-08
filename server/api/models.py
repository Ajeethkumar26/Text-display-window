from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)  # You should use hashed passwords in a real application

    def __str__(self):
        return self.username

class Text(models.Model):
    text = models.TextField(default="text")

    

    def __str__(self):
        return self.Text
