from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from rest_framework.routers import DefaultRouter 
from first.views import UserViewSet, MyTokenObtainPairView, NoteViewSet


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/', include('first.urls')),

]

router = DefaultRouter()
router.register('user', UserViewSet, basename='user')
router.register('notes', NoteViewSet, basename='note')


urlpatterns += router.urls
