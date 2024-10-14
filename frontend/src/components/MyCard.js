import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCode, faObjectUngroup } from '@fortawesome/free-solid-svg-icons'
import './MyCard.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingIcons from 'react-loading-icons'

const MyCard = () => {
    var [cards, setCards] = useState([]);
    var [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('https://fascinating-banoffee-96e621.netlify.app/api/cards')
                .then(res => setCards(res.data))
                .catch((err) => console.log("Error in Home.js", err));
            setLoading(false);
        }
        fetchData();
        console.log(cards);
    }, []);
    return (
        loading ? <div className='d-flex justify-content-center' ><LoadingIcons.BallTriangle /> </div> :
            <div className='container text-center pb-5'>
                <div class="card" className="row mt-5 d-flex d-justify-content-between">
                    {
                        cards && cards.map((card) => {
                            return (
                                <div key={card.id} className='col-md-4 p-3 text-center mainPagecards'>
                                    <img src={card.url} alt={card.description} className='cardImage' />
                                    <div className='cardDesc'>
                                        {card.description}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default MyCard
