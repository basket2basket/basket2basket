
from django.contrib import admin
from django.urls import path, include
import listings.api.ListingView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/listings/', include('listings.api.urls')),

]
