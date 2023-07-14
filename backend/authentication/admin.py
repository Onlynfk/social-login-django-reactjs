from django.contrib import admin
from .models import User
# Register your models here

class UserAmdin(admin.ModelAdmin):
    search_fields = ('email',)
    list_display = ('email', 'first_name', 'last_name', 'registration_method')

admin.site.register(User, UserAmdin)
