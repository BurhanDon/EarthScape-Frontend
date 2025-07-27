import React, { useEffect } from "react";
import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Weather from "./Weather.jsx";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="whole">
        <div className="videoContainer">
          <video className="videoLogo" loop autoPlay muted>
            <source src="./src/assets/videoLogo.mp4" type="video/mp4" />
          </video>

          <div className="videoOverlay">
            <h1 className="videoTitle">
              We are <span className="CA">climate alliance</span>
            </h1>
            <p className="videoLine">
              We are here to help the earth and people who live in it.
            </p>
            <p className="videoLine2">Learn more about us</p>
            <Link to="/about">
              <button className="aboutButton">About us</button>
            </Link>
          </div>
        </div>

        <div className="info">
          <h1
            className="headline"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
          >
            "Turning Climate Data into Actionable Insights"
          </h1>
          <p className="Description">
            EarthScape Climate Agency’s platform empowers decision-makers with
            real-time analysis of climate data, transforming complex patterns
            and trends into clear insights. By leveraging big data and advanced
            analytics, we provide an in-depth understanding of climate dynamics,
            enabling informed actions for a more sustainable future.
          </p>
        </div>

        <Weather className="weather" />
      </div>
    </>
  );
};

export default Home;
