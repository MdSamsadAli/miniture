import React from "react";
import { category } from "../data/Data";

const Category = () => {
  return (
    <div className="w-10/12 m-auto">
      <div className="flex">
        {category.map((category, key) => (
          <div className="" key={key}>
            <div className="m-2">
              {category.img && (
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-full h-full object-cover rounded-3xl hover:scale-110  transition-all ease-in-out duration-700"
                  />
                  <p className="absolute rounded-full rounded-s-none p-3 border-white bg-white bottom-0 left-0 text-xl capitalize">
                    {category.name}
                  </p>
                </div>
              )}
              {category.imgs && category.imgs.length > 0 && (
                <div>
                  {category.imgs.map((image, index) => (
                    <div
                      key={index}
                      className="relative mb-4 overflow-hidden rounded-3xl"
                    >
                      <img
                        src={image.img}
                        alt={image.name}
                        className="w-full h-full object-cover rounded-3xl hover:scale-110  transition-all ease-in-out duration-700"
                      />
                      <p className="absolute rounded-3xl rounded-s-none p-3 border-white bg-white bottom-0 text-xl capitalize">
                        {image.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
