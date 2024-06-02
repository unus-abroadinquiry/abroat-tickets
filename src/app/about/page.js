"use client";
import Header from "@/components/Navbar/Header";
import React from "react";
import aboutImg from "../../../public/Assets/airPlane.jpeg";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Header activeItem={1} />
      <div className="sm:m-20 m-4">
        <div className="flex sm:flex-row flex-col">
          <div className="text-left sm:p-10 sm:w-1/2 borde">
            <h1 className="font-bold text-2xl text-red-500 uppercase">
              About US
            </h1>
            <h3 className="font-bold text-xl text-justify">
              Making travel joyful and easy, we are all about your journey.
            </h3>
            <p className="mt-4 font-light text-justify">
              Explore the world with the Abroad Tickets and save your precious
              time and money for the future yet to come! We Abroad Tickets
              ensures a smooth and hassle-free purchasing of tickets for our
              clients at the cheapest rate possible.
            </p>
            <p className="mt-4 font-light text-justify">
              We, Abroad Tickets, a sister concern of the prominent Educational
              Consultancy{" "}
              <a href="https://abroadinquiry.com/" className="text-red-500">
                “Abroad Inquiry,”
              </a>{" "}
              began our journey in 2019 with the primary goal of ensuring smooth
              flight bookings for our clients. Abroad Tickets has become widely
              recognized and favored, particularly among students, for our
              special discounts tailored to their needs. We firmly believe that
              students pursuing higher education abroad are valuable assets, and
              as such, we at Abroad Tickets are committed to investing in their
              future by providing them with as many discounts as possible.
              Moreover, we prioritize transparency by offering authentic
              information, including updates on fluctuating airline prices and
              opportunities for discounted fares.
            </p>
          </div>
          <div className="sm:w-1/2 sm:mt-8 mt-8 border">
            <Image
              src={aboutImg}
              className="border-indigo-600 w-full h-full"
              alt="about banner"
              placeholder="blur"
            />
          </div>
        </div>
      </div>

      <div className="text-left ml-2 sm:mr-10 sm:ml-28 p-1 ">
        <h1 className="font-bold text-2xl text-red-400 uppercase">
          Is Abroad Tickets Worth Choosing for?
        </h1>
        <p className="font-light text-justify sm:mr-12 mr-2 mb-4">
          Abroad Tickets stands out for various reasons. We offer global access
          and special discounts, including deals for students. Our online
          booking system is easy to use, and we provide personalized service
          through face-to-face consultations. Plus, our flexible refund policy
          ensures peace of mind. Choose Abroad Tickets for hassle-free travel
          booking.
        </p>
      </div>

      <div className="text-left ml-2 sm:mr-10 sm:ml-28 p-1 ">
        <h1 className="font-bold text-2xl text-red-400 uppercase">
          Why Choose Us?
        </h1>
        <ul className="list-disc ml-4">
          <li className="mt-2">Local and Global Engagement</li>
          <li className="mt-2">
            Special discount on round-trip and multi-destination trips
          </li>
          <li className="mt-2">Discountsforstudents</li>
          <li className="mt-2">Online purchasing systems.</li>
          <li className="mt-2">Advancefreebooking.</li>
          <li className="mt-2 mb-4">Local and Global Engagement</li>
        </ul>
      </div>

      <div className="text-left ml-2 sm:ml-28 p-1 ">
        <h1 className="font-bold text-2xl text-red-400 uppercase">Our Story</h1>
        <h3 className="font-bold text-xl mr-2 text-justify">
          Our story is the story of 1st ever fully functional online travel
          agency of Bangladesh
        </h3>
      </div>
      <div className="text-left ml-2 sm:ml-28 px-1 py-4 sm:mr-20 mx-auto">
        <p className="font-light text-justify mr-2 mb-4">
          Our goal is to unlock all the facilities of an online travel agency
          (OTA) so that people can easily book flights or hotels online without
          leaving home. We always put our customers needs first; to solve the
          complications and make life easier for them. Service quality is always
          a priority because we believe our unique services make our customers
          feel at home. Abroad Tickets! Its all about your journey.
        </p>
      </div>
    </>
  );
};

export default About;
