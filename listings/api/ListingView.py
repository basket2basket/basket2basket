# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework import viewsets
from rest_framework.decorators import *
from listings.models import Listing
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from .serializers import ListingSerializer
from .b2bcore import locator
from django.shortcuts import get_object_or_404
from django.core import serializers
from rest_framework.mixins import ListModelMixin


class ListingViewSet(viewsets.GenericViewSet, ListModelMixin):

    serializer_class = ListingSerializer
    queryset = Listing.objects.all()
    lookup_field = 'id'
    renderer_classes = [JSONRenderer]
    authorization_classes = (TokenAuthentication, )



    def get_serializer_context(self):
        context = super(ListingViewSet, self).get_serializer_context()
        return context


    def list(self,request, *args, **kwargs):
        serializer_context = self.get_serializer_context()

        serializer = ListingSerializer(Listing.objects.all(), many=True,context=serializer_context)
        return Response(serializer.data)

    def create(self, request):
        data = ListingSerializer(data=request.data)
        if data.is_valid():
            location = data.validated_data['address']
            check =locator.is_valid_and_in_range(str(location), is_in_test=True)  # set to false for production results
            if check[0]:
                data.save()
                return Response({'OK','Listing saved'},status=200)
            else:
                return Response({'ERROR': check[1]}, status=406)
        return Response({'ERROR': 'Something went wrong :('},status=400)

    @action(detail=False, methods=['put'])
    def updatestatus(self, request):
        pass

    def retrieve(self, request, id):
        queryset = Listing.objects.all()
        listing = get_object_or_404(queryset, id=id)
        serializer = ListingSerializer(listing)
        return Response(serializer.data)

    # @action(detail=True,
    #         methods=['get'],
    #         url_path='(?P<listing_id>\d+)')
    # def listOne(self, request,*args, **kwargs):
    #     listing = Listing.objects.get(id=kwargs['listing_id'])
    #     serializer = ListingSerializer(data=[Listing.objects.get(id=kwargs['listing_id'])], many=False)
    #     if serializer.is_valid():
    #         return Response(serializer.validated_data)
    #     print(serializer.error_messages)
    #     return Response(serializer.validated_data)
    #     return Response({'ERROR': 'Something went wrong :('},status=400)



