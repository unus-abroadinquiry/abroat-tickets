import Image from "next/image";
import React from "react";
import notfound from "../../public/Assets/notfound.webp";
import { Button } from "@nextui-org/react";
import { RiArrowGoBackFill } from "react-icons/ri";
import Header from "@/components/Navbar/Header";

const NotFound = () => {
    
  return (
    <>
    <Header />
    <div className="flex flex-col items-center justify-center h-screen">
      <Image src={notfound} width={550} height={550} alt="not found" />
    </div>
    </>
  );
};

export default NotFound;
