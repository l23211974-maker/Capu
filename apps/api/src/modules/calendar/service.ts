import { repositories } from '../../database/repositories.js';

export class CalendarService {
  async list() {
    return repositories.calendarEvents.list();
  }
}
