# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework import viewsets
from rest_framework.decorators import *
from listings.models import Listing
from rest_framework.response import Response
from .serializers import ListingSerializer



class ListingViewSet(viewsets.ViewSet):

    serializer_class = ListingSerializer
    queryset = Listing.objects.all()

    def list(self,request):
        serializer = ListingSerializer(ListingViewSet.queryset, many=True)
        return Response(serializer.data)


    def create(self,request):
        data = ListingSerializer(data=request.data)
        if data.is_valid():
            data.save()
        return Response({'hello': 'I exist without blowing up'})

    @action(detail=False, methods=['put'])
    def updatestatus(self,request):
        pass


    @action(detail=False, methods=['post'])
    def listOne(self,request):
        ser = ListingSerializer(data=request.data)
        if(ser.is_valid()):
            return Response(ser.data)
        else:
            return Response({'ERROR': 'Not Found'})




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