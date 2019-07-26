from rest_framework import status
from django.urls import reverse
from apis.tests.base import BaseTest


class TestHelloWorldView(BaseTest):
    def test_get_hello(self, client):
        # Given - An empty client

        # When - Connecting to the hello world view
        response = client.get(reverse("hello-world"))

        # Then - A status 200 is returned
        assert status.HTTP_200_OK == response.status_code
        assert "World!" == response.data["Hello"]
