from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
import listings.api.views

urlpatterns = [

    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('listings.api.urls')),
    url('.*', TemplateView.as_view(template_name='index.html')),

]

from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView
from api import urls as api_urls


