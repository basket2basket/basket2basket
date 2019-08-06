# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.conf import settings

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth.models import User



class ListingQuerySet(models.QuerySet):
    def get_by_category(self, category):
        return self.filter(category=category)





class Listing(models.Model):

    title = models.CharField(max_length=120)
    description = models.TextField()
    price = models.DecimalField(decimal_places=2, max_digits=100, blank=False, default=0.0)
    address = models.CharField(max_length=50, null=True)
    status = models.CharField(max_length=10, default='unknown')
    categoryChoices = (
        ('Produce', 'Produce'),
        ('Cat Products', 'Cat Products'),
        ('Apparel', 'Apparel'),
        ('Miscellaneous', 'Miscellaneous'),

    )
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, default=1)

    category = models.CharField(max_length=100, choices=categoryChoices, default='Miscellaneous')



    def __str__(self):
        return self.title


class Transaction(models.Model):

    listing = models.OneToOneField(Listing, on_delete=models.CASCADE, primary_key=True)
    offers = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name='offers')
    status = models.BooleanField(null=False)
    winning_bid = models.OneToOneField(Listing, on_delete=models.CASCADE, related_name='winning_bid')

    def __str__(self):
        return self.title



