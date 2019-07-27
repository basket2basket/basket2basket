from rest_framework import serializers

from listings.models import Listing, Transaction

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing

        fields = ('id', 'title', 'description', 'price', 'status', 'address')


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction

        fields = ('id', 'listing', 'offers', 'status', 'winning_bid')
