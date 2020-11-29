import React from "react";
import { Link } from "react-router-dom";

const ShowcaseText = () => {
  return (
    <div className="showcaseText">
      <div className="showCaseInfo">
        <h2 className="text-center text-capitalize">welcome to explore</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis modi
          saepe porro iusto quos omnis sapiente, illo, voluptatibus similique
          nihil!
        </p>

        <div className="exploreArea">
          <button
            className="btn btn-group btn-primary explore bg-dark
          "
          >
            <span>
              <Link className="text-white text-decoration-none" to="/products">
                explore
              </Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseText;
