from django.conf.urls import url
from . import views

urlpatterns = [
	# /api/ endpoint lists all users
	url(r'^$', views.index, name='index'),

	# /api/[id] deletes specified id
	url(r'^(?P<api_id>[0-9]+)$', ),
]