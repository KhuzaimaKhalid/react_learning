import React from "react";

const Alert = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="alert alert-success  alert-dismissible fade show" role="alert">
          Student Added Successfully
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
