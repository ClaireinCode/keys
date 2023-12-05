from django.urls import path
# Explicit imports
from .views import All_dislikes

urlpatterns = [
    path('', All_dislikes.as_view(), name='all_dislikes'),
]