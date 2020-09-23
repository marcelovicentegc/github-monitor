from rest_framework import status, generics, filters
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

from .integrations import Github
from .models import Commit
from .serializers import CommitSerializer, RepositorySerializer

class CommitsEndpoint(generics.ListAPIView):
    """
    Gets every commit made.
    """
    permission_classes = (IsAuthenticated,)
    
    def get(self, request, format=None):
        commits = Commit.objects.all()
        serializer = CommitSerializer(commits, many=True)
        return Response(serializer.data)

class RepositoriesEndpoint(APIView):
    permission_classes = (IsAuthenticated,)
    parser_classes = [JSONParser]

    def post(self, request):
        """
        Checks if a repo associated with this
        user exists on Github and, if it does,
        saves the repo and its commit history from
        the last 30 days.
        """
        data = request.data
        serializer = RepositorySerializer(data=data)
        
        if serializer.is_valid():
            commits = Github.list_commits(data['name'], data['repo'])
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
