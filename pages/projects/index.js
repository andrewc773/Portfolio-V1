import classes from "./Projects.module.css";
import pageClasses from "../../styles/Page.module.css";
const Projects = () => {
  return (
    <>
      <body>
        <div className={pageClasses.header}>
          <h1>Projects</h1>
        </div>

        <div className={pageClasses.contents}>
          <p>No projects yet... currently working to change that!</p>
        </div>
      </body>
    </>
  );
};

export default Projects;
