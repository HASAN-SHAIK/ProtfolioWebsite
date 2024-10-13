import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Certifications.css'
import { Button } from 'react-bootstrap';
import LoadingIcons from 'react-loading-icons'

const Certifications = ({ url }) => {
    var [loading, setLoading] = useState(true);
    var [certificates, setCertificates] = useState();

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${url}/certificates`)
                .then((res) => setCertificates(res.data))
                .catch(err => console.log("Error from Certificate.js", err));
            const certificates = document.querySelectorAll('.certificate');
            certificates.forEach((cert, index) => {
                if (index < 2)
                    cert.classList.add('visible');
            })
            setLoading(false);
        }
        fetchData();

    }, []);

    document.addEventListener('scroll', () => {
        const certificates = document.querySelectorAll('.certificate');
        certificates.forEach((cert) => {
            const rect = cert.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                cert.classList.add('visible');
            }
        })
    })
    return (
        loading ? <div className='d-flex justify-content-center' ><LoadingIcons.BallTriangle /> </div> :
            <div className='container p-5'>
                < div className='row' >
                    {
                        certificates && certificates.map((certificate) => {
                            return (<div className='certificate col-lg-5 d-flex align-items-center justify-content-center flex-column'>
                                <img width='80%' height='80%' src={certificate.imgUrl} className='mb-4' />
                                {/* </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-center flex-column'> */}
                                <div className='certificateName'>{certificate.name}</div>
                                <div className='certificateBy'>By {certificate.by}</div>
                                <Button className='btn btn-success bg-light certificationLink'><a href={certificate.link}>Certification Link</a> </Button>
                            </div>
                            )
                        })
                    }
                </div >
            </div >
    )
}

export default Certifications;
