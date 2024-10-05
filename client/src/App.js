import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedInUser(null);
  };

  return (
    <div className="App">
      
      {loggedInUser ? (
        <div>
          <h1>Welcome {loggedInUser}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Register />
          <Login setLoggedInUser={setLoggedInUser} />
        </div>
      )}
    </div>
    );
    };
    export default App;