import React, { useEffect, useState } from 'react'
import MainCarousel from './MainCarousel';
import MyCard from './MyCard';
import axios from 'axios';
import LoadingIcons from 'react-loading-icons';
import './Home.css'
import Counter from './Counter';
import Footer from './Footer';
const Home = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://protfoliowebsite.onrender.com/api/home')
                .then(res => setData(res.data))
                .catch((err) => console.log("Error in Home.js", err));
            setLoading(false);
        }
        fetchData();
    }, []);
 
    return (
        loading ?<div className='text-center'><LoadingIcons.BallTriangle /><div>I am using free tier Please wait till data load</div> </div> :
        <div>
            <div style={{minHeight: '100vh'}}>
            <MainCarousel />
            <MyCard />
            </div>
            <div className='profileviews-text text-center'>
                <div>Profile Views</div>
                <Counter target={data.profileViews}/>
            </div>
        </div>
    )
}

export default Home;
