import React from "react";
import { AiFillStar } from "react-icons/ai";
import srk from "../../images/srk.jpg";
import amir from "../../images/amir.jpg";
import salman from "../../images/salman.jpg";
import randy from "../../images/randy.jpg";
import rock from "../../images/rock.jpg";
import jhankar from "../../images/jhankar.jpg";
import "./review.css";

const Review = () => {
  return (
    <div>
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
        <div className="review-container">
          <div className="review-item">
            <img src={randy} alt="" />
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
          <div className="review-item">
            <img src={rock} alt="" />
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
            <span> 5 out of 5</span>
            <p>
              "Tvs Apache rtr 160 4v is the best motor bike in india. Now it
              will rock the Bangladesh!"
            </p>
            <h2>Shah-Rukh-Khan</h2>
          </div>
          <div className="review-item">
            <img src={jhankar} alt="" />
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
      </div>
    </div>
  );
};

export default Review;
