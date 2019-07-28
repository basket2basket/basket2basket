from django.urls import path

from .views import (
    ListingListView,
    ListingDetailView,
    ListingCreateView,
    ListingUpdateView,
    ListingDeleteView
)

urlpatterns = [
    path('', ListingListView.as_view()),
    path('create/', ListingCreateView.as_view()),
    path('<pk>', ListingDetailView.as_view()),
    path('<pk>/update/', ListingUpdateView.as_view()),
    path('<pk>/delete/', ListingDeleteView.as_view())
]
