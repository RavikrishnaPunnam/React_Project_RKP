import React from 'react';
import '../../App.css';
import HomeComponent from './HomeComponent';
 import Cards from '../Cards';
// import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      {/* <HeroSection />
      <Footer /> */}
      <h1>I am Iron man</h1>
      <HomeComponent />
     
      <Cards />


      <Footer/>

    </>
  );
}

export default Home;
