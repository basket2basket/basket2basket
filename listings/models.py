# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models



class Listing(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField()
    categoryChoices = (
        ('Produce', 'Produce'),
        ('Cat Products', 'Cat Products'),
        ('Apparel', 'Apparel'),
        ('Miscellaneous', 'Miscellaneous'),
    )

    category = models.CharField(max_length=100, choices=categoryChoices, default='Miscellaneous')

    def __str__(self):
        return self.title