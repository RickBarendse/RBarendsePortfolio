import React from 'react';
import Paris from '../../assets/images/Paris.jpg';

function About() {
    return (
        <section className='my-5'>
            <h1 id="about">A Little About Me</h1>
            <img src={Paris} className="my-2" style={{ width: "20%" }} alt="cover"/>
            <p>
            I am an accomplished IT Profession with a track record of leading and supporting software development, 
            deployment, and improvement projects to advance business strategic priorities, promote operational efficiencies, and improve user experience.
            I have over 25 years of experience working working in a variety of IT roles for large, multi-national corporations.
        
            
            A loyal, team-oriented technology professional with a strong background in end-to-end ERP business
            processes and custom application development.
            </p>
        </section>
    )
}

export default About;