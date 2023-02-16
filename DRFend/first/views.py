from rest_framework import viewsets, generics, fields, serializers
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.decorators import action

from .serializers import UserSerializer,NoteSerializer
from .models import Note


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()
    serializer_class= NoteSerializer
    permission_classes = (AllowAny,)

    @action(detail=False, methods=['get'])
    def user_note(self,request):
        user = request.user
        note = Note.objects.get(user=user)
        serializer = self.get_serializer(note)
        return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

