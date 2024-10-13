import React, { useEffect } from 'react'
import MainCarousel from './MainCarousel';
import MyCard from './MyCard';
import axios from 'axios';

const Home = () => {
    return (
        <div>
            <MainCarousel />
            <MyCard />
        </div>
    )
}

export default Home;
