import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/pyish/SoinVet" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/06.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Veterinary Web app</h3>
                      <p>Soin Vet is a web-based system written in Python 3 and using Django framework with the following functionalities. 
                        1.Register new users (Veterinary officers, Farmers and Students).
                        2.Log in registered users and be directed to their respective dashboards.
                        3.Veterinary officers can take appointments from farmers. 
                        4.Veterinary officers can take veterinary related records like artificial insemination, breeding record, calf registration, clinical approach, consultation, death approach, deworming, livestock inventory, pregnancy diagnosis, sick approach and vaccination. 
                        5.Farmers can view and book appointments with Veterinary officers. 
                        6.Farmers can retrieve their respective forms entered by veterinary officers.
                        7.Farmers can take inventory of their farm.
                        8.Admin can create learning resources for students
                        9.Students can access learning resources.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://pyish.pythonanywhere.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/pyish/SoinVet" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-rails-plain-wordmark technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/pyish/fashion_web.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/07.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>fashion_web</h3>
                      <p>fashion_web is a E-commerce system written in Python 3 and using Django framework. The application allows users add to cart products and checkout. It allows admins to add different Categories and products in the backend.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://shishaa.pythonanywhere.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/pyish/fashion_web.git" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>              
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/rammazzoti2000/ror-capstone-lifestyle" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/01.jpg" alt="ror-capstone-lifestyle" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>LifeOpedia! WebApp</h3>
                      <p>Webapp where users can publish lifestyle articles, bookmark favourite articles, leave comments and upvote an article.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://ror-capstone-lifeopedia.herokuapp.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li><a href="https://github.com/rammazzoti2000/ror-capstone-lifestyle" className="button project-button brands" target="_blank" rel="noopener noreferrer"><i className="fa fa-github icon"></i>View Source</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-rails-plain-wordmark technology"></i>
                        <i className="devicon-sass-original technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
