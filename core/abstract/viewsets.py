from rest_framework import viewsets
from rest_framework import filters
from core.user.serializers import UserSerializer
from core.user.models import User


class AbstractViewSet(viewsets.ModelViewSet):
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['updated', 'created']
    ordering = ['-updated']