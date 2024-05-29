import React, { useState } from "react";
import { products } from "../data/Data";
import { BiCart } from "react-icons/bi";
import Modal from "../common/Modal";
import Heading from "../common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoMdHeartEmpty,
  IoMdSearch,
} from "react-icons/io";

const BestSeller = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <IoIosArrowRoundBack />,
    nextArrow: <IoIosArrowRoundForward />,
  };
  return (
    <div>
      <div className="products w-10/12 m-auto">
        <Heading heading={"Top Sellers"} />
        <Slider {...settings}>
          {products.map((item, index) => (
            <div key={index} className="mt-8">
              <div className="overflow-hidden relative ml-4">
                <div className="image-container relative">
                  <div className="rounded-3xl">
                    <img src={item.img} alt="img" className="rounded-3xl" />
                  </div>

                  <div className="opacity-0 absolute top-0 right-0 m-4">
                    <div>
                      <div className="bg-white p-4 rounded-full mb-2">
                        <IoMdHeartEmpty />
                      </div>
                      <div className="bg-white p-4 rounded-full">
                        <IoMdSearch />
                      </div>
                    </div>
                  </div>
                  <div className="opacity-0 absolute -bottom-3 right-0 bg-white p-4 rounded-s-2xl">
                    <div className="bg-black text-white h-10 w-10 grid place-items-center rounded-3xl">
                      <button
                        className="text-2xl"
                        onClick={() => handleOpen(item.id)}
                      >
                        <BiCart />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="product-details mt-2">
                  <p className="mb-2">{item.title}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal
        data={products.find((item) => item.id === isModalOpen)}
        isModalOpen={isModalOpen}
        handleClose={handleClose}
      />
    </div>
  );
};

export default BestSeller;
