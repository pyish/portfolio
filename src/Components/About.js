import React, { Component } from 'react';
import resume from '../assets/resume.pdf'
import activities from '../assets/activities.pdf'

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Ishmael kipkoech Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>Dedicated Technical Support Specialist with a strong passion for cybersecurity and extensive
expertise in vulnerability assessment, SOC operations, and IT security implementation. Proven
track record in fortifying networks, conducting thorough risk assessments, and implementing
effective security policies. Proficient in advanced security technologies and tools..</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                     <span>{name}</span><br />
                     <span>{street}<br />
                        {city} {state}, {zip}
                     </span><br />
                     <span>{phone}</span><br />
                     <span><a href={`mailto:${email}?subject=The%20subject%20of%20the%20mail`}>{email}</a></span>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                    <a href={resume} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
               <div className="columns download">
                  <p>
                    <a href={activities} target="_blank" rel="noopener noreferrer" className="button"><i className="fa fa-download"></i>Trainings And Activities invloved.</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
    );
  }
}

export default About;
