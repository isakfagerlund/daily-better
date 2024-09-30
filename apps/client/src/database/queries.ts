import dayjs from 'dayjs';
import { db } from './db';

export async function getTodayEntry(currentDate: {
  day: number;
  month: number;
  year: number;
}) {
  return await db.entries
    .where({
      day: currentDate.day,
      month: currentDate.month,
      year: currentDate.year,
    })
    .first();
}

export async function addMessage(
  message: string,
  currentDate: {
    day: number;
    month: number;
    year: number;
  }
) {
  const newMessage = await db.messages.add({ message });

  const entry = await getTodayEntry(currentDate);

  if (entry) {
    await db.entries.update(entry.id, {
      messages: [...entry.messages, newMessage],
    });
  } else {
    await db.entries.add({
      messages: [newMessage],
      createdAt: dayjs().toISOString(),
      updatedAt: dayjs().toISOString(),
      day: currentDate.day,
      month: currentDate.month,
      year: currentDate.year,
    });
  }
}
