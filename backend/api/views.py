from django.http import HttpResponse

def index(request):
	return HttpResponse("<h1>Home page</h1>")

def delete(request, api_id):
	return HttpResponse("<h2>?</h2>")