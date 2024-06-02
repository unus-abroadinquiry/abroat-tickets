"use client";
import Header from '@/components/Navbar/Header'
import React from 'react'
import { BsBank } from "react-icons/bs";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import premierBank from "../../../public/Assets/Pbank.png"
import dutchBanglaBank from "../../../public/Assets/dutchBangla.png"
import bkash from "../../../public/Assets/bkash.jpeg"
import Image from 'next/image';

const Payment = () => {
    const handlePayment = () => {
        window.open("https://shop.bkash.com/abroad-tickets01911913660/paymentlink", "_blank");
    };
    return (
        <>
            <Header />
            <div className='sm:ml-36 mt-16'>
                <h1 className='ml-8 mt-1 text-orange-600 text-2xl font-Monserrat font-bold '>Payment Methods</h1>
                <div className='mt-16'>
                    <div>
                        <div className='flex flex-row ml-8 sm:ml-[30px]'>
                            <BsBank className="text-orange-600 text-2xl" />
                            <h1 className='sm:ml-4 ml-4 text-xl font-Monserrat font-bold '>Direct Banking</h1>
                        </div>
                        <div className='flex sm:flex-row flex-col'>
                            <Card className="py-4 sm:w-[400px] m-8">
                                <CardBody className="overflow-visible flex justify-center items-center">
                                    <Image
                                        alt="Card background"
                                        className="object-cover"
                                        src={premierBank}
                                        width={270}
                                    />
                                    <h1 className='font-bold text-lg font-Monserrat text-orange-600'>The Premier Bank Limited</h1>
                                </CardBody>
                                <CardHeader className="flex flex-col items-start ml-8">
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">Bank Account Name:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">Abroad Tickets</p>
                                    </div>
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">A/C No.:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">017813100000110</p>
                                    </div>
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">Routing number:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">235261922</p>
                                    </div>
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">Branch:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">Gulshan - Tejgoan Link Road</p>
                                    </div>
                                </CardHeader>
                            </Card>

                            <Card className="py-4 sm:w-[400px] m-8">
                                <CardBody className="overflow-visible flex justify-center items-center">
                                    <Image
                                        alt="Card background"
                                        className="object-cover"
                                        src={dutchBanglaBank}
                                        width={150}
                                    />
                                    <h1 className='font-bold text-lg font-Monserrat text-orange-600'>Dutch Bangla Bank Limited</h1>
                                </CardBody>
                                <CardHeader className="flex flex-col items-start ml-8">
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">Bank Account Name:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">Abroad Tickets</p>
                                    </div>
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">A/C No.:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">2461200001471</p>
                                    </div>
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">Routing number:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">090260463</p>
                                    </div>
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">Branch:</p>
                                        <p className="text-sm font-Monserrat text-orange-600 ml-2">GULSHAN- Circle 1</p>
                                    </div>


                                </CardHeader>
                            </Card>

                        </div>

                    </div>

                    <div>
                        <div className='flex flex-row ml-8 sm:ml-[30px]'>
                            <BsBank className="text-orange-600 text-2xl" />
                            <h1 className='sm:ml-4 ml-4 text-xl font-Monserrat font-bold '>Mobile Banking</h1>
                        </div>
                        <div className='flex sm:flex-row flex-col'>
                            <Card className="py-4 sm:w-[400px] m-8">
                                <CardBody className="overflow-visible flex justify-center items-center">
                                    <Image
                                        alt="Card background"
                                        className="object-cover"
                                        src={bkash}
                                        width={200}
                                    />
                                    <div className="flex justify-center items-center mt-6">
                                        <Button color="secondary" onClick={handlePayment}>
                                            Payment link
                                        </Button>
                                    </div>
                                </CardBody>
                                <CardHeader className="flex flex-col items-start ml-4">
                                    <div className='flex '>
                                        <p className="text-sm font-Monserrat text-blue-700 font-semibold">Please write your name in the reference section.</p>
                                    </div>
                                </CardHeader>
                            </Card>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Payment