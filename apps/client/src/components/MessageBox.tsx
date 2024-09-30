import dayjs from 'dayjs';
import { useState } from 'react';
import { addMessage } from '../database/queries';

export const MessageBox = () => {
  const [currentMessage, setCurrentMessage] = useState('');
  const [currentDate] = useState({
    day: dayjs().get('date'),
    month: dayjs().get('month'),
    year: dayjs().get('year'),
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <textarea
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button
        onClick={() => {
          addMessage(currentMessage, currentDate);
          setCurrentMessage('');
        }}
      >
        Add Message
      </button>
    </div>
  );
};
