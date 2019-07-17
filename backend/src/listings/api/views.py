from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.http import response, request
from listings.models import Listing
from .serializers import ListingSerializer
import json

class ListingListView(ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


class ListingDetailView(RetrieveAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer

def testRoute(req):
    """
    This is just an example of a pure http route handling function.
    It can be accessed on the route /api/pure/test as shown in urls.py
    the function name does not matter as long as it is binded to a Path object
    and added to the urls List in urls.py. The path can be any valid url path specified
    by the Django framework and the smart people that make internet stuff.

    :param req: this is the request object passed in by Django when it calls this function
    :return: a JSON object wrapped in the Http response class. returning response object not required but is recommended
    """
    if req.method == 'GET':
        #the following variable is an example dictionary, pythons version of a hashmap
        jsonDict = {
            'Test': 'JSON',
            'List' : [1,2,'hello']
        }
        JSON = json.dumps(jsonDict) # stringify dictionary and convert to json string
        return response.HttpResponse(JSON) # adds some stuff so we don't look like amateurs
