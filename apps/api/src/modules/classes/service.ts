import { repositories } from '../../database/repositories.js';
import type { ClassSummary } from './types.js';

export class ClassesService {
  async list(): Promise<ClassSummary[]> {
    const [classes, schedules] = await Promise.all([
      repositories.classes.list(),
      repositories.scheduleEntries.list()
    ]);

    return classes.map((classItem) => ({
      classItem,
      schedule: schedules.filter((entry) => entry.classId === classItem.id)
    }));
  }
}
