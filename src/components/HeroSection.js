import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { MdAirplanemodeActive } from "react-icons/md";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  RadioGroup,
  Radio,
  Button,
} from "@nextui-org/react";
import OneWay from "./OneWay";
import RoundTrip from "./RoundTrip";
import MultiCity from "./MultiCity";
import { RiFlightTakeoffFill } from "react-icons/ri";
import CategorySection from "./CategorySection";

const HeroSection = () => {
  const [selected, setSelected] = useState("One Way");

  return (
    <>
      <section className="home">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-pink-700 text-4xl  text-center items-center justify-center mx-auto mb-4 mt-20 sm:mt-32 font-bold">
            Fly Affordably to Your Dream Destinations with
            <br /> Exclusive Deals!
          </h1>

          <div className="flex mt-4 rounded-lg sm:w-5/6 mb-5 ">
            <Card className="w-full">
              <CardHeader className="flex flex-col">
                <div>
                  <h1 className="text-md  font-bold font-sans text-2xl pt-4">
                    Contact for Ticket Booking
                  </h1>
                </div>
              </CardHeader>

              <CardBody className="flex flex-col items-center justify-center ">

                <RadioGroup
                  className="mb-5"
                  orientation="horizontal"
                  value={selected}
                  onValueChange={setSelected}
                >
                  <Radio value="One Way">
                    <p className=" sm:font-bold">One Way</p>
                  </Radio>
                  <Radio value="Rounded Trip">
                    <p className="sm:font-bold">Round Trip</p>
                  </Radio>
                  <Radio value="Multi City">
                    <p className="sm:font-bold">Multi City</p>
                  </Radio>
                </RadioGroup>


                {selected === "One Way" ? (
                  <OneWay />
                ) : selected === "Rounded Trip" ? (
                  <RoundTrip />
                ) : (
                  <MultiCity />
                )}

              </CardBody>
            </Card>
          </div>
        </div>

       

        {/* <div className="flex items-center justify-center h-full">
        <Button
          type="submit"
          radius="md"
          className="w-64 text-black bg-white absolute bottom-32 h-12 shadow-md	"
        >
          SEND
        </Button>
        </div> */}


      </section>


      <CategorySection />

      <div className="flex sm:bottom-4 mt-32 sm:mr-20 sm:ml-20 ml-2 mr-2  bg-orange-600 p-4 rounded-lg">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="p-8">
            <MdAirplanemodeActive className="mx-auto my-auto text-white w-32 h-16" />
            <p className="text-white  mt-2 text-sm sm:text-base text-center items-center justify-center font-Monserrat">
              Anticipate an unparalleled travel journey as you prepare for an experience that transcends expectations, promising a voyage unlike any other.
            </p>
          </div>
          <Divider
            orientation="vertical"
            className="my-4 hidden sm:block"
            style={{ backgroundColor: "white" }}
          />

          <div className="p-8">
            <CiCalendar className="mx-auto my-auto text-white w-32 h-16" />
            <h3 className="text-white  mt-2 text-sm sm:text-base  text-center items-center justify-center font-Monserrat">
              Book and manage flights on the go. Jet off on app-exclusive
              fares. Enjoy unlimited access to digital content. Travel
              seamlessly with the abroad ticket.
            </h3>
          </div>
          <Divider
            orientation="vertical"
            className="my-4 hidden sm:block"
            style={{ backgroundColor: "white" }}
          />

          <div className="p-8">
            <RiFlightTakeoffFill className="mx-auto my-auto text-white w-32 h-16" />
            <h3 className="text-white mt-2 text-sm sm:text-base  text-center items-center justify-center font-Monserrat">
              We enable you to book wherever you are.
              We are available everyday to provide lightning-fast assistance to your travel queries.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
