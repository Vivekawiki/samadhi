
export type AppRole = 'admin' | 'moderator' | 'user';

export interface Profile {
  id: string;
  first_name?: string;
  last_name?: string;
  roles: string[];
}
