from rest_framework import serializers
from .models import User

        
class UserSerializer(serializers.ModelSerializer):
    # role = UsersSerializer(read_only = True)
    role = serializers.SerializerMethodField()
    # group_id = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ['id', 'first_name', 'username', 'role']
        
    def get_role(self, obj):
        return obj.users.get_role_display()
        