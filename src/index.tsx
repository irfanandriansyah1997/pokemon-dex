import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import App from './App';
import './shared/style/style.css';
import * as serviceWorker from './serviceWorker';
import GraphqlBuilder from './shared/modules/graphql/builder/graphql.builder';

const client = GraphqlBuilder.singleton();

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
