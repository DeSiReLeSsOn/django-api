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