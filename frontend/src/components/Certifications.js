import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Certifications.css';
import { Button } from 'react-bootstrap';
import LoadingIcons from 'react-loading-icons';

const Certifications = ({ url }) => {
    const [loading, setLoading] = useState(true);
    const [certificates, setCertificates] = useState([]);

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(${url}/certificates);
                setCertificates(res.data);
            } catch (err) {
                console.log("Error from Certificate.js", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]); // Adding URL as dependency to fetch when it changes

    // Add 'visible' class to the first two certificates after the data has been fetched
    useEffect(() => {
        if (certificates.length > 0) {
            const certificateElements = document.querySelectorAll('.certificate');
            certificateElements.forEach((cert, index) => {
                if (index < 2) cert.classList.add('visible');
            });
        }
    }, [certificates]); // This runs when 'certificates' is updated

    // Scroll listener to add 'visible' class as certificates scroll into view
    useEffect(() => {
        const handleScroll = () => {
            const certificateElements = document.querySelectorAll('.certificate');
            certificateElements.forEach((cert) => {
                const rect = cert.getBoundingClientRect();
                if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                    cert.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [certificates]); // Re-run when the certificates change

    return (
        loading ? (
            <div className='d-flex justify-content-center'>
                <LoadingIcons.BallTriangle />
            </div>
        ) : (
            <div className='container p-5'>
                <div className='row'>
                    {
                        certificates && certificates.map((certificate) => (
                            <div key={certificate.id} className='certificate col-lg-5 d-flex align-items-center justify-content-center flex-column'>
                                <img width='80%' height='80%' src={certificate.imgUrl} className='mb-4' alt={certificate.name} />
                                <div className='certificateName'>{certificate.name}</div>
                                <div className='certificateBy'>By {certificate.by}</div>
                                <Button className='btn btn-success bg-light certificationLink'>
                                    <a href={certificate.link} target="_blank" rel="noopener noreferrer">Certification Link</a>
                                </Button>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    );
}

export default Certifications;
