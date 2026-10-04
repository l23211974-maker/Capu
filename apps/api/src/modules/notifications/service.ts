import { repositories } from '../../database/repositories.js';

export class NotificationsService {
  async list() {
    return repositories.reminders.list();
  }
}
