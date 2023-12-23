import React from 'react'
import Header from './Header'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function FreeAccounts({user}) {
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [theAccount, setTheAccount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/accounts');
        const fetchedUsers = response.data;
        setUsers(fetchedUsers);
        setTheAccount(fetchedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoginError('Error while logging in');
      }
    };

    fetchData();
  }, []);
  return (
    <section id='FreeAccounts'>
      <div className='free-header'>
      <Header  user={user}/>
      </div>
<section className='free other'>
        {users.slice(10, 20).map((image, index) => (
          <Link style={{objectFit:"contain"}}  to={`/${image.id}`} key={index}>
            <div className="each-fade">
              <img
                src={image.url}
                alt={image.name}
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <p style={{ position: 'absolute' }}>{image.name}</p>
            </div>
          </Link>
        ))}
</section>
    </section>
  )
}

export default FreeAccounts