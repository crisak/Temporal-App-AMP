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
      <header
        style={{
          fontSize: '.7rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1rem',
          padding: '.2rem 1rem'
        }}
      >
        <span>Hello {user.username}</span>
        <button onClick={signOut}>Sign out</button>
      </header>

      <hr />

      <main>
        <br />
        <ButtonUdate id={ID_FILTER} />
        <br />
        <Subscriptions id={ID_FILTER} />
      </main>
      <footer style={{
        position: 'fixed',
        bottom: 0,
        textAlign: 'right',
        width: '100%'
      }}>
        ENV ({String(env)})
      </footer>
    </>
  );
}

export default withAuthenticator(App);
