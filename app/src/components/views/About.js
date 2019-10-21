import React from 'react';

const About = (props) => {
  

  return (
    
    <>
    {props.view('about')}
    <h1>About Page {props.match.url}</h1>
    </>
  );
};

export default About; 