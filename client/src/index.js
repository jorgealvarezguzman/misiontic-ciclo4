import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks';
import "bootswatch/dist/lux/bootstrap.min.css"

const client = new ApolloClient({
  uri: 'http://localhost:3100/'
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
