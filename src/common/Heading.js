import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-center">
      <div>
        <h4 className="text-3xl font-extrabold uppercase mb-2 mt-4">
          {heading}
        </h4>
      </div>
    </div>
  );
};

export default Heading;
