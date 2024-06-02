"use client";
import Header from "@/components/Navbar/Header";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsBank2 } from "react-icons/bs";
import { Card, Input, Textarea, Button } from "@nextui-org/react";

const Contact = () => {
  return (
    <div>
      <Header activeItem={2} />
      <Card className="max-w-[900px] mx-auto mt-10 mb-10">
        <div className="flex sm:flex sm:flex-row flex-col-reverse sm:justify-between">
          <div className="bg-red-600 w-auto p-10">
            <h1 className="text-white">Get In Touch</h1>
            <p className="text-white font-thin text-xs">
              We would love to hear from you. Our friendly team is always here
              to talk.
            </p>
            <div className="flex mt-10">
              <MdEmail className="text-white mr-2 w-8 h-8" />
              <div>
                <h4 className="text-white font-bold text-xs">Email Us</h4>
                <p className="text-white font-thin text-xs">
                  Our team is here to help.
                </p>
                <p className="text-white font-bold text-xs">
                  abroadtickets@gmail.com
                </p>
              </div>
            </div>
            <div className="flex mt-10">
              <FaPhoneSquareAlt className="text-white mr-2 w-8 h-8" />
              <div>
                <h4 className="text-white font-bold text-xs">Cell Number</h4>
                <p className="text-white font-thin text-xs">
                  Can not reach us over the call Center
                </p>
                <p className="text-white text-xs font-bold">+880 1670-222012</p>
              </div>
            </div>
            <div className="flex mt-10">
              <IoLocationSharp className="text-white mr-2 w-8 h-8" />
              <div>
                <h4 className="text-white font-bold text-xs">Address</h4>
                <p className="text-white font-thin text-xs">
                  Come say hello at our office HQ.
                </p>
                <p className="text-white font-bold text-xs">Block: C</p>
                <p className="text-white font-bold text-xs">House No: 47</p>
                <p className="text-white font-bold text-xs">Road No: 6</p>
                <p className="text-white font-bold text-xs">
                  5th floor, Niketon,Gulshan 1
                </p>
                <p className="text-white font-bold text-xs">
                  Dhaka -1212, Bangladesh.
                </p>
              </div>
            </div>
            <div className="flex mt-10">
              <BsBank2 className="text-white mr-2 w-8 h-8" />
              <div>
                <h4 className="text-white font-bold text-xs">Payment Method</h4>
                <p className="text-white font-bold text-xs">A/C No.: 017813100000110</p>
                <p className="text-white font-bold text-xs">Bank Account Name: Abroad Tickets</p>
                <p className="text-white font-bold text-xs">Bank Name: The Premier Bank LTD</p>
                <p className="text-white font-bold text-xs">Routing number: 235261922</p>
                <p className="text-white font-bold text-xs">
                Branch: Gulshan
                </p>
      
              </div>
            </div>
          </div>
          <div className="mt-11 sm:mr-10 sm:ml-20 p-10 text-center">
            <h2 className="text-left text-red-500 text-2xl text-bold">
              Contact Us
            </h2>
            <p className="text-left">
              You can reach us anytime via{" "}
              <span className="text-red-400">abroadtickets@gmail.com</span>
            </p>
            <div>
              <Input
                className="mt-10"
                defaultValue="abc@gmail.com"
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
              <Input
                className="mt-10"
                type="text"
                label="Phone"
                defaultValue="017........"
                placeholder="Enter your phone"
              />
              <Textarea
                label="Message"
                defaultValue="write your message"
                placeholder="Enter your Message"
                className=" mt-10"
              />
            </div>
            <Button
              radius="full"
              className="mt-10 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            >
              Send
            </Button>
          </div>
        </div>
      </Card>

      <Card className="max-w-[900px] mx-auto mt-10 mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14605.153654618252!2d90.412397!3d23.7727419!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c71071531def%3A0x679ff0b229fcaa71!2sAbroad%20Inquiry!5e0!3m2!1sen!2sbd!4v1698049460950!5m2!1sen!2sbd"
          title="Abroad Inquiry Map"
          style={{
            width: "100%",
            height: "256px",
            border: 0,
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </Card>
    </div>
  );
};

export default Contact;
