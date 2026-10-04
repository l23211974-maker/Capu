import type {
  CalendarEvent,
  Class,
  ExamEvent,
  Profile,
  Reminder,
  ScheduleEntry,
  Task,
  User
} from '@capu/types';

export interface CapuSchema {
  users: User;
  profiles: Profile;
  classes: Class;
  scheduleEntries: ScheduleEntry;
  tasks: Task;
  examEvents: ExamEvent;
  calendarEvents: CalendarEvent;
  reminders: Reminder;
}
