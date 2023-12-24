import React from "react";
import "../components/home.css";
import Logo from "../assets/sg-logo.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="home-div">
        <div className="title-div">
          <img src={Logo} alt="StructuralGuru-Logo" />
          <h1>StructuralGuru</h1>
        </div>

        <p className="welcome-msg">
          WELCOME TO PRACTICAL RCC MANUAL DESIGN TRAINING
        </p>

        <p className="quote">Help Each Other, Grow Together !</p>

        <div className="timer-div">timer here</div>
      </div>
    </section>
  );
};

export default Home;
