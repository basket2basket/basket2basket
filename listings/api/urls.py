from django.urls import path

from .views import (
    ListingListView,
    ListingDetailView,
    ListingCreateView,
    ListingUpdateView,
    ListingDeleteView
)

from .ListingView import ListingViewSet
from .TransactionView import TransactionViewSet
from .B2BUserView import UserListView
from rest_framework.routers import DefaultRouter, SimpleRouter

router = DefaultRouter()
router.register(r'listings', ListingViewSet )
router.register(r'transactions',TransactionViewSet,)
router.register(r'users',UserListView,)
urlpatterns = router.urls

#urlpatterns = [
 #   path('listing/', ListingViewSet.as_view({'get','list'})),
    #path('/transaction', TransactionViewSet.as_view())
#]
