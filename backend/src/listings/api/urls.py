

from listings.api.ListingView import ListingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ListingViewSet, basename='listings')
urlpatterns = router.urls