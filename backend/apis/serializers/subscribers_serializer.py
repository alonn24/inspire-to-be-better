from rest_framework import serializers
from apis.models.subscriber import Subscriber


class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscriber
        fields = ['id', 'first_name', 'last_name', 'created', 'email']
        read_only = ['id', 'created']


