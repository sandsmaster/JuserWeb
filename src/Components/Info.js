import skillImg from "../skill.png";
import "../Styles/Info.css";

export default function Info() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Welcome to Juser Carpentry Services </h1>
      <p className="lead">
        Welcome! We're a skilled team of carpenters and repair specialists,
        dedicated to bringing your visions to life. From custom carpentry to
        home repairs, we provide high-quality services tailored to your needs.
        Explore our site to see our craftsmanship and don't hesitate to reach
        out with your project ideas. We're here to help you transform your
        space.
      </p>
      <div className="row">
        <div className="skill card card-body m-3 col-sm-2 text-center">
          <img
            src={skillImg}
            className="img-fluid mx-auto col-3"
            alt="Skill_icon"
          ></img>
          <h4 className="card-title">Carpentry Repairs and Installations</h4>
          <p className="card-text">
            Got a wardrobe that won’t close or a bed that’s seen better days?
            We’ll fix it up for you.
          </p>
        </div>
        <div className="skill card card-body m-3 col-sm-2 text-center">
          <img
            src={skillImg}
            className="img-fluid mx-auto col-3"
            alt="Skill_icon"
          ></img>
          <h4 className="card-title">Painting Services</h4>
          <p className="card-text">
            Single room or the whole house, we’ll make your walls look fresh and
            new with our expert painting services.
          </p>
        </div>
        <div className="skill card card-body m-3 col-sm-2 text-center">
          <img
            src={skillImg}
            className="img-fluid mx-auto col-3"
            alt="Skill_icon"
          ></img>
          <h4 className="card-title">Demolition and Construction</h4>
          <p className="card-text">
            Planning a renovation? We handle everything from tearing down old
            structures to building new ones.
          </p>
        </div>
        <div className="skill card card-body m-3 col-sm-2 text-center">
          <img
            src={skillImg}
            className="img-fluid mx-auto col-3"
            alt="Skill_icon"
          ></img>
          <h4 className="card-title">Basic Electrical Engineering</h4>
          <p className="card-text">
            Need some basic electrical work done? We can handle that too, making
            sure everything is safe and up to code.
          </p>
        </div>
        <div className="skill card card-body m-3 col-sm-2 text-center">
          <img
            src={skillImg}
            className="img-fluid mx-auto col-3"
            alt="Skill_icon"
          ></img>
          <h4 className="card-title">Welding Services</h4>
          <p className="card-text">
            From structural welding to decorative projects, our welding services
            add strength and style.
          </p>
        </div>
      </div>
    </div>
  );
}
