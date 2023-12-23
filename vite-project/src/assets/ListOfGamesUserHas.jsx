import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
function ListOfGamesUserHas({user}) {
  const navigate = useNavigate();
  function handleLogOut(){
    navigate("/");

  }
  return (
    <div className='mainProfilePage'>
      <Header user={user}/>
          <section id='ListOfGamesUserHas'>
            <h1 className='profile'>Profile Page</h1>
        <div className='profile-page'>
        <table>
  <tr>
    <th style={{color:"#578BC6"}}>Name</th>
    <th style={{color:"#578BC6"}}>{user.name}</th>
  </tr>
  <tr>
    <td>Email</td>
    <td>{user.email}</td>
  </tr>
  <tr>
    <td>List of Games</td>
    <td>{user.ListOfGames.join(',')}</td>
  </tr>
</table>
        </div>
    </section>
    <section className='more-info-profile-page'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU" alt="profile-picture" />
    <h3>Welcome to My Rent Store Page!</h3>
    <h3>I have provided you with all the information you need in this page!</h3>
    <button onClick={handleLogOut} className='logOut'>Log Out</button>
    </section>
    </div>
  )
}

export default ListOfGamesUserHas;