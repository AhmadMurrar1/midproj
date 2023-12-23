

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './assets/Login';
import Home from './assets/Home';
import Register from './assets/Register';
import NotFound from "./assets/NotFound";
import FreeAccounts from './assets/FreeAccounts';
import ListOfGamesUserHas from './assets/ListOfGamesUserHas';
import ProductDetails from './assets/ProductDetails';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); 
  const [theAccount, setTheAccount] = useState([]);

  return (
    <section id='app'>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />}
          />
          <Route
            path="/home"
            element={isLoggedIn ? <Home user={user} /> : <Navigate to="/" />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/FreeAccounts' element={<FreeAccounts user={user} theAccount={theAccount}/>}/>
          <Route path='/profile-page'element={<ListOfGamesUserHas user={user}/>}/>
          <Route path="/:userId" element={<ProductDetails theAccount={theAccount}  user={user}/>} />

        </Routes>
      </Router>
    </section>
  );
}

export default App;
