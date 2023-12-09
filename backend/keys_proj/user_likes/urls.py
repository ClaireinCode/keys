from django.urls import path
# Explicit imports
from .views import All_likes, A_like

urlpatterns = [
    path('', All_likes.as_view(), name='all_likes'),
    path("<int:like_id>/", A_like.as_view(), name="a_like")
]