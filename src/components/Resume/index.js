import React from 'react';

function Resume() {
    return (
        <section>
            <div>
                <h1 id="resume">Rick Barendse Resume</h1>
            </div>

            <div> 
                <a href={require('../../assets/documents/RickBarendse_resume.pdf')} download>
                    <h4 id="resume">Clikc Here to Download My Resume</h4>
                </a>
            </div>
            <br></br>
            <div>
                <h2 id="resume">Full Stack Web Development Skills List</h2>
            </div>
            <br></br>
            <br></br>
            <div>
                <h3 id="resume">Front-End Skills:</h3>
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>React.js</li>
                    </ol>
                    <br></br>
                    <h3 id="resume">Back-End Skills:</h3>
                    <ol>
                        <li>3rd-Party APIs</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>Model View Controller (MVC)</li>
                        <li>REST APIs</li>
                        <li>Progressive Web Applications (PWA)</li>
                    </ol>
                    <br></br>
                    <h3 id="resume">Development Tool Skills:</h3>
                    <ol>
                        <li>GitHub</li>
                        <li>npm</li>
                        <li>Jest</li>
                        <li>Webpack</li>
                        <li>Agile Project Management</li>
                        <li>Jira</li>
                        <li>Version One</li>
                    </ol>
                    <br></br>
                    <h3 id="resume">Database Skills:</h3>
                    <ol>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>NoSQL</li>
                        <li>GraphQL</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                    </ol>
            </div>
        </section>    
    )
}

export default Resume;