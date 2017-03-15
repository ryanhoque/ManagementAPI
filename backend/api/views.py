from django.http import HttpResponse, JsonResponse
from .models import Member
import json

def index(request):
	listing = {}
	all_members = Member.objects.all()
	for member in all_members:
		listing[member.id] = str(member)
	return JsonResponse(listing)

def delete(request, api_id):
	return HttpResponse("")