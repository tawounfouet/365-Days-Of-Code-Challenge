from django import forms
from .models import Candidate
from django.core.validators import RegexValidator


class CandidateForm(forms.ModelForm):

    # VALIDATIONS
    firstname = forms.CharField(label='First name',
                                min_length=3,
                                max_length=50,
                                validators=[RegexValidator(
                                    '^[a-zA-ZÀ-ÿ\s]*$', message="Only letters is allowed !")],
                                widget=forms.TextInput(attrs={'placeholder': 'First name'}))

    lastname = forms.CharField(label='Last name',
                               min_length=3,
                               max_length=50,
                               validators=[RegexValidator(
                                   '^[a-zA-ZÀ-ÿ\s]*$', message="Only letters is allowed !")],
                               widget=forms.TextInput(attrs={'placeholder': 'Last name'}))

    email = forms.CharField(label='Email address',
                            min_length=3,
                            max_length=50,
                            validators=[RegexValidator(
                                '^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', message="Put a valid email !")],
                            widget=forms.TextInput(attrs={'placeholder': 'Email'}))

    # Method 1
   # age = forms.CharField(widget=forms.TextInput(attrs={'type': 'number'}))

    # Method 2
    age = forms.CharField(label='Your age',
                          validators=[RegexValidator(
                                ' ^[0-9]*$', message="Only number is allowed !")],
                          widget=forms.TextInput(attrs={'type': 'number'}))

    message = forms.CharField(label='About you',
                              min_length=10,
                              max_length=500,
                              required=False,
                              validators=[RegexValidator(
                                  '^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$', message="Put a valid email !")],
                              widget=forms.Textarea(attrs={'placeholder': 'Talk a little about you', 'rows': 10}))

    class Meta:
        model = Candidate
        #fields  = ["firstname", "lastname", "email", "age", "message"]
        #exclude = ["email", "message"]
        fields = "__all__"

        # Outside Widget
        widgets = {
            'phone': forms.TextInput(
                attrs={'style': 'font-size: 13px',
                       'placeholder': 'Phone',
                       'data-mask': '(+00) 00 00 00 00 00'
                       }
            )

        }
