
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Home from './pages/Home';
import Header from './components/Header';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './components/Contact';
import NoMatch from './pages/NoMatch'
import { AppProvider } from './utils/GlobalState';
import CreateSnippet from './pages/CreateSnippet';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <AppProvider>
            <Header />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route
                path='/createsnippet'
                element={<CreateSnippet />}
                />
              <Route 
                path="/contact" 
                element={<Contact />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </AppProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;