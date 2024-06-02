import React from "react";
import Image from "next/image";
import safe from "../../public/Assets/safe.png";
import great from "../../public/Assets/great.png";
import always from "../../public/Assets/always.png";
import fresh from "../../public/Assets/fresh.png";

import {
  Card,
  CardHeader,
} from "@nextui-org/react";
import data from "./Data/AirlinesData";


const PopularAirlines = () => {
  return (
    <>
      <div key="home-container" className="home-container flex flex-col items-center justify-center">
        <h1 className="dark:text-white text-4xl text-center items-center justify-center mx-auto mb-4 mt-8 sm:mt-32  volkhov text-[3.125rem] text-title font-[700] font-Monserrat">
          Popular Airlines
        </h1>
        <p className="dark:text-white w-4/5 sm:w-2/5 text-sm sm:text-base font-thin text-center items-center justify-center">
          Discover top airlines or flight and seamlessly search any flight and get any online ticket instantly granting you effortless access to global travel
        </p>
      </div>

      <div key="airlines-container"  className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ml-5 sm:ml-20 mr-5 sm:mr-20">
        {data.map((item,index) => (
          <Card key={index} className="max-w-[340px] hover:bg-lime-100">
            <CardHeader key={index} className="justify-between">
              <div className="flex gap-5">
                <Image key={item.index} src={item.img} alt="Avatar" width={40} height={40} />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold font-Monserrat leading-none text-default-600">
                    {item.name}
                  </h4>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div key="travel-container" className="travel flex flex-col items-center justify-center">
        <h1 className="text-white text-sm sm:text-4xl font-bold">
          Effortless travel simplified
        </h1>
        <p className="text-white font-sans text-sm sm:text-base font-thin w-4/5 sm:w-2/5 text-center items-center justify-center">
          Easily reserve and oversee your flights while on the move. Take off
          with exclusive app-only prices. Indulge in limitless access to digital
          content. Experience seamless travel with the expertise of Abroad
          Ticket.
        </p>
      </div>

      

      <div key="ticket-container" className="mb-36 bg-gray-50 dark:bg-slate-800 items-center justify-center">
        <h1 className="dark:text-white items-center justify-center mx-auto mb-4 mt-10  pt-14 volkhov text-[3.125rem] text-title font-[500] text-center font-Monserrat">
          Why Abroad Tickets
        </h1>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ml-5 sm:ml-52 mr-5 sm:mr-52 pb-20">
          <div className="flex items-center space-x-4">
            <Image
              src={safe}
              alt="Avatar"
              width={60}
              height={60}
              className="border-2  rounded-full bg-red-500"
            />

            
            <div className="flex flex-col gap-1 items-start">
              <h4 className="text-sm font-semibold leading-none text-default-600">
                Safest & Reliable
              </h4>
              <p className="text-sm">
                Maintaining global airline operating standards in every way
                imaginable
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src={great}
              alt="Avatar"
              width={50}
              height={50}
              className="border-2  rounded-full bg-cyan-600"
            />

           
            <div className="flex flex-col gap-1 items-start">
              <h4 className="text-sm font-semibold leading-none text-default-600">
                Great Comfort
              </h4>
              <p className="text-sm">
                Comfortable seats with relaxing leg space makes you feel like
                home
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src={always}
              alt="Avatar"
              width={50}
              height={50}
              className="border-2  rounded-full bg-cyan-600"
            />

           
            <div className="flex flex-col gap-1 items-start">
              <h4 className="text-sm font-semibold leading-none text-default-600">
                Always Ontime
              </h4>
              <p className="text-sm">
                Your time is a more valuable things and we care about it more
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Image
              src={fresh}
              alt="Avatar"
              width={50}
              height={50}
              className="border-2  rounded-full bg-cyan-600"
            />

           
            <div className="flex flex-col gap-1 items-start">
              <h4 className="text-sm font-semibold leading-none text-default-600">
                Fresh Experience
              </h4>
              <p className="text-sm">
                Equipped with expert team world className technology and 24/7
                hotline to serve you
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularAirlines;
