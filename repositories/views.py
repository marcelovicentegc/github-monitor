from rest_framework import status, generics, filters
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Commit
from .serializers import CommitSerializer, RepositorySerializer

class CommitsEndpoint(generics.ListAPIView):
    """
    Gets every commit made.
    """
    permission_classes = (IsAuthenticated,)
    queryset = Commit.objects.all()
    serializer_class = CommitSerializer


class RepositoryEndpoint(APIView):
    """
    Creates a repository.
    """
    permission_classes = (IsAuthenticated,)

    def post(self,request):
        serializer = RepositorySerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
