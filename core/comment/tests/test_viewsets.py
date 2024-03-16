from rest_framework import status
from core.fixtures.user import user
from core.fixtures.post import post
from core.fixtures.comment import comment


class TestCommentViewSet:
    # The comment resource is nested under the post resource
    endpoint = '/api/post/'

    def test_list(self, client, user, post, comment):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint + str(post.public_id) + "/comment/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data['count'] == 1 


    def test_retrieve(self, client, post, user, comment):
        client.force_authenticate(user=user)
        response = client.get(self.endpoint + str(post.public_id) + "/comment/" + str(comment.public_id) + "/")
        assert response.status_code == status.HTTP_200_OK
        assert response.data['id'] == comment.public_id.hex
        assert response.data['body'] == comment.body 
        assert response.data['author']['id'] == comment.author.public_id.hex

    def test_create(self, client, post, user):
        client.force_authenticate(user=user)
        data = {
            "body": "Test Comment Body",
            "author": user.public_id.hex,
            "post": post.public_id.hex
        }
        response = client.get(self.endpoint + str(post.public_id) + "/comment/", data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['body'] == data['body']
        assert response.data['author']['id'] == user.public_id.hex 
        