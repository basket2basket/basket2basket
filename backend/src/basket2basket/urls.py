
from django.contrib import admin
from django.urls import path, include
import listings.api.views

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('listings.api.urls')),

]
