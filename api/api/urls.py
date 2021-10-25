from django.urls import path
from api import views

urlpatterns = [
    path('', views.InputTextAll.as_view()),
    path('<int:pk>/', views.InputTextSingle.as_view()),
]