from django.urls import path

from .views import ListingListView, ListingDetailView
from .views import *

"""
In this list, all the possible routes are contained.They are created by making a path object that takes
a string which is your desired route for a client request and a function pointer to use as a callback when 
the route is called. notice that Model.model inherited classes (e.g ListingListView) use the result of the
 as_view method but pure routes do not use the result. this is because the model classes as_view returns a 
 function object intended to be hidden from view to handle the complexities of Django model test pages.
"""
urlpatterns = [
    path('', ListingListView.as_view()),
    path('<pk>', ListingDetailView.as_view()),
    path('api/test',testRoute)
]