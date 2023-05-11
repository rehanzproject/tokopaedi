import React from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client';

    const client = new ApolloClient({
        uri: 'https://one-caiman-96.hasura.app/v1/graphql',
        cache: new InMemoryCache(),
        headers: {
            "x-hasura-admin-secret": "KJLcNNXvKSbSuRBpPqIVqQSZ075tSUq6B07DD5DZ1UTUEjTEkyHytk86iV303jKh"
        }
      });
  

export default client