from rest_framework import serializers

from listings.models import Listing, Transaction
from django.contrib.auth.models import User



class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('id' , 'title', 'description', 'price', 'status', 'address')


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction

        fields = ('id', 'listing', 'offers', 'status', 'winning_bid','owner')


class UserSerializer(serializers.ModelSerializer):
    model = User

    fields = ('username')