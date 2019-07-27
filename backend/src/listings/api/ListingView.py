# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework import viewsets
from rest_framework.decorators import *
from listings.models import Listing
from rest_framework.response import Response
from .serializers import ListingSerializer
from .b2bcore import locator



class ListingViewSet(viewsets.ViewSet):

    serializer_class = ListingSerializer
    queryset = Listing.objects.all()

    def list(self,request):
        serializer = ListingSerializer(Listing.objects.all(), many=True)
        #print(locator.is_valid_and_in_range('1039 W Granville Ave, Chicago, IL 60660'))
        return Response(serializer.data)


    def create(self, request):
        data = ListingSerializer(data=request.data)
        if data.is_valid():
            location = data.validated_data['address']
            check =locator.is_valid_and_in_range(str(location), is_in_test=True)  # set to false for production results
            if check[0] == True:
                data.save()
            else:
                return Response({'ERROR': check[1]}, status=406)
        return Response({'ERROR': 'Something went wrong :('},status=400)

    @action(detail=False, methods=['put'])
    def updatestatus(self, request):
        pass


    @action(detail=False, methods=['post'])
    def listOne(self, request):
        serializer = ListingSerializer(data=request.data)
        if(serializer.is_valid()):
            return Response(serializer.data)
        else:
            return Response({'ERROR': 'Not Found'})



