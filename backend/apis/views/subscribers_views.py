from rest_framework import generics

from apis.models.subscriber import Subscriber
from apis.serializers.subscribers_serializer import SubscriberSerializer


class SubscriberCreateView(generics.CreateAPIView):
    permission_classes = []

    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer


class SubscriberCheckView(generics.RetrieveAPIView):
    permission_classes = []

    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer


subscriber_list_create_view = SubscriberCreateView.as_view()
subscriber_check_view = SubscriberCheckView.as_view()
