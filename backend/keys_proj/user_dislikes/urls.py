from django.urls import path
# Explicit imports
from .views import All_dislikes, A_dislike

urlpatterns = [
    path('', All_dislikes.as_view(), name='all_dislikes'),
    path("<int:dislike_id>/", A_dislike.as_view(), name="a_dislike")
]
    