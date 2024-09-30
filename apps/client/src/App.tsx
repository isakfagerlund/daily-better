import './App.css';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './database/db';
import { Entries } from './components/Entries';
import { MessageBox } from './components/MessageBox';

function App() {
  const entries = useLiveQuery(() => db.entries.toArray(), []);

  return (
    <div>
      <h1>Daily Message</h1>
      <Entries entries={entries} />
      <MessageBox />
    </div>
  );
}

export default App;
