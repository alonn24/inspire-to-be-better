import pytest
from django.test import Client


@pytest.mark.django_db
class BaseTest:
    @pytest.fixture()
    def client(self):
        return Client()
