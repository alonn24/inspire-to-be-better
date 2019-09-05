from django.urls import path
from apis.views.subscribers_views import subscriber_create_view, subscriber_check_view


class APIViews:
    urlpatterns = [
        path('subscriber/', subscriber_create_view, name="subscriber-create"),
        path('subscriber_check/', subscriber_check_view, name="subscriber-check")

    ]

    @property
    def urls(self):
        return self.urlpatterns, 'api', "api_views"

