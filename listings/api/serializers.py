from rest_framework import serializers

from listings.models import Listing, Transaction
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token



class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ('id', 'title', 'description', 'price', 'status', 'address')


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction

        fields = ('id', 'listing', 'offers', 'status', 'winning_bid','owner')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user