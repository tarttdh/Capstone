from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers

class Post(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=False)
    content = models.TextField()
    author = models.CharField(max_length=100, blank=False)
    owner = models.ForeignKey('auth.user', related_name='posts', on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User 
        fields = ('id', 'username', 'email', 'passoword')
        extra_kwargs = {'password' : {'write_only': True}}
    
#Model for logining for users. 