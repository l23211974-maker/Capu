import type { LoginRequest } from './types.js';

export class AuthService {
  async login(payload: LoginRequest): Promise<{ token: string; userId: string }> {
    return {
      token: `placeholder-token-for-${payload.email}`,
      userId: 'user-placeholder'
    };
  }
}
