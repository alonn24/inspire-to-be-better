from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response


class HelloWorldView(GenericAPIView):
    def get(self, request, *args, **kwargs):
        return Response(data={"Hello": "World!"}, status=status.HTTP_200_OK)


hello_world_view = HelloWorldView.as_view()
