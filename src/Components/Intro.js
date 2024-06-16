import "../Styles/Intro.css";
import { useState, useEffect } from "react";
import images from "../Media/Images/Imports";

const imageCount = images.length; // Total number of images

function IntroImages() {
  const [carouselActiveImage, setCarouselActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselActiveImage((prevImage) => (prevImage + 1) % imageCount);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  return (
    <div className="row car-row">
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400&display=swap"
        rel="stylesheet"
      ></link>
      <div className="col-md-7">
        <div className="carousel slide">
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div
                className={`carousel-item ${
                  index === carouselActiveImage ? "active" : ""
                }`}
              >
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <h1>From experienced carpenters to you</h1>
        <p>
          Offering a wide array of home repair services, our team excels in both
          interior and exterior projects. From installing windows and doors to
          painting walls, we ensure every task is completed with utmost
          precision and quality. Our professionals are skilled in a variety of
          repairs, including but not limited to, roofing, plumbing, and
          electrical work. We use only high-quality materials and stay abreast
          of the latest techniques to meet your home improvement needs. Trust us
          to make your home safer, more functional, and aesthetically appealing.
        </p>
      </div>
    </div>
  );
}

export default IntroImages;
