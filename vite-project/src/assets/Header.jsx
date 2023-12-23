
// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
function Header({user}) {
  return (
    
<div>
<nav className='header-nav'>  
    <Link className="header-link" to="/home">Rent</Link>
    <Link className='header-link' to="/FreeAccounts">Free Accounts</Link>
    <Link className="header-link" to="/profile-page">Profile Page</Link>
</nav>
</div>
  );
}

export default Header;
