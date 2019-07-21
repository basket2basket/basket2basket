
from listings.api.views import ListingViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ListingViewSet, base_name='listings')
urlpatterns = router.urls