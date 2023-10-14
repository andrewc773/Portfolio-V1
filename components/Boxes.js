import classes from "./Box.module.css";
import { SiOracle } from "react-icons/si";
import { AiOutlineCloudUpload } from "react-icons/ai";

/******
We can (and should) make this scalable. Simply make one box and pull the info from a backend to upload content.
*******/

const Box = () => {
  return (
    <>
      <div className={classes.boxes}>
        <a className={classes.link} href="https://www.oracle.com/cloud">
          <div className={classes.box}>
            <div className={classes.top}>
              <div className={classes.left}>
                <div className={classes.date}>Jul 2023 - Present</div>
              </div>
              <div className={classes.right}>
                <div className={classes.header}>
                  <div className={`${classes.jobTitle}`}>
                    Cloud Engineer <span>&nbsp;&nbsp;&#183;</span>
                  </div>

                  <div className={classes.company}>
                    Oracle Cloud Infrastructure
                    <span className={classes.logo}>
                      <AiOutlineCloudUpload />
                    </span>
                  </div>
                </div>
                <div className={classes.text}>
                  Austin, TX &nbsp;&nbsp;
                  <span>&#183; &nbsp;Jul 2023 - Present</span>
                </div>
                <div className={`${classes.text} ${classes.description}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className={classes.badges}>
                  <div className={classes.technologyBadge}>Java</div>
                  <div className={classes.technologyBadge}>Terraform</div>
                  <div className={classes.technologyBadge}>Golang</div>
                </div>
              </div>
            </div>
          </div>
        </a>
        {/* Second experience */}
        <a className={classes.link} href="https://www.oracle.com/">
          <div className={classes.box}>
            <div className={classes.top}>
              <div className={classes.left}>
                <div className={classes.date}>Jul 2022 - Aug 2022</div>
              </div>
              <div className={classes.right}>
                <div className={classes.header}>
                  <div className={`${classes.jobTitle}`}>
                    Software Engineer Intern
                    <span>&nbsp;&nbsp;&nbsp;&#183;</span>
                  </div>
                  <div className={classes.company}>
                    Oracle
                    <span className={classes.logo}>
                      <SiOracle className={classes.oracle} />
                    </span>
                  </div>
                </div>
                <div className={classes.text}>
                  Remote &nbsp;&nbsp;
                  <span>&#183;&nbsp;Jul 2022 - Aug 2022</span>
                </div>
                <div className={`${classes.text} ${classes.description}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <div className={classes.badges}>
                  <div className={classes.technologyBadge}>Java</div>
                  <div className={classes.technologyBadge}>Docker</div>
                  <div className={classes.technologyBadge}>Jenkins</div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Box;
