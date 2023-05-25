import React, { Component } from 'react';

class About extends Component {
  render() {
    const age = Math.floor((Date.now() - new Date(2001, 8, 2)) / (1000 * 60 * 60 * 24 * 365.25)); // Automatically Update Age

    return (
      <>
        <section> 
          <div style={{display:'inline-block', textAlign:'center'}}> 
            <img src="https://avatars.githubusercontent.com/u/108207472?s=400&u=33be1111d8e0452cb41f68f643a367ba64e27d71&v=4" className="about-image" style={{width:'30%'}} />
            <img src={process.env.PUBLIC_URL + "/Images/Hobbies.jpg"} alt="Picture Of Instruments" className="about-image"  style={{width:'18.85%'}} />
            <img src={process.env.PUBLIC_URL + "/Images/School.png"} alt="University Logo" className="about-image" style={{width:'30%'}} /> 
          </div>
          <p>
            I am a {age} years old Full Stack Developer, I enjoy creating art and producing music. Got hooked on coding when I was 11 when a freind showed me how you could make games. Met a lot of great developers and got certified at the Univerity Of Utah. Currently looking for a gig where I get to do what I enjoy for a living! Profile Picture made with AI!
          </p>
        </section>

        <section> 
          <p> <span>TECHNICAL PROFICIENCY</span></p>
          <p> Git Team / Node / Javascript / Express / Websockets / React / Tailwind / Mongo / SQL / Heroku / HTML Canvas / CSS </p>
        </section>
      </>
    );
  }
}

export default About;