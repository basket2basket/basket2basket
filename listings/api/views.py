# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework import viewsets

from listings.models import Listing
from .serializers import ListingSerializer



class ListingViewSet(viewsets.ModelViewSet):

    serializer_class = ListingSerializer
    queryset = Listing.objects.all()

    #
    # class ListingListView(ListAPIView):
    #     queryset = Listing.objects.all()
    #     serializer_class = ListingSerializer
    #
    #
    # class ListingDetailView(RetrieveAPIView):
    #     queryset = Listing.objects.all()
    #     serializer_class = ListingSerializer
    #
    #
    # class ListingCreateView(CreateAPIView):
    #     queryset = Listing.objects.all()
    #     serializer_class = ListingSerializer
    #
    # class ListingDestroy(DestroyAPIView):
    #     queryset = Listing.objects.all()
    #     serializer_class = ListingSerializer
    #
    # class ListingUpdate(UpdateAPIView):
    #     queryset = Listing.objects.all()
    #     serializer_class = ListingSerializer