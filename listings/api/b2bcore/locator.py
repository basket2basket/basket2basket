
import geocoder
import os
from dotenv import load_dotenv



googlekey = os.environ['GOOGLE_API_KEY']



_zipcodes = {
    #zipcodes that define edgewater neighborhood
    60660,
    60640,
}

_errors = {
    # return one of these if there is a problem
    1: 'location not in Edgewater Neighborhood',
    2: 'location not found',
    3: 'unknown processing error',
}

def is_valid_and_in_range(location, is_in_test=False):

    """
    takes the address param from a Listing object and returns tuple
    that contains a success boolean and an error string ( null if no errors)
    :param location: address String
    :param is_in_test: default False, will simulate successful validation if True
    :return: tuple <Boolean, String>
    """

    if is_in_test:
        return (True, None)
    zcode = _get_location_type(location)
    if zcode in _zipcodes:
        return (True, None)
    elif zcode not in _zipcodes:
        return (False, _errors[1])


def _get_location_type(loc):
    location_list = str(loc).split(',')
    if len(location_list) == 2:
        try:
            float(location_list[0])
            float(location_list[1])
        except Exception as e:
            return _on_address(loc)
        else:
            return _on_coordinates(location_list[0], location_list[1])
    else:
        return _on_address(loc)


def _on_coordinates(x, y):
    coords = geocoder.google([x,y], method='reverse', key=str(googlekey))
    if coords.postal:
        return int(coords.postal)
    else:
        return _errors[2]


def _on_address(loc):
    coords = geocoder.google(loc, key=str(googlekey))
    if coords.postal:
        return int(coords.postal)
    else:
        return _errors[2]
