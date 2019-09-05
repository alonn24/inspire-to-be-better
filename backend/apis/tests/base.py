import pytest
from django.test import Client

from apis.models.subscriber import Subscriber


@pytest.mark.django_db
class BaseTest:
    @pytest.fixture()
    def client(self):
        return Client()

    @pytest.fixture()
    def subscriber(self):
        return Subscriber.objects.create(first_name="David", last_name="Goggins", email="david@goggins.com",
                                         password="nasihi")

    @pytest.fixture()
    def subscriber2(self):
        return Subscriber.objects.create(first_name="Mark", last_name="Whalberg", email="mark@whalberg.com",
                                         password="nasihi2")
