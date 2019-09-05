from rest_framework import generics, status

from apis.models.subscriber import Subscriber
from apis.serializers.subscribers_serializer import SubscriberSerializer, SubscriberCheckerSerializer
from rest_framework.response import Response


class SubscriberCreateView(generics.CreateAPIView):
    permission_classes = []

    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer


class SubscriberCheckView(generics.GenericAPIView):
    permission_classes = []

    def post(self, request, *args, **kwargs):
        # TODO: Add validation
        email = request.data.get('email')
        password = request.data.get('password')

        subscriber = Subscriber.objects.filter(email=email, password=password)
        if subscriber:
            serializer = SubscriberCheckerSerializer(data=subscriber)
            serializer.is_valid()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_403_FORBIDDEN)


subscriber_create_view = SubscriberCreateView.as_view()
subscriber_check_view = SubscriberCheckView.as_view()
