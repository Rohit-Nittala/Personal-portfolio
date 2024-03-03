export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rohit</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Developer</span>{" "}
            <br />
          </h1>
          <p className="hero--section-description">
            A passionate developer having experience in multiple domains and could juggle between them. Eager to learn and eager to implement.
            <br/>
            <br /> 1 Fact and a lie, I don't have a yellow shirt and I'm a good developer.
          </p>
        </div>
        {/*<button className="btn btn-primary">Get In Touch</button>*/}
      </div>
      <div className="hero--section--img">
        <img src="./img/dp.png" alt="Hero Section" />
      </div>
    </section>
  );
}
