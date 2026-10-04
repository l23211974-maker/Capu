import { repositories } from '../../database/repositories.js';
import type { UserWithProfile } from './types.js';

export class UsersService {
  async listUsers(): Promise<UserWithProfile[]> {
    const users = await repositories.users.list();

    return Promise.all(
      users.map(async (user) => ({
        user,
        profile: await repositories.profiles.getById(user.id)
      }))
    );
  }
}
