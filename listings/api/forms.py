from django import forms
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from listings.models import B2BUser


class B2BUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm):
        model = B2BUser
        fields = ('username', 'email')


class B2BUserChangeForm(UserChangeForm):

    class Meta:
        model = B2BUser
        fields = UserChangeForm.Meta.fields

