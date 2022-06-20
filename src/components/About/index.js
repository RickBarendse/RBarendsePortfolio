import React from 'react';
import Paris from '../../assets/images/Paris.jpg';

function About() {
    return (
        <section className='my-5'>
            <h1 id="about">A Little About Me</h1>
            <img src={Paris} className="my-2" style={{ width: "20%" }} alt="cover"/>
            <p>
            I am an accomplished IT professional with a track record of leading and supporting software development, 
            deployment, and improvement projects to advance business strategic priorities, promote operational efficiencies, and improve user experience.
            I have over 25 years of experience working working in a variety of IT roles for large, multi-national corporations.
            </p>
            <p>
            I have an in-depth understanding of all phases of business operations including Procure-to-Pay, Order-to-Cash, Requirements-to-Inventory, and
            Plan-to-Manufacture.  I also possess an expert working knowledge of SAP ERP system having previously supported Materials Management, Production
            Planning, Plant Maintenance, Quality Management, Finance, Controlling, Warehouse Management, Sales and Delivery, and Asset Management.  
            </p>
            <p>
            I am a skilled communicator and analytic thinker.  I've earned a Bachelor of Arts degree in both English and History; as well as Post-Baccalaurete
            Certificate in Accoounting.  Additionally, 

            </p>
        </section>
    )
}

export default About;