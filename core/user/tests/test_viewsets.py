from rest_framework import status
from core.fixtures.user import user
from core.fixtures.post import post
import pytest
from core.user.models import User


data_user = {
    "username": "test_user",
    "email": "test1@gmail.com",
    "first_name": "Test",
    "last_name": "User", 
    "password": "test_password"

}


@pytest.mark.django_db 
def test_create_user():
    user = User.objects.create_user(**data_user)
    assert user.username == data_user["username"]
    assert user.email == data_user["email"]
    assert user.first_name == data_user["first_name"]
    assert user.last_name == data_user["last_name"]



data_superuser = {
    "username": "test_superuser",
    "email": "testsuperuser@gmail.com",
    "first_name": "Test",
    "last_name": "Superuser",
    "password": "test_password"
}


@pytest.mark.django_db
def test_create_superuser():
    user = User.objects.create_superuser(**data_superuser)
    assert user.username == data_superuser["username"]
    assert user.email == data_superuser["email"]
    assert user.first_name == data_superuser["first_name"]
    assert user.last_name == data_superuser["last_name"]
    assert user.is_superuser == True
    assert user.is_staff == True

class TestUserViewSet:
    
    endpoint = '/api/user/'

    def test_list(self, client, user):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint + str(user.public_id) + "/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1


    def test_retrieve(self, client, user):
        pass


    def test_create(self, client, user):
        pass

    def test_update(self, client, user):
        pass