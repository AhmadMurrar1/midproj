import React from 'react';
import Header from './Header';
import ImageSlider from './ImageSlider';
const Home = ({ user }) => {

  return (
    <section id='home'>
      <Header user={user}/>
      <h1 >Rent</h1>
      {/* <p >Each priced at 5$!</p> */}
      <section className='homeAccounts'>
        <ImageSlider/>
      </section>
    </section>
  );
};

export default Home;
