from django.urls import path
from apis.views.subscribers_views import subscriber_list_create_view


class APIViews:
    urlpatterns = [
        path('subscribers/', subscriber_list_create_view, name="subscribers-list")
    ]

    @property
    def urls(self):
        return self.urlpatterns, 'api', "api_views"

