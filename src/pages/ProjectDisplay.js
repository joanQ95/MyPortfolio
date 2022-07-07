import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from '@material-ui/core/styles';
import "../styles/ProjectDisplay.css";
import NavBarAux from "../components/NavBarAux";



function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  

  return (

    <div className="project">
      <NavBarAux/>
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="github"><GitHubIcon onClick={event =>  window.open(project.githubUrl)}/></div>
       
    </div>
  );
}

export default ProjectDisplay;
