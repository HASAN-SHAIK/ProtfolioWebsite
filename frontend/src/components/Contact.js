import React, { useState } from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Email from 'https://smtpjs.com/v3/smtp.js';

const Contact = () => {
    var [mail, setMail] = useState('');
    var [message, setMessage] = useState('')
    const sendMail = (evt) => {
        evt.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValid = emailPattern.test(mail);
        if (isValid) {
            Email.send({
                Host: "smtp.gmail.com",
                Username: "sender@email_address.com",
                Password: "skhasanj300@6255",
                To: 'skhasanj300@gmail.com',
                From: mail,
                Subject: "Mail from Protfolio",
                Body: message,
            })
                .then(function (message) {
                    alert("mail sent successfully")
                });
        }
    }

    return (

        <div className='container mt-5 pt-5' style={{ height: '90vh' }}>
            {/* <div className='row'> */}
            <div className='p-5'>
                <div className='text-center textFont'>Let's Connect</div>
                <div className='mt-3 text-center widthClass'>
                    <b>Gmail: </b><span>skhasanj300@gmail.com</span>
                    <a href='https://www.linkedin.com/in/hasan-shaik-b712931a6/'><button className='btn btn-primary buttonStyle mt-3'>Linked In</button></a>
                    <a href='https://github.com/HASAN-SHAIK'><button className='btn btn-info buttonStyle mt-3'>Github</button></a>
                    <a href='https://leetcode.com/skhasanj300/'><button className='btn btn-light buttonStyle mt-3'>Leetcode</button></a>
                    <a href='https://www.hackerrank.com/shaik_hasan'><button className='btn btn-warning buttonStyle mt-3'>HackerRank</button></a>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Contact
