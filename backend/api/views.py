from django.shortcuts import render
from rest_framework import generics
from .models import Member
from .serializers import MemberSerializer

# list members (GET) or add members (POST)
class MemberList(generics.ListCreateAPIView):
	queryset = Member.objects.all()
	serializer_class = MemberSerializer

# update members (PATCH) or delete members (DELETE)
class MemberDetail(generics.RetrieveUpdateDestroyAPIView):
	queryset = Member.objects.all()
	serializer_class = MemberSerializer