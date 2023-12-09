from django.urls import path
# Explicit imports
from .views import All_thoughts, A_thought

urlpatterns = [
    path('', All_thoughts.as_view(), name='all_thoughts'),
    path("house_thoughts/<int:house_id>/", All_thoughts.as_view(), name="thoughts_by_house"),
    path("<int:thought_id>/", A_thought.as_view(), name="a_thought")
]