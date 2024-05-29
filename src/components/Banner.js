import React from "react";
import { banners } from "../data/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineChair } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };
  return (
    <div className="banner">
      <div className="w-10/12 m-auto">
        <div className="mb-10">
          <div className="header-text">
            <button className="flex items-center">
              <div className="text-white mr-4 common-hover text-4xl rounded-3xl h-12 w-20 grid place-items-center">
                <MdOutlineChair />
              </div>
              Elevate Your Lifestyle
            </button>
            <p>with Our Furniture</p>
            Creations
            <Link
              to="/shop"
              className="text-white common-hover text-4xl rounded-full ml-4  px-7 py-2"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Slider {...settings}>
            {banners.map((data, key) => (
              <div className="banner-slider rounded-3xl" key={key}>
                <img
                  src={data.banner}
                  alt="databannerinmg"
                  className="rounded-3xl"
                  width={"100%"}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
