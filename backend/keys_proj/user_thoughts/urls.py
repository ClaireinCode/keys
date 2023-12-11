from django.urls import path
# Explicit imports
from .views import All_thoughts, A_thought, Thoughts_by_house

urlpatterns = [
    path('', All_thoughts.as_view(), name="All_thoughts"),
    path("house_thoughts/<int:house_id>/", Thoughts_by_house.as_view(), name="Thoughts_by_house"),
    path("<int:thought_id>/", A_thought.as_view(), name="A_thought")

]