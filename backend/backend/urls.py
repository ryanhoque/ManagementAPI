from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from api import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # Endpoint to list or create members is /api/
    url(r'^api/?$', views.MemberList.as_view()),
    # Endpoint to update or delete members is /api/[ID]/
    url(r'^api/(?P<pk>[0-9]+)/?$', views.MemberDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
