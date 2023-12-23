import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';

function ProductDetails({ user}) {
  const { userId } = useParams();
  const [theAccount, setTheAccount] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [rented,setRented] = useState("Rent the game!");
  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get(`https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/accounts/${userId}`);
        setTheAccount(response.data);
        setIsLoading(false);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchAccount();
  }, [userId]);

  const handleRent = async () => {
    try {
      // Fetch the user data again
      const response = await axios.get(`https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/users/${user.id}`);
      const updatedUser = response.data;
  
      const newGame = theAccount.name;
  
      // Check if the user has a ListOfGames, if not, initialize it as an empty array
      if (!updatedUser.ListOfGames) {
        updatedUser.ListOfGames = [];
      }
  
      // Check if the new game is already in the list
      if (!updatedUser.ListOfGames.includes(newGame)) {
        updatedUser.ListOfGames = [...updatedUser.ListOfGames, newGame];
        // Update the user's ListOfGames
        await axios.put(`https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/users/${user.id}`, {
          ListOfGames: updatedUser.ListOfGames,
        });
        console.log('Updated ListOfGames:', updatedUser.ListOfGames);
      } else {
        console.log('Game already rented');
        setRented("Already rented", true);

      }
    } catch (error) {
      console.error('Error updating ListOfGames:', error);
    }
  };
  
  
  

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    
    <div style={{padding:"40px"}} className="grid-container productMain">
      <div style={{width:"18rem",height:"35rem"}} className='grid-item product-item'>
      <h1 style={{color:"black"}} className="product-name">{theAccount.name}</h1>
      <p style={{color:"black"}} className="product-price"><span style={{color:"black"}}>Price</span>: {theAccount.price}</p>
      <h2 style={{color:"white"}}>List of Games:</h2>
      <ul style={{}} className="game-list">
        {theAccount.ListOfGames.map((game, index) => (
          <li className="game-item" key={index}>{game}</li>
        ))}
      </ul>
      <p style={{color:"black"}}>---------</p>
      <p style={{color:"white"}}> {rented}</p>
      <p style={{color:"black"}}>---------</p>
      <div style={{marginLeft:"-15px"}}>

      <button id='rreenntt' onClick={handleRent} style={{display:"block",width:"10rem",borderRadius:"20px",backgroundColor: 'black',color:"white",border:"none",padding:"5px",margin:"10px"}}>Rent</button>
      <Link className="back-link" to="/home">Back</Link>
      </div>
      </div>
      <div style={{width:"40rem",marginLeft:"6%"}} className='grid-item imgCon'>
      <img style={{width:"100%",height:"40rem",objectFit:"contain",maxHeight:"30rem",maxWidth:"40rem", border:"none"}} className="product-image" src={theAccount.url} alt={theAccount.name} />
      </div>
    </div>
  );
}

export default ProductDetails;
