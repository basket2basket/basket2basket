from rest_framework import serializers

from listings.models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing

        fields = ('id', 'title', 'description', 'price', 'status', 'address')

