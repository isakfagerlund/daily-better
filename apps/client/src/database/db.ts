import Dexie, { type EntityTable } from 'dexie';
import Message from './Message';
import Entry from './Entry';

export class AppDB extends Dexie {
  messages!: EntityTable<Message, 'id'>;
  entries!: EntityTable<Entry, 'id'>;

  constructor() {
    super('DailyBetterDB');
    this.version(1).stores({
      messages: '++id, message',
      entries: '++id, createdAt, updatedAt, [day+month+year], messages',
    });
    this.messages.mapToClass(Message);
    this.entries.mapToClass(Entry);
  }
}

export const db = new AppDB();
