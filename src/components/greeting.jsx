import { useState } from 'preact/hooks';

export default function Greeting({ messages }) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [ greeting, setGreeting ] = useState(messages[0]);
  return (
    <div>
      <h1>{greeting} from CS First Aid</h1>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}