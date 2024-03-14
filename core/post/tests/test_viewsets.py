from rest_framework import status
from core.fixtures.user import user
from core.fixtures.post import post

class TestPostViewSet:
    endpoint = '/api/post/'



    def test_list(self, client, user, post):
        client.force_authentication(user=user)
        response = client.get(self.endpoint)
        assert response.status_code == status.HTTP_200_OK
        assert response.data["count"] == 1



    def test_create(self, client, user):
        client.force_authenticate(user=user)
        data = {
            "body": "Test Post Body",
            "author": user.public_id.hex
        }
        response = client.post(self.endpoint, data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['body'] == data['body']
        assert response.data['author']['id'] == user.public_id.hex