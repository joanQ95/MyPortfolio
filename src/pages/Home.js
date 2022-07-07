import React from "react";
import "../styles/Home.css";
import Projects from "./Projects";
import Experience from "./Experience";
import Typed from 'react-typed'

function Home() {
  return (
    <div className="home">
      <div id="about" className="about">
        <h2> Hi, I'm Joan!</h2>
        <div className="prompt">
          <p>A Full Stack developer / Mechatronic Engineer with a passion for learning and creating.</p>
          <Typed
            className='typed-text'
            strings={['HTML', 'CSS', 'Javascript', 'React', 'Nodejs', 'Express']}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
      <div id="skills" className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              BootStrap, Module CSS
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, 
              PostgreSQL, Nodemon
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, C#, C, C++</span>
          </li>
        </ol>
      </div>
      <Projects />
      <Experience />
    </div>
  );
}

export default Home;
