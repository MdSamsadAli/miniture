import React from "react";
import { brands } from "../data/Data";
import Heading from "../common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Brands = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <div className="w-10/12 m-auto">
        <Heading heading={"Best Deals On The Brands"} />
        <Slider {...settings}>
          {brands.map((item, index) => (
            <div key={index}>
              <div className="bg-white shadow-md rounded-lg m-2">
                <div className="flash_sale_img">
                  <img
                    src={item.img}
                    alt="img"
                    className="h-80 w-full object-cover rounded-t-lg"
                  />
                </div>

                <div className="products-details p-3 my-4">
                  <p className="text-rose-600 mb-2 font-bold">{item.title}</p>
                  <p className="mb-2">{item.short_description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Brands;
