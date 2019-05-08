from django.urls import path
from api import views

urlpatterns = [
    path('api/', views.task_list),
    path('api/<int:pk>/', views.task),
    path('api/<int:pk>/<int:fk>/', views.task_detail)
]
