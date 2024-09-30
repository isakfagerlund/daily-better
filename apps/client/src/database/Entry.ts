import { Entity } from 'dexie';
import { AppDB } from './db';

export default class Entry extends Entity<AppDB> {
  id!: number;
  createdAt!: string;
  updatedAt!: string;
  day!: number;
  month!: number;
  year!: number;
  messages!: number[];
}
