import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';

const fadeProperties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
};

function ImageSlider() {
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState('');
  const [currentImage, setCurrentImage] = useState(0); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://65738a61f941bda3f2aef3ad.mockapi.io/api/v1/accounts');
        const fetchedUsers = response.data;
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoginError('Error while logging in');
      }
    };

    fetchData();
  }, []);

  const recommendedNames = users.slice(0, 5).map((image) => image.name);
  const recommendedInfos = users.slice(0, 5).map((image) => image.ListOfGames);

  const handleSlideChange = (oldIndex, newIndex) => {
    setCurrentImage(newIndex);
  };

  return (
    <div className='grid-container'>
      {loginError && <p>{loginError}</p>}
      <div className='grid-item grid2'>
        <p style={{fontSize:"25px"}}>Recommended</p>
        {recommendedNames.length > 0 && (
          <div>
            <p style={{fontSize:"25px"}}>{recommendedNames[currentImage]}</p>
            <p style={{color:"white"}}>List of games:</p>
            {recommendedInfos.length > 0 && (
              <p style={{fontSize:"20px"}}>
                {recommendedInfos[currentImage].map((game, idx) => (
                  <span key={idx}>{game}, </span>
                ))}
              </p>
            )}
          </div>
        )}
      </div>

      <Fade {...fadeProperties} onChange={handleSlideChange}>
        {users.slice(0, 5).map((image, index) => (
          <Link className='grid-item' to={`/${image.id}`} key={index}>
            <div
              style={{
                color: '#0ef',
                width: '100%',
                height: '35rem',
                display: 'flex',
                maxHeight: '30rem',
                justifyContent: 'center',
                background: 'transparent',
              }}
              key={index}
              className='each-fade'
            >
              <img
                src={image.url}
                alt={image.name}
                style={{
                  width: '70rem',
                  height: '100%',
                }}
              />
            </div>
          </Link>
        ))}
      </Fade>
      <section id='other'>
        {users.slice(5, 10).map((image, index) => (
          <Link to={`/${image.id}`} key={index}>
            <div className='each-fade'>
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
    </div>
  );
}

export default ImageSlider;
