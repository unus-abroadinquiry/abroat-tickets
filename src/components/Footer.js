"use client"
import React from "react";
import abroasinquiry from "../../public/Assets/logo-square.webp";
import logo from "../../public/Assets/logo.png";
import { Divider } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import whatsApp from "../../public/Assets/whatsApp.png"
import facebook from "../../public/Assets/facebook.png"
import footerbg from "../../public/Assets/footer1.png"
import footerbg1 from "../../public/Assets/footer.png"
import Link from "next/link";

const Footer = () => {
  const router = useRouter()
  return (
    <>
      <Divider style={{ backgroundColor: "red", height: "5px" }} />
      <div className="bg-slate-900 footer">
         {/* <Image src={footerbg} width={100} height={550} className="absolute right-12 sm:mt-28 mt-[620px] opacity-40" />
         <Image src={footerbg1} width={250} height={550} className="absolute right-1 sm:mt-36 mt-[620px]" /> */}
      <section className=" text-white ml-8 sm:ml-16 sm:mr-16">
          <div className="flex flex-col md:flex-row justify-between gap-8 ml-1 sm:ml-36 mr-1 sm:mr-36 py-10">
            <div className="flex flex-row sm:flex sm:flex-col">
              <p>
                <Image src={logo} alt="Avatar" width={100} height={100} />
              </p>
              <p className="text-lightGray font-Monserrat mt-6 sm:mt-0 text-justify text-tiny">
                Book your trip in minute
                <br />
                get full Control for much longer.
              </p>
            </div>

            <div className="flex sm:gap-8 sm:flex-row flex-col sm:justify-between ">
              <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-4 sm:mt-4">
                  <p className=" font-[700] text-[1.3125rem] cursor-pointer font-Monserrat">Company</p>
                  <div className="flex flex-col gap-2">
                    <Link href="/about">
                    <p className="text-lightGray text-base/6 cursor-pointer text-[1.125rem] font-[300] font-Monserrat" onClick={() => router.push('/about')}>
                      About
                    </p>
                    </Link>
                    <Link href="/">
                    <p className="text-lightGray text-base/6 cursor-pointer font-Monserrat text-[1.125rem] font-[300]">
                      Book Ticket
                    </p>
                    </Link>
                    <Link href="/policy">
                    <p className="text-lightGray text-base/6 cursor-pointer font-Monserrat text-[1.125rem] font-[300]">
                      Policy
                    </p>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:mt-4">
                  <p className="font-[700] text-[1.3125rem] cursor-pointer font-Monserrat" onClick={() => router.push('/contact')}>Contact</p>
                  <div className="flex flex-col gap-2">
                    <Link href="/contact">
                    <p className="text-lightGray text-base/6 font-Monserrat text-[1.125rem] font-[300] cursor-pointer">
                     Contact Us
                    </p>
                    </Link>
                    <p className="text-lightGray text-base/6 font-Monserrat text-[1.125rem] font-[300] cursor-pointer">
                      Help/FAQ
                    </p>
                    
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <div className="flex flex-col gap-4 sm:ml-4 mt-4">
                  <p className="text-lightBlack font-[700] text-[1.3125rem] cursor-pointer font-Monserrat ">
                    More
                  </p>
                  <div className="flex flex-col gap-2">
                    <Link href="/payment">
                    <p className="text-lightGray text-base/6 font-Monserrat text-[1.125rem] font-[300] cursor-pointer">
                      Payment Methods
                    </p>
                    </Link>
                    <p className="text-lightGray text-base/6 font-Monserrat text-[1.125rem] font-[300] cursor-pointer">
                      Refund Policy
                    </p>
                    
                  </div>
                </div>
                <div className="flex flex-col gap-4 ml-8 mt-4">
                  <p className="text-lightBlack font-[700] text-[1.3125rem] cursor-pointer font-Monserrat">
                    Social Media
                  </p>
                  <div className="flex justify-center items-center mt-4" >
                    <div className="border-2 rounded-full p-1 bg-white">
                      <a href="https://api.whatsapp.com/send/?phone=%2B8801712343359&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                        <Image src={whatsApp} width={25} height={25} alt="logo" />
                      </a>
                    </div>
                    <div className="border-2 rounded-full p-1 bg-white ml-4 mr-2">
                      <a href="https://www.facebook.com/AbroadTickets" target="_blank" rel="noopener noreferrer">
                        <Image src={facebook} width={25} height={25} alt="logo" />
                      </a>
                    </div>

                  </div>
                </div>

              </div>
            </div>
            <div className="flex flex-col gap-4 items-center sm:mt-4 sm:mb-0 mb-12">
              <p className="cursor-pointer font-Monserrat font-[600]">Our Sister Concern</p>
              <a href="https://abroadinquiry.com/" target="_blank" rel="noopener noreferrer">
                <Image src={abroasinquiry} alt="Avatar" width={70} height={70} className="text-white" />
              </a>
            </div>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center">
          <Divider className="my-4 bg-slate-300 sm:w-9/12 w-full mx-auto" />
          <p className="text-white text-[0.875rem] font-[200] flex justify-center text-tiny py-5">
            Copyright © Abroad Ticket {new Date().getFullYear()}. All Rights
            Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
