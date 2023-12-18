import React from "react";
import { faq } from "../data";
import { FaArrowDown } from "react-icons/fa";

const Faqcomponent = () => {
  return (
    <div className="min-h-screen w-full justify-center py-[100px] bg-primary">
      <h1 className="text-3xl font-bold text-center text-purple-500">
        Pertanyaan yang sering ditanyakan
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-[50px]">
        {faq.map((data) => {
          return (
            <div
              className="flex gap-2 justify-start min-w-[300px] px-[100px] "
              key={data.id}>
              <div className="flex bg-gray-200 px-2 rounded-md p-3 w-full ">
                <h3 className="text-md p-2"> {data.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqcomponent;
