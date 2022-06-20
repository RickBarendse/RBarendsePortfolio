import React from 'react';



function Portfolio() {
    const projects = [
        {
            name: "Shane's List",
            description: "Shane's List is an online classified ad service where registered memebers can post items for sale or find items to purchase from other registered members. Shane's List simplified user interface and limited number of categories makes it easy to navigate and find what you're looking for. Shane's List is a classified ad service only and is not involved in the transaction between users other than providing a means of connecting. Users are advised to do their own due diligience when making a purchase from any member on Shane's List. To aid a purchaser on making an informed decision regarding a purchase, Shane's List provides a user comment function so buyers can leave comments regarding their experience with a seller.",
            github: "https://github.com/RickBarendse/Shanes-List",
            app: "https://shanes-list.herokuapp.com/"
        }
    ]

    return (
        <section>
            <div>
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>   
                <ul className="flex-row mobille-row">
                    <li>
                      
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Portfolio;