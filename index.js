import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const store = configureStore();
// const client = new ApolloClient({uri: 'http://192.168.1.65:4000/graphql'}); mio
const client = new ApolloClient({uri: 'http://192.168.0.5:4000/graphql'}); // Luis

const RNStoreClient = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => RNStoreClient);
