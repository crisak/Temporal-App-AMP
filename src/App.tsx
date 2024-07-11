import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './config';
import Subscriptions from './Subscriptions';
import ButtonUdate from './Update';

Amplify.configure(config);

const ID_FILTER = "1438050512220-01";

const env = import.meta.env.MODE

console.log('ENV', env)

function App({ signOut, user }) {
  return (
    <>
      <h3>ENV ({String(env)})</h3>
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
        <br />
        <ButtonUdate id={ID_FILTER} />
        <br />
        <Subscriptions id={ID_FILTER} />
      </main>
    </>
  );
}

export default withAuthenticator(App);
