
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
import Header from './pages/Header';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch'
import { StoreProvider } from './utils/GlobalState';
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
          <StoreProvider>
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
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
// export default function App() {
//     const [currentPage, setCurrentPage] = useState('Homepage');
  
//     // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//     const renderPage = () => {
//       if (currentPage === 'Homepage') {
//         return <Homepage />;
//       }
//       if (currentPage === 'Profile') {
//         return <Profile />
//       }
//       if (currentPage === 'Login') {
//         return <Login />;
//       }
//       if (currentPage === 'Signup'){
//         return <Signup />;
//       }
//       return <Contact />;
//     };
  
//     const handlePageChange = (page) => setCurrentPage(page);
  
//     return (
//       <div>
//         <Header
//          currentPage={currentPage} handlePageChange={handlePageChange} 
//          />
//         {renderPage()}
//       </div>
//     );
//   }