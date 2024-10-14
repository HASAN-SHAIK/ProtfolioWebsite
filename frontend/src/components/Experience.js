import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Experience.css';
import LoadingIcons from 'react-loading-icons'

export default function Experience({ url }) {
  var [experiences, setExperiences] = useState()
  var [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${url}/experiences`)
        .then((res) => setExperiences(res.data))
        .catch(err => console.log("Error from Experiences.js", err));
      const experienceCards = await document.querySelectorAll('.experienceCard');
      experienceCards.forEach((exp, index) => {
        exp.classList.add('visible')
      })
      const experienceDates = document.querySelectorAll('.experienceDate');
      experienceDates.forEach((exp, index) => {
        exp.classList.add('visible')
      })
    }
    fetchData();
    setLoading(false);
  }, []);
  // useEffect(() => {
  //   console.log("Camee Here")
  //   const experienceCards = document.querySelectorAll('.experienceCard');
  //   experienceCards.forEach((exp, index) => {
  //     exp.classList.add('visible')
  //   })
  //   const experienceDates = document.querySelectorAll('.experienceDate');
  //   experienceDates.forEach((exp, index) => {
  //     exp.classList.add('visible')
  //   })
  // }, [experiences]);
  return (
    loading ? <div className='d-flex justify-content-center' ><LoadingIcons.BallTriangle /> </div> :
      <div className='container d-flex flex-column-reverse'>
        {
          experiences && experiences.map((experience) => {
            return (
              <div className='row mt-5'>
                <div className='col-md-4'>
                  <div className='row text-center'>
                    <div className='experienceDate col-md-12 p-0 d-flex justify-content-center flex-column year '>
                      <b>{experience.fromYear}-{experience.toYear}</b>
                      <div>{experience.fromMonth} - {experience.toMonth}</div>
                    </div>
                  </div>
                </div>
                <div className='col-md-8 experienceCard p-4'>
                  <h4 className='underline'>{experience.position}</h4>
                  <footer className='blockquote-footer mt-2'>{experience.company}</footer>
                  <p>{experience.description}</p>
                </div>
              </div>)
          })
        }
      </div>
  )
}
