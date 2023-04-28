from django.contrib import admin
from recipe.models import Recipe
# Register your models here.
@admin.register(Recipe)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'author')