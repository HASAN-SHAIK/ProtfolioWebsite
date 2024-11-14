import React, { useEffect, useState } from 'react'
import './Projects.css'
import axios from 'axios';
import LoadingIcons from 'react-loading-icons'
import Footer from './Footer';

export default function Projects({ url }) {
  var [loading, setLoading] = useState(true);
  var [projects, setProjects] = useState()
  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`${url}/projects`)
        .then((res) => setProjects(res.data))
        .catch(err => console.log("Error from Projects.js", err));
      setLoading(false);
    }
    fetchData();
    console.log("Projetcs", projects)
  }, []);
  return (
    loading ?<div className='text-center'><LoadingIcons.BallTriangle /><div>I am using free tier Please wait till data load</div> </div> :
    // loading ? <div className='d-flex justify-content-center' ><LoadingIcons.BallTriangle /> </div> :
      <div className='project container p-3 mt-4'>
        {
          projects && projects.map((project) => {
            return (
              <div key={project._id} className='min-vh-50 project-row row mb-3 border border-info'>
                <div className='col-md-4 p-0'>
                  <img width='100%' height='100%' src={project.imgUrl} />
                </div>
                <div className='col-md-7 p-3'>
                  <h2 className='d-3 projectName' style={{ fontFamily: 'sans-serif' }}>{project.name}</h2>
                  <b className='textColor'>Technologies Used</b>
                  <div>{project.technologies}</div>
                  <b className='aboutMe'>About Project</b>
                  <p>{project.description}</p>
                  <button><a href={project.link} target="_blank">Source Code</a></button>
                </div>
              </div>
            );
          })
        }
      </div>
  )
}
