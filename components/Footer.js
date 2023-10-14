import classes from "./Footer.module.css";
import { BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
const Footer = () => {
  return (
    <>
      <footer className={classes.footerContainer}>
        <div className={classes.topBorder}></div>
        {/* <div className={classes.logo}>&copy; Andrew Chavarria 2023</div> */}
        <div className={classes.icons}>
          <div className={`${classes.icon} ${classes.gmail} `}>
            <a href="mailto:andrew.n.chav@gmail.com">
              <BiLogoGmail />
            </a>
          </div>
          <div className={`${classes.icon} ${classes.github}`}>
            <a href="https://github.com/andrewc773">
              <BsGithub />
            </a>
          </div>
          <div className={`${classes.icon} ${classes.linkedin}`}>
            <a href="https://www.linkedin.com/in/andrew-chavarria-3b904321b">
              <BsLinkedin />
            </a>
          </div>
          <div className={`${classes.icon} ${classes.youtube}`}>
            <a href="https://youtube.com">
              <BsYoutube />{" "}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
