import classes from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header>
        <div className={classes.headerContainer}>
          <div className={classes.top}>
            <div className={classes.title}>Andrew Chavarria</div>
            <div className={classes.links}>
              <Link className={`${classes.link} ${classes.home}`} href="/">
                Home
              </Link>
              <Link
                className={`${classes.link} ${classes.experience}`}
                href="/experience"
              >
                Experience
              </Link>
              <Link
                className={`${classes.link} ${classes.projects}`}
                href="/projects"
              >
                Projects
              </Link>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.bottomBorder}></div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
