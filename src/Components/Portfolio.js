import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/pyish/SoinVet" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/soin.png" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Veterinary Web app</h3>
                      <p>Soin Vet is a web-based system written in Python 3 and using Django framework with the following functionalities. 
                        1.Register new users (Veterinary officers, Farmers and Students). 
                        2.Students can access learning resources.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="http://ishasr.pythonanywhere.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-django-plain-wordmark  technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/pyish/travel3" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/07.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>fashion_web</h3>
                      <p>fashion_web is a E-commerce system written in Python 3 and using Django framework. The application allows users add to cart products and checkout. It allows admins to add different Categories and products in the backend.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://shishaa.pythonanywhere.com/" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-django-plain-wordmark  technology"></i>
                        <i className="devicon-python-plain-wordmark  technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>              
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/pyish/dreamarn.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/01.jpg" alt="ror-capstone-lifestyle" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Dreamarn </h3>
                      <p>This is the dreamarn enterprise landing page.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://dreamarn.netlify.app" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-python-plain-wordmark  technology"></i>
                        <i className="devicon-django-plain-wordmark  technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://github.com/pyish/kinanta.git" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/ishtravel.png" alt="react-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>KB6 Adventures</h3>
                      <p>For tours and good places to visit.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://kb6adventures.netlify.app" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                      </div>
                      <div className="languages">
                        <i className="devicon-django-plain-wordmark  technology"></i>
                        <i className="devicon-python-plain-wordmark  technology"></i>
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
