import React from 'react';
import Card from '../Card';
import ShanesListScreenshot from '../../assets/images/shanes_list.png';
import CodeQuizScreenshot from '../../assets/images/code_quiz.png';
import OregonScreenshot from '../../assets/images/oregon.png';
import PasswordGeneratorScreenshot from '../../assets/images/oregon.png';
import RunbuddyScreenshot from '../../assets/images/Runbuddy.png';
import WorkdayScreenshot from '../../assets/images/workday_scheduler.jpg';

const projects = [
        {
            name: "Shane's List",
            description: "Shane's List is an online classified ad service where registered members can post items for sale or find items to purchase from other registered members.",
            image: ShanesListScreenshot,
            github: "https://github.com/RickBarendse/Shanes-List",
            app: "https://shanes-list.herokuapp.com/"
        },
        {
            name: "Welcome to Oregon",
            description: "This application is designed with the traveler in mind even if you live here. We want the user to input a city of their choice and it will bring up the current 5 day forcast and a list of breweries that they can choose information about (since Oregon is known for beer). Also, a current ski report for Oregon ski areas and a surf report for major coastal destinations.",
            image: OregonScreenshot,
            github: "https://github.com/RickBarendse/welcome2oregon",
            app: "https://adam-algatt.github.io/Project-1/"
        },
        {
            name: "Run Buddy",
            description: "A website that offers fitness training services.  And is also a social platform to link joggers with other joggers.",
            image: RunbuddyScreenshot,
            github: "https://github.com/RickBarendse/run-buddy",
            app: "https://rickbarendse.github.io/run-buddy/"
        },
        {
            name: "Password Generator",
            description: "A website used to generate a secure password randomly based on user inputs for password length and character types.",
            image: PasswordGeneratorScreenshot,
            github: "https://github.com/RickBarendse/ChallengeThree_PasswordGenerator",
            app: "https://rickbarendse.github.io/ChallengeThree_PasswordGenerator/"
        },
        {
            name: "Workday Scheduler",
            description: "A simple scheduler for planning your work day. For the current day, each hour of the work day is displayed with a text section for adding tasks. Time blocks are color coded to signify if they are in the past, present, or future.",
            image: WorkdayScreenshot,
            github: "https://github.com/RickBarendse/ChallengeFive_WorkDayScheduler",
            app: "https://rickbarendse.github.io/ChallengeFive_WorkDayScheduler/"
        },
        {
            name: "Code Quiz",
            description: "A website to test your coding knowledge. The multiple choice quiz is timed; and the remaining time after the last question becomes the user score. A wrong answer results in a time penalty. High scores are saved to local storage.",
            image: CodeQuizScreenshot,
            github: "https://github.com/RickBarendse/ChallengeFour_CodeQuiz",
            app: "https://rickbarendse.github.io/ChallengeFour_CodeQuiz/"
        },
    ]

function Portfolio() {

return (
        <section>
            <div>
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div className="container">
                <div className="row">
                    {projects.map(projectsArray => {
                        return (projects.indexOf(projectsArray),
                        <Card key={projectsArray.name.toString()} projectsArray={projectsArray} />
                    )})}
                    </div>  
            </div>
        </section>
    );
}

export default Portfolio;