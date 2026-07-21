export interface User {
  id: number;
  githubLogin: string;
  name: string;
  avatarUrl: string;
  gender?: string;
  height?: number;
  weight?: number;
  goal?: string;
  activityLevel?: string;
  targetDietDaily?: number;
}