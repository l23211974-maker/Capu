import type { Class, ScheduleEntry } from '@capu/types';

export interface ClassSummary {
  classItem: Class;
  schedule: ScheduleEntry[];
}
