from rest_framework import viewsets
from rest_framework.decorators import *
from listings.models import Transaction
from rest_framework.response import Response
from .serializers import TransactionSerializer


class TransactionViewSet(viewsets.ModelViewSet):

    serializer = TransactionSerializer
    queryset = Transaction.objects.all()

    @action(detail=False,methods=['put'])
    def bid(self, request):
        pass

    @action(detail=False,methods=['put'])
    def accept_bid(self, request):
        pass