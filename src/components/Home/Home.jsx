import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../images/rtr1604V.png";
import srk from "../../images/srk.jpg";
import amir from "../../images/amir.jpg";
import salman from "../../images/salman.jpg";
import { AiFillStar } from "react-icons/ai";
import "./home.css";
const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hreo_content">
          <h1>
            <span>Apache</span> RTR 160 <small>4v</small>{" "}
          </h1>
          <span>Racing DNA Unleashed!</span>
          <p>
            The TVS Apache RTR 160 4V has consistently pushed the limits of
            performance and technology, always outdoing itself in the race
            against time. With the first-in-segment Ride Modes and SmartXonnect,
            the 2021 TVS Apache RTR 160 4V pushes the envelope like never
            before. Race in any condition with nothing holding you back. It's
            time to become the Unstoppable.
          </p>
          <Link to="/about">About Us</Link>
        </div>
        <div className="hero_img">
          <img src={heroImg} alt="" />
        </div>
      </div>
      <div className="review">
        <h1>Customers Reviews</h1>
        <div className="review-container">
          <div className="review-item">
            <img src={srk} alt="" />
            <div className="rating">
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
            </div>
            <span>5 out of 5</span>
            <p>
              "Tvs Apache rtr 160 4v is the best motor bike in india. Now it
              will rock the Bangladesh!"
            </p>
            <h2>Shah-Rukh-Khan</h2>
          </div>
          <div className="review-item">
            <img src={amir} alt="" />
            <div className="rating">
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
            </div>
            <span>3 out of 5</span>
            <p>
              "Tvs Apache rtr 160 4v is the best motor bike in india. Now it
              will rock the Bangladesh!"
            </p>
            <h2>Shah-Rukh-Khan</h2>
          </div>
          <div className="review-item">
            <img src={salman} alt="" />
            <div className="rating">
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
            </div>
            <span>4 out of 5</span>
            <p>
              "Tvs Apache rtr 160 4v is the best motor bike in india. Now it
              will rock the Bangladesh!"
            </p>
            <h2>Shah-Rukh-Khan</h2>
          </div>
        </div>
        <div className="allReview">
          <Link to="/review">See All Reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
