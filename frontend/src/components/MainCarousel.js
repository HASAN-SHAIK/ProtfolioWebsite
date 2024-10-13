import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './MainCarousel.css';
import image from '../Images/profilee.png';
import LoadingIcons from 'react-loading-icons'

const MainCarousel = () => {
    var [loading, setLoading] = useState(true);
    var [data, SetData] = useState();
    useEffect(() => {
        const fetchData = async () => {
            data = await axios.get('http://localhost:8080/api/home')
                .then(res => SetData(res.data))
                .catch((err) => console.log("Error in Home.js", err));
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        loading ? <div className='d-flex justify-content-center' ><LoadingIcons.BallTriangle /> </div> :
            <div className='container' >
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-md-5 profileImage'>
                        <img className='profileImageProperties' src={image} alt='Profile Image' />
                    </div>
                    <div class='content' className='col-md-7 text-center d-flex justify-content-center align-items-center flex-column'>
                        <div className='name'>Hasan Shaik</div>
                        <div style={{ textAlign: 'center' }}>
                            <h3>I am a Software Developer</h3> <br />
                            {/* <h5 className='aboutMe'> About Me</h5> */}
                            <h5 className='description'>{data && data.description}</h5>
                        </div>
                    </div>

                </div>
            </div>
    )
}

export default MainCarousel;
