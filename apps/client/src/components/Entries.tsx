import dayjs from 'dayjs';
import Entry from '../database/Entry';
import { MessageList } from './MessageList';

export const Entries = ({ entries }: { entries: Entry[] | undefined }) => {
  return entries?.map((entry) => {
    return (
      <div key={entry.id}>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          <p>{dayjs(entry.createdAt).format('DD/MM/YYYY')}</p>
        </div>
        <MessageList messageIds={entry.messages} />
      </div>
    );
  });
};
