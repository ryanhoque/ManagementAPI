from django.conf.urls import url
from . import views

urlpatterns = [
	# /api/ endpoint by default lists all users
	url(r'^$', views.index, name='index'),

	# /api/list endpoint also lists all users
	url(r'^list/?$', views.index, name='index'),

	# /api/[id] deletes specified id
	url(r'^(?P<api_id>[0-9]+)$', views.delete, name='delete'),
]