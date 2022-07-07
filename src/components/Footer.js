import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">                                                                                                                                             
        <EmailIcon onClick={() => window.location = 'mailto:joan.quispec@gmail.com'}/>
        <GithubIcon onClick={event =>  window.open('https://github.com/joanQ95')}/>
        <TwitterIcon onClick={event =>  window.open('https://twitter.com/JoanAlexanderQ5')}/>
        <LinkedInIcon onClick={event =>  window.open('https://www.linkedin.com/in/joanquispedev/')}/>
      </div>
      <p> &copy; 2022</p>
    </div>
  );
}

export default Footer;
