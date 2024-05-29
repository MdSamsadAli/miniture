import React from "react";
import { offer } from "../data/Data";

const Offer = () => {
  return (
    <div className="mt-8">
      <div className="w-10/12 m-auto">
        <div>
          {offer.map((data, key) => (
            <div key={key}>
              <div className="relative">
                <div className="craft-img rounded-3xl">
                  <img
                    src={data.customer_img}
                    alt="img"
                    className="w-full rounded-3xl"
                  />
                </div>
                <div>
                  <p className="bg-white p-4 text-xl rounded-full absolute top-0 -right-6">
                    {data.title}
                  </p>
                  <h1 className="bg-white px-6 py-6 text-3xl absolute top-14 -right-6 rounded-full">
                    {data.subtitle}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
