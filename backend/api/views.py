from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Member
from .serializers import MemberSerializer

# list members or add members
class MemberList(APIView):
	def get(self, request):
		members = Member.objects.all()
		serializer = MemberSerializer(members, many=True)
		return Response(serializer.data)
	def post(self):
		pass

# def index(request):
# 	listing = {}
# 	all_members = Member.objects.all()
# 	for member in all_members:
# 		listing[member.id] = str(member)
# 	return JsonResponse(listing)

# def delete(request, api_id):
# 	return HttpResponse("")