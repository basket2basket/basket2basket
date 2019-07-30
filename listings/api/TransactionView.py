from rest_framework import viewsets
from rest_framework.decorators import *
from listings.models import Transaction
from rest_framework.response import Response
from .serializers import TransactionSerializer
from rest_framework import mixins


class TransactionViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.DestroyModelMixin):

    serializer = TransactionSerializer
    queryset = Transaction.objects.all()

    @action(detail=False,methods=['put'])
    def bid(self, request):
        transaction = self.get_object()
        data = TransactionSerializer(data=request.data)
        if data.is_valid():
            intersect = set(transaction.offers).intersection(set(data.validated_data['offers']))
            if len(intersect) > 0:
                transaction.offers = data.validated_data['offers']
                transaction.save()
                return Response({'OK': 'bid made'}, status=200)
            else:
                return Response(data={'ERROR':'Item has already been offered as a bid for this listing'},status=406)
        return Response(data={'ERROR','Something went wrong'},status=404)

    @action(detail=False,methods=['put'])
    def accept_bid(self, request):
        transaction = self.get_object()
        serial = TransactionSerializer(data=request.data)
        if serial.is_valid():
            transaction.winning_bid = serial.validated_data['winning_bid']
            transaction.status = False
            transaction.save()
            return Response({'OK': 'bid made'}, status=200)
        return Response(data={'ERROR','Something went wrong'},status=404)


