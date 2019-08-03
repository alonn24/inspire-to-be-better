from rest_framework import generics

from apis.models.subscriber import Subscriber
from apis.serializers.subscribers_serializer import SubscriberSerializer


class SubscriberListCreateView(generics.ListCreateAPIView):
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer


subscriber_list_create_view = SubscriberListCreateView.as_view()
