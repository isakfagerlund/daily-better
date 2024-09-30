import { Entity } from 'dexie';
import AppDB from './db';

export default class Message extends Entity<AppDB> {
  id!: number;
  message!: string;
}
