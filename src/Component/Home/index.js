import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ResCard from '../Body/ResCard';
import Search from '../Body/Search';
import About from '../Body/About';
import Contact from '../Body/Contact';
import Error from '../Body/Error';
import RestaurantMenu from '../Body/RestaurantMenu';

const Home = () => {
  
  return (
    <>
        <Container>
            <BrowserRouter>
                <Header/>
                <Routes>
                  <Route path='/' element={<ResCard/>}/>
                  <Route path='/' element={<Search/>}/>
                  <Route path='/about' element={<About/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/error' element={<Error/>}/>
                  <Route path='/restaurants/:resId' element={<RestaurantMenu/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </Container>
    </>
  );
}

export default Home;