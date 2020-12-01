import React from 'react';
import SpinnerImage from "../../assets/images/loading.gif";

const Spinner = () => {
    return (
        <div>
            <div className="d-flex justify-content-center">
          <img src={SpinnerImage} alt="spinner" />
        </div>
        <p className="text-center">Loading ...</p>
        </div>
    )
}

export default Spinner
