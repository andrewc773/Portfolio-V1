import classes from "../styles/Home.module.css";
const Home = () => {
  return (
    <div className={classes.body}>
      <header className={classes.header}>
        <h1 className={classes.title}>Welcome.</h1>
      </header>
      <section>
        <div className={classes.box}>
          <p>
            I am a software engineer based in{" "}
            <span style={{ color: "orange" }}>Austin, TX</span>. Currently, I
            work at
            <span> Oracle</span>.
          </p>
          <p>
            I also build <span style={{ color: "yellow" }}>full stack</span>{" "}
            applications for the web.
          </p>
          <p>
            I really <span style={{ color: "aqua" }}>appreciate</span> you
            stopping by.
          </p>
        </div>
      </section>
      <section className={classes.videoContainer}>
        <video className={classes.mobileView} width="100%" controls="controls">
          <source src="/Intro_Mobile.mp4" type="video/mp4" />
        </video>
        <video className={classes.desktopView} width="100%" controls="controls">
          <source src="/Intro_Video.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
};
export default Home;
