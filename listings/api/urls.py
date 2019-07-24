# from django.urls import path
#
# from .views import (
#     ListingListView,
#     ListingDetailView,
#     ListingCreateView,
#     ListingDestroy,
#     ListingUpdate
# )
#
# urlpatterns = [
#     path('', ListingListView.as_view()),
#     path('create/', ListingCreateView.as_view()),
#     path('<pk>', ListingDetailView.as_view()),
#     path('<pk>/update/', ListingUpdate.as_view()),
#     path('<pk>/delete/', ListingDestroy.as_view()),
# ]

from listings.api.views import ListingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ListingViewSet, base_name='listings')
urlpatterns = router.urls