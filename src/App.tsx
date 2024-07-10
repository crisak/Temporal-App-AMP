import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './config';
import Subscriptions from './Subscriptions';

Amplify.configure(config);

function App({ signOut, user }) {
  return (
    <>
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
