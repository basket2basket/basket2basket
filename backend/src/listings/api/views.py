from rest_framework.generics import ListAPIView, RetrieveAPIView

from listings.models import Listing
from .serializers import ListingSerializer

class ListingListView(ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingDetailView(RetrieveAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
