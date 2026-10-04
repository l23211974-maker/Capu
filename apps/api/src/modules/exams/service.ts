import { repositories } from '../../database/repositories.js';

export class ExamsService {
  async list() {
    return repositories.examEvents.list();
  }
}
