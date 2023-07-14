from django.urls import path
from . import views

urlpatterns = [
   path("v1/auth/login/google/", views.GoogleLoginApi.as_view(), 
         name="login-with-google"),
]
