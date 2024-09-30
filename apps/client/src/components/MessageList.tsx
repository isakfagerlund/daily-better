import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../database/db';

export const MessageList = ({ messageIds }: { messageIds: number[] }) => {
  const messages = useLiveQuery(
    () => db.messages.where('id').anyOf(messageIds).toArray(),
    [messageIds]
  );

  return (
    <div>
      {messages?.map((message) => <p key={message.id}>{message.message}</p>)}
    </div>
  );
};
