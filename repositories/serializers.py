from rest_framework import serializers

from .models import Commit, Repository


class RepositorySerializer(serializers.ModelSerializer):
    repo = serializers.CharField(source='name')

    class Meta:
        model = Repository
        fields = ('repo',)


class CommitSerializer(serializers.ModelSerializer):
    repository = serializers.StringRelatedField(many=False)

    class Meta:
        model = Commit
        fields = (
            'message',
            'sha',
            'author',
            'url',
            'avatar',
            'date',
            'repository',
        )
