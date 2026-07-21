import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { api } from '@/lib/api';
import type { User } from '@/types/user';

interface AuthContextData {
  user: User | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
  signOut: () => void;
}

const AuthContext =
  createContext<AuthContextData>(
    {} as AuthContextData,
  );

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  async function refreshUser() {
    try {
      const response = await api.get(
        '/auth/me',
      );

      setUser(response.data);
    } catch {
      setUser(null);
    }
  }

  useEffect(() => {
    refreshUser().finally(() =>
      setLoading(false),
    );
  }, []);

  async function signOut() {
    import('@/lib/api').then(({ clearToken }) => {
      clearToken();
      setUser(null);
      window.location.href = '/login';
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        refreshUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}