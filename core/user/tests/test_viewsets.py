from rest_framework import status
from core.fixtures.user import user
from core.fixtures.post import post


class TestUserViewSet:
    
    endpoint = '/api/user/'

    def test_list(self, client, user):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1


    def test_retrieve(self, client, user):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint + str(user.public_id) + "/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == user.public_id.hex
        assert response.data['username'] == user.username 
        assert response.data['email'] == user.email


    def test_create(self, client, user):
        pass

    def test_update(self, client, user):
        pass