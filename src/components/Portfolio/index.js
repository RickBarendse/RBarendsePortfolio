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
            description: "Shane's List is an online classified ad service where registered memebers can post items for sale or find items to purchase from other registered members.",
            image: ShanesListScreenshot,
            github: "https://github.com/RickBarendse/Shanes-List",
            app: "https://shanes-list.herokuapp.com/"
        },
        {
            name: "Welcome to Oregon",
            description: "",
            image: OregonScreenshot,
            github: "https://github.com/RickBarendse/welcome2oregon",
            app: "https://adam-algatt.github.io/Project-1/"
        },
        {
            name: "Run Buddy",
            descritpion: "",
            image: RunbuddyScreenshot,
            github: "https://github.com/RickBarendse/run-buddy",
            app: "https://rickbarendse.github.io/run-buddy/"
        },
        {
            name: "Password Generator",
            descritpion: "",
            image: PasswordGeneratorScreenshot,
            github: "https://github.com/RickBarendse/ChallengeThree_PasswordGenerator",
            app: "https://rickbarendse.github.io/ChallengeThree_PasswordGenerator/"
        },
        {
            name: "Workday Scheduler",
            description: "",
            image: WorkdayScreenshot,
            github: "https://github.com/RickBarendse/ChallengeFive_WorkDayScheduler",
            app: "https://rickbarendse.github.io/ChallengeFive_WorkDayScheduler/"
        },
        {
            name: "Code Quiz",
            description: "",
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