import * as React from 'react';
import { Amplify, API } from 'aws-amplify';
import * as subscriptions from './graphql/subscriptions';

export default function Subscriptions() {
  React.useEffect(() => {
    return () => {
      console.log('Unsubscribe events');
    };
  }, []);
}
