'use client';

import { useAuth } from '@/providers/auth-provider';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2, LogOut, Mail, Calendar } from 'lucide-react';

export function UserProfile() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="flex items-center justify-center p-6">
          <Loader2 className="h-6 w-6 animate-spin" />
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card className="w-full max-w-md">
        <CardContent className="p-6">
          <p className="text-center text-muted-foreground">No user signed in</p>
        </CardContent>
      </Card>
    );
  }

  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={user.user_metadata?.avatar_url}
              alt={user.user_metadata?.full_name || user.email || 'User avatar'}
            />
            <AvatarFallback>
              {user.user_metadata?.full_name
                ? user.user_metadata.full_name.substring(0, 2).toUpperCase()
                : getInitials(user.email || 'U')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <CardTitle className="text-lg">
              {user.user_metadata?.full_name || 'User'}
            </CardTitle>
            <CardDescription className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              {user.email}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Email Verified</p>
            <p className="font-medium">
              {user.email_confirmed_at ? 'Yes' : 'No'}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Provider</p>
            <p className="font-medium capitalize">
              {user.app_metadata?.provider || 'email'}
            </p>
          </div>
        </div>

        {user.created_at && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Joined {formatDate(user.created_at)}</span>
          </div>
        )}

        <div className="pt-2">
          <Button
            variant="outline"
            onClick={signOut}
            className="w-full"
            disabled={loading}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
