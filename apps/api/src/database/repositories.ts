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

export interface Repository<T extends { id: string }> {
  list(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  create(entity: T): Promise<T>;
}

export interface CapuRepositories {
  users: Repository<User>;
  profiles: Repository<Profile & { id: string }>;
  classes: Repository<Class>;
  scheduleEntries: Repository<ScheduleEntry>;
  tasks: Repository<Task>;
  examEvents: Repository<ExamEvent>;
  calendarEvents: Repository<CalendarEvent>;
  reminders: Repository<Reminder>;
}

const createInMemoryRepository = <T extends { id: string }>(seed: T[] = []): Repository<T> => {
  const items = new Map(seed.map((item) => [item.id, item]));

  return {
    async list() {
      return [...items.values()];
    },
    async getById(id: string) {
      return items.get(id) ?? null;
    },
    async create(entity: T) {
      items.set(entity.id, entity);
      return entity;
    }
  };
};

export const repositories: CapuRepositories = {
  users: createInMemoryRepository<User>(),
  profiles: createInMemoryRepository<Profile & { id: string }>(),
  classes: createInMemoryRepository<Class>(),
  scheduleEntries: createInMemoryRepository<ScheduleEntry>(),
  tasks: createInMemoryRepository<Task>(),
  examEvents: createInMemoryRepository<ExamEvent>(),
  calendarEvents: createInMemoryRepository<CalendarEvent>(),
  reminders: createInMemoryRepository<Reminder>()
};
