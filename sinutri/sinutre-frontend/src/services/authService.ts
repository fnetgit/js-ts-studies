import { api } from '@/lib/api';
import { User } from '@/types/user';

export async function updateProfile(data: Partial<User>) {
  const response = await api.put('/auth/me', data);
  return response.data;
}
