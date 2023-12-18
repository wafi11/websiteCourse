import HeroImage from "../assets/img/hero.png";
import { dataSwiper, kelasTerbaru, testimonial } from "../data/index";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../dist/css/main.css";

// import required modules
import { Pagination } from "swiper/modules";
const HomePage = () => {
  let navigate = useNavigate();
  return (
    <>
      <header className="w-[100%] min-h-screen grid justify-between items-center md:flex">
        <div className="grid items-center justify-center max-w-[500px] px-7 py-5 mx-20 mt-12 ">
          <h1 className="mb-3 font-bold text-4xl sm:2xl min-w-[40%] justify-center text-start">
            Temukan <br /> <span className="text-[#dc3545]">Bakat Kreatif</span>{" "}
            <br /> Bersama Kami
          </h1>
          <p className="mb-4 text-[#000] w-full text-lg">
            lorem ipsum dolor sit amet consectetyr adipisicing elit. Dolores
            exercitationem a voluptas dignissimos error autem.
          </p>
          <div className="flex gap-3">
            <button className="bg-[#dc3545] px-3 text-black py-3 rounded-xl font-semibold hover:text-white ">
              Lihat Promo
            </button>
            <button className="px-3 py-3 rounded-xl font-semibold text-[#dc3545] border-2 border-[#dc3545] hover:bg-white">
              Lihat Kelas
            </button>
          </div>
        </div>

        <img
          src={HeroImage}
          className="max-w-[480px] px-10 pb-2 items-center justify-center"
          alt="...."
        />
      </header>
      <div className="bg-primary pb-[100px] w-full min-h-screen ">
        <div className="pt-[150px] pb-[100px] ">
          <h1 className="text-center font-bold text-4xl text-purple-900 pb-3">
            Kelas Terbaru
          </h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit.
          </p>
        </div>
        <ul className="grid grid-cols sm:grid-cols-3 md:grid-cols-3 gap-2 justify-center px-2 ">
          {kelasTerbaru.map((item) => {
            return (
              <li key={item.id} className="bg-gray-100 px-4 py-5">
                <img
                  src={item.image}
                  alt="unsplash.com"
                  className="h-[300px] w-full rounded-md my-2"
                />
                <div className="pt-7 text-center">
                  <i className={`${item.star1} text-purple-300 `}></i>
                  <i className={`${item.star2} text-purple-400`}></i>
                  <i className={`${item.star3} text-purple-500`}></i>
                  <i className={`${item.star4} text-purple-600`}></i>
                  <i className={`${item.star5} text-purple-700`}></i>
                </div>
                <h5 className="px-3 mt-2 text-md">{item.title}</h5>
                <div className="pt-2 flex justify-between mt-7">
                  <p className="text-md font-bold text-blue-700 p-2">
                    {item.price}
                  </p>
                  <button className="py-2 px-3 bg-[#dc3545] rounded-md text-[#fff]">
                    {item.buy}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="text-center text-[#fff] w-full pt-[100px] justify-center">
          <button
            className="bg-green-600 p-3 rounded-full font-semibold hover:bg-green-800"
            onClick={() => navigate("/kelas")}>
            Lihat Semua Kelas
            <i className="fa-solid fa-chevron-right ms-3"></i>
          </button>
        </div>
      </div>
      <div className="py-5 w-full bg-gray-200">
        <div className="pb-3 ">
          <h1 className="text-center font-bold my-5 text-4xl">Testimonial</h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className={`mySwiper sticky`}>
          {testimonial.map((data) => {
            return (
              <SwiperSlide
                key={data.id}
                className="shadow-md flex flex-col bg-gray-300 rounded-md justify-center items-center p-4 text-center text-md">
                <p className="p-3 text-center ">{data.desc}</p>
                <div className="flex pt-3 gap-5 text-center">
                  <img
                    src={data.image}
                    alt="../"
                    className=" rounded-full w-[50px] h-[50px] inline-block "
                  />
                  <div className="grid pb-7">
                    <h5 className="mb-1 text-xl">{data.name}</h5>
                    <p className="m-auto font-bold text-xl">{data.skill}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HomePage;
