import React from 'react'
import './SkillsTech.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingIcons from 'react-loading-icons'

export default function SkillsTech({ url }) {
  var [loading, setLoading] = useState(true);
  var [skills, setSkills] = useState()
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${url}/skills`)
        .then((res) => setSkills(res.data))
        .catch(err => console.log("Error from Experiences.js", err));
      const skillHeadings = document.querySelectorAll('.skillHeading');
      const skills = document.querySelectorAll('.skillClass');
      skills.forEach((skill, index) => {
        if (index < 5)
          skill.classList.add('visible');
      })
      skillHeadings.forEach((skillHead, index) => {
        if (index < 2)
          skillHead.classList.add('visible')
      })
      setLoading(false);
    }
    fetchData();
  }, []);

  document.addEventListener('scroll', () => {
    const skillHeadings = document.querySelectorAll('.skillHeading');
    skillHeadings.forEach((skill) => {
      const rect = skill.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        skill.classList.add('visible');
      }
    })
  })

  document.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skillClass');
    skills.forEach((skill) => {
      const rect = skill.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        skill.classList.add('visible');
      }
    })
  })
  return (
    loading ? <div className='d-flex justify-content-center' ><LoadingIcons.BallTriangle /> </div> :
      <div className='cleanTransition container pt-3 '>
        {
          skills && skills.map((skill, index) => {
            return (<div className='skillType cleanTransition'>
              <div className='skillHeadContainer p-0 m-0'><h4 key={index} className='skillHeading m-auto d-flex align-items-center justify-content-center text-center bg-info'>
                {skill[0]}
              </h4></div>
              <div className='row p-2 d-flex justify-content-between align-items-center'>
                {skill[1].map((eachSkill, index) => {
                  return (
                    <div className='skillClass col-md-5 m-1'>
                      <div key={index} className='cleanTransition row '>
                        <div className='badge col-3 text-center d-flex justify-content-center align-items-center'>
                          <img src={eachSkill.badge} alt={eachSkill.badge} width='100%' height='100%' />
                        </div>
                        <div className='col-9 d-flex justify-content-center align-items-center'>
                          <div>
                            <b>{eachSkill.name}</b>
                          </div>
                        </div>
                        <div className='mt-3 status-bar col-12 p-0'>
                          <img width={`${eachSkill.percentage}%`} class="status-fill" id='widthPercentage' />
                        </div>
                      </div>
                    </div>)
                })}
              </div ></div>)
          })
        }
      </div >
  )
}
