import type { Profile, User } from '@capu/types';

export interface UserWithProfile {
  user: User;
  profile: Profile | null;
}
