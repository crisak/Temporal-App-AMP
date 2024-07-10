import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './config';
import Subscriptions from './Subscriptions';

Amplify.configure(config);

const id = import.meta.env.MI_KEY
const env = import.meta.env.MODE

console.log('ENV', env) // "123"
console.log(import.meta.env)

function App({ signOut, user }) {
  return (
    <>
      <h3>ENV ({String(env)})</h3>
      <h3>Mi KEY custom {import.meta.env.VITE_SOME_KEY}</h3>
      <header
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span>Hello {user.username}</span>
        <button onClick={signOut}>Sign out</button>
      </header>

      <hr />
      <br />
      <main>
        <Subscriptions />
      </main>
    </>
  );
}

export default withAuthenticator(App);
