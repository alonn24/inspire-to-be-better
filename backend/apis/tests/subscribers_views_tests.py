from apis.models.subscriber import Subscriber
from apis.tests.base import BaseTest
from rest_framework import status
from django.urls import reverse


# TODO: Complete tests
class TestSubscribersCreateView(BaseTest):
    # def test_list_no_subscribers(self, client):
    #     # Given - No users in the DB
    #     assert 0 == Subscriber.objects.count()
    #
    #     # When - Retrieving the list of subscribers
    #     response = client.get(reverse("api:subscriber-create"))
    #
    #     # Then - A status 200 is returned, no subscribers are returned
    #     assert status.HTTP_200_OK == response.status_code
    #     assert 0 == len(response.data)

    # def test_list_one_subscriber(self, client, subscriber):
    #     # Given - One user in the DB
    #     assert 1 == Subscriber.objects.count()
    #
    #     # When - Retrieving the list of subscribers
    #     response = client.get(reverse("api:subscriber-create"))
    #
    #     # Then - A status 200 is returned, one subscribers is returned
    #     assert status.HTTP_200_OK == response.status_code
    #     assert 1 == len(response.data)
    #     self._compare_subscribers(subscriber, response.data[0])

    # def test_list_multiple_subscriber(self, client, subscriber, subscriber2):
    #     # Given - Two users in the DB
    #     assert 2 == Subscriber.objects.count()
    #
    #     # When - Retrieving the list of subscribers
    #     response = client.get(reverse("api:subscribers-list"))
    #
    #     # Then - A status 200 is returned, two subscribers are returned
    #     assert status.HTTP_200_OK == response.status_code
    #     assert 2 == len(response.data)
    #     result_subscribers = sorted(response.data, key=lambda x: (x['first_name'], x['last_name']))
    #     self._compare_subscribers(subscriber, result_subscribers[0])
    #     self._compare_subscribers(subscriber2, result_subscribers[1])

    def test_create_new_subscriber(self, client):
        # Given - No users in the DB
        assert 0 == Subscriber.objects.count()

        # When - Creating a new subscriber
        response = client.post(reverse("api:subscriber-create"), data={
            'first_name': 'Zigi',
            'last_name': 'Zaguri',
            'email': 'zigi@inspire.com',
            'password': 'nasichi'
        })

        # Then - A status 201 is returned, one subscriber was created
        assert status.HTTP_201_CREATED == response.status_code
        assert 1 == Subscriber.objects.count()

        # TODO: Verify the results of the created subscriber

    def test_create_already_existing_subscriber(self, client, subscriber):
        pass

    def test_create_missing_first_name(self):
        pass

    def test_create_missing_last_name(self):
        pass

    def test_create_missing_email(self):
        pass

    @staticmethod
    def _compare_subscribers(user_object, user_result):
        assert user_result['id'] == user_object.id
        assert user_result['first_name'] == user_object.first_name
        assert user_result['last_name'] == user_object.last_name
        assert user_result['email'] == user_object.email
        assert user_result['password'] == user_object.password
        assert user_result['created'] == user_object.created.isoformat().replace('+00:00', 'Z')


class TestSubscriberCheckView(BaseTest):
    def test_check_existing_subscriber(self, client, subscriber):
        # Given - No users in the DB
        assert 1 == Subscriber.objects.filter(email=subscriber.email).count()

        # When - Creating a new subscriber
        response = client.post(reverse("api:subscriber-check"), data={
            'email': subscriber.email,
            'password': subscriber.password
        })

        # Then - A status 200 is returned
        assert status.HTTP_200_OK == response.status_code

    def test_check_none_existing_subscriber(self, client):

        # Given - No users in the DB
        assert 0 == Subscriber.objects.count()

        # When - Creating a new subscriber
        response = client.post(reverse("api:subscriber-check"), data={
            'email': 'zigi@inspire.com',
            'password': 'nasichi'
        })

        # Then - A status 403 is returned
        assert status.HTTP_403_FORBIDDEN == response.status_code
