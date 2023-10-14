import classes from "./Experience.module.css";
import Boxes from "../../components/Boxes";

const Experience = () => {
  return (
    <>
      <div>
        <div className={classes.header}>
          <h1>Experience</h1>
        </div>
        <div className={classes.contents}>
          <div className={classes.boxContainer}>
            <Boxes />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
