from rest_framework import viewsets
from rest_framework import filters
from core.abstract.viewsets import AbstractViewSet
from core.user.serializers import UserSerializer
from core.user.models import User


class UserViewSet(AbstractViewSet):
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['updated', 'created']
    ordering = ['-updated']