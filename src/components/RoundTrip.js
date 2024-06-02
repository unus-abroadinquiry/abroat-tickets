import React, { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Divider,
  RadioGroup,
  Radio,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { IoAirplaneSharp } from "react-icons/io5";
import airportData from "../components/Data/AirportData";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import sendEmail from "./SendEmail";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  phone: Yup.string().required("please enter your phone number"),
  journeyDate: Yup.string().required("Please enter your journey Date"),
  returnDate: Yup.string().required("Please enter your return Date"),
});

const RoundTrip = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState({
    city: "Dhaka",
    airport: "Hazrat Shahjalal International Airport",
    country: "Bangladesh",
  });
  const [open, setOpen] = useState(false);
  const [toValue, setToValue] = useState("");
  const [selectedTo, setSelectedTo] = useState({
    city: "Cox's Bazar",
    airport: "Cox's Bazar Airport",
    country: "Bangladesh",
  });
  const [openTo, setOpenTo] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [bookingClass, setBookingClass] = useState("Business");
  const [totalTravelers, setTotalTravelers] = useState({
    adult: " ",
    child: " ",
    kids: " ",
    infant: " ",
    bookingClass: "",
    total: " ",
  });

  const handleAdultCountChange = (action) => {
    if (action === "increase") {
      setAdultCount(adultCount + 1);
    } else if (action === "decrease" && adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const handleChildCountChange = (action) => {
    if (action === "increase") {
      setChildCount(childCount + 1);
    } else if (action === "decrease" && childCount > 0) {
      setChildCount(childCount - 1);
    }
  };
  const handleKidsCountChange = (action) => {
    if (action === "increase") {
      setKidsCount(kidsCount + 1);
    } else if (action === "decrease" && kidsCount > 0) {
      setKidsCount(kidsCount - 1);
    }
  };
  const handleInfantCountChange = (action) => {
    if (action === "increase") {
      setInfantCount(infantCount + 1);
    } else if (action === "decrease" && infantCount > 0) {
      setInfantCount(infantCount - 1);
    }
  };

  useEffect(() => {
    const total = adultCount + childCount + kidsCount + infantCount;
    setTotalTravelers({
      adult: adultCount,
      child: childCount,
      kids: kidsCount,
      infant: infantCount,
      bookingClass: bookingClass,
      total: total,
    });
  }, [adultCount, childCount, kidsCount, infantCount, bookingClass]);

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      journeyDate: "",
      returnDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const from = ` ${selected.airport}, ${selected.city}, ${selected.country}`;
      const to = `${selectedTo.airport}, ${selectedTo.city}, ${selectedTo.country}`;
      toast.success("Message sent! We will contact with you very soon", {
        position: "top-center",
      });

      const data = {
        email: values.email,
        phone: "+880" + values.phone,
        adultCount: totalTravelers.adult,
        childCount: totalTravelers.child,
        kidsCount: totalTravelers.kids,
        infantCount: totalTravelers.infant,
        bookingClass: totalTravelers.bookingClass,
        selected: from,
        selectedTo: to,
        journeyDate: values.journeyDate,
        returnDate: values.returnDate
      };
      sendEmail(
        "service_ecxf2df",
        "template_r3qwyga",
        data,
        {
          publicKey: "_XpnFfNY1tw9an3D_",
        },
        resetForm
      );
    },
  });

  const getCurrentDate = () => {
    const today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
  
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
  
    return `${today.getFullYear()}-${month}-${day}`;
  };
  


  return (
    <>
      <ToastContainer />
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-[340px] w-[300px] flex flex-col border border-indigo-600 p-2 rounded-md">
              <label className="font-bold ml-2 font-Monserrat">Your Email</label>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your email"
                className="rounded-none px-2 focus:border-none dark:border-none focus:outline-none dark:focus:outline-none"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 ml-2">{formik.errors.email}</div>
              )}
            </div>

            <div className="sm:w-[340px] w-[300px] mt-2 sm:mt-0  flex flex-col border border-indigo-600 p-2 rounded-md sm:ml-4">
              <label className="font-bold ml-2 font-Monserrat">Phone Number</label>
              <input
                type="number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your Phone number"
                className="rounded-none px-2 focus:border-none focus:outline-none"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 ml-2">{formik.errors.phone}</div>
              )}
            </div>

            <div className="sm:w-[340px] w-[300px] mt-2 sm:mt-0  flex flex-col border border-indigo-600 p-2 rounded-md sm:ml-4">
              <label className="font-bold ml-2 font-Monserrat">Travelers</label>
              <input
                type="text"
                onClick={onOpen}
                readOnly
                placeholder="1 travalers & className Business"
                className="rounded-none px-2 focus:border-none focus:outline-none"
                value={`${totalTravelers.total} travelers & className ${totalTravelers.bookingClass}`}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-2 sm:mt-4">
            <div className="sm:w-[340px] w-[300px] flex flex-col border border-indigo-600 p-2 rounded-md">
              <label className="font-bold ml-2 font-Monserrat">From</label>
              <Popover placement="bottom" isOpen={open} showArrow={true}>
                <PopoverTrigger>
                  <div
                    onClick={() => setOpen(!open)}
                    className={`bg-white w-full  px-2 text-sm flex items-center justify-between rounded ${
                      !selected && "text-gray-700"
                    }`}
                  >
                    <div className="flex flex-col">
                      <p className="font-bold text-cyan-700 font-Monserrat">
                        {selected.city}, {selected.country}
                      </p>
                      <p className="font-normal text-cyan-500 font-Monserrat">
                        {selected.airport}
                      </p>
                    </div>
                    <BiChevronDown
                      size={20}
                      className={`${open && "rotate-180"}`}
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="h-40 overflow-y-auto w-80 top-0">
                  <ul className="bg-white h-40 ">
                    <div className="flex  ml-2 w-[285px] items-center static top-0  bg-white ">
                      <AiOutlineSearch size={18} className="text-red-500" />
                      <input
                        type="text"
                        value={inputValue}
                        onChange={(e) =>
                          setInputValue(e.target.value.toLowerCase())
                        }
                        placeholder="Type Airport Name or City"
                        className="placeholder:text-gray-700 p-2 outline-none w-full"
                      />
                    </div>
                    <Divider className="my-1 w-[285px]" />
                    <div>
                      {airportData?.map((item) => (
                        <li
                          key={item?.id}
                          className={`p-2  w-[285px] text-sm hover:bg-slate-200 hover:text-black
                           ${
                             (item?.name?.toLowerCase() ===
                               selected.airport.toLowerCase() &&
                               "bg-slate-200 text-black") ||
                             (item?.municipality?.toLowerCase() ===
                               selected.city.toLowerCase() &&
                               "bg-slate-200 text-black")
                           }
                            ${
                              item?.name
                                ?.toLowerCase()
                                .startsWith(inputValue) ||
                              item?.municipality
                                ?.toLowerCase()
                                .startsWith(inputValue) ||
                              item?.country_name
                                ?.toLowerCase()
                                .startsWith(inputValue)
                                ? "block"
                                : "hidden"
                            }`}
                          onClick={() => {
                            if (
                              item?.name?.toLowerCase() !==
                                selected.airport.toLowerCase() &&
                              item?.municipality?.toLowerCase() !==
                                selected.city.toLowerCase()
                            ) {
                              setSelected({
                                airport: item?.name,
                                city: item?.municipality,
                                country: item?.country_name,
                              });
                              setOpen(false);
                              setInputValue("");
                            }
                          }}
                        >
                          <div className="flex items-center p-1">
                            <IoAirplaneSharp className="mr-2 text-red-500" />
                            <div className="flex flex-col">
                              <p className="text-sm font-bold text-cyan-700 font-Monserrat">
                                {" "}
                                {item?.municipality}, {item?.country_name}
                              </p>
                              <p className="text-xs font-Monserrat">{item.name}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </div>
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
            <div className="sm:w-[340px] w-[300px] mt-2 sm:mt-0  flex flex-col border border-indigo-600 p-2 rounded-md sm:ml-4">
              <label className="font-bold ml-2 font-Monserrat">To</label>
              <Popover placement="bottom" isOpen={openTo} onOpenChange={(open) => setOpenTo(open)} showArrow={true}>
                <PopoverTrigger>
                  <div
                    onClick={() => setOpen(!openTo)}
                    className={`bg-white w-full  px-2 text-sm flex items-center justify-between rounded ${
                      !selectedTo && "text-gray-700"
                    }`}
                  >
                    <div className="flex flex-col">
                      <p className="font-bold text-cyan-700 font-Monserrat">
                        {selectedTo.city}, {selectedTo.country}
                      </p>
                      <p className="font-normal text-cyan-500 font-Monserrat">
                        {selectedTo.airport}
                      </p>
                    </div>
                    <BiChevronDown
                      size={20}
                      className={`${openTo && "rotate-180"}`}
                    />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="h-40 overflow-y-auto w-80 top-0">
                  <ul className="bg-white h-40 ">
                    <div className="flex  ml-2 w-[285px] items-center static top-0  bg-white ">
                      <AiOutlineSearch size={18} className="text-red-500" />
                      <input
                        type="text"
                        value={toValue}
                        onChange={(e) =>
                          setToValue(e.target.value.toLowerCase())
                        }
                        placeholder="Type Airport Name or City"
                        className="placeholder:text-gray-700 p-2 outline-none w-full"
                      />
                    </div>
                    <Divider className="my-1 w-[285px]" />
                    <div>
                      {airportData?.map((item) => (
                        <li
                          key={item?.id}
                          className={`p-2  w-[285px] text-sm hover:bg-slate-200 hover:text-black
                           ${
                             (item?.name?.toLowerCase() ===
                               selectedTo.airport.toLowerCase() &&
                               "bg-slate-200 text-black") ||
                             (item?.municipality?.toLowerCase() ===
                               selectedTo.city.toLowerCase() &&
                               "bg-slate-200 text-black")
                           }
                            ${
                              item?.name
                                ?.toLowerCase()
                                .startsWith(toValue) ||
                              item?.municipality
                                ?.toLowerCase()
                                .startsWith(toValue) ||
                              item?.country_name
                                ?.toLowerCase()
                                .startsWith(toValue)
                                ? "block"
                                : "hidden"
                            }`}
                          onClick={() => {
                            if (
                              item?.name?.toLowerCase() !==
                                selectedTo.airport.toLowerCase() &&
                              item?.municipality?.toLowerCase() !==
                                selectedTo.city.toLowerCase()
                            ) {
                              setSelectedTo({
                                airport: item?.name,
                                city: item?.municipality,
                                country: item?.country_name,
                              });
                              setOpenTo(false);
                              setToValue("");
                            }
                          }}
                        >
                          <div className="flex items-center p-1">
                            <IoAirplaneSharp className="mr-2 text-red-500" />
                            <div className="flex flex-col">
                              <p className="text-sm font-bold text-cyan-700 font-Monserrat">
                                {" "}
                                {item?.municipality}, {item?.country_name}
                              </p>
                              <p className="text-xs font-Monserrat">{item.name}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </div>
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
            <div className="sm:w-[340px] w-[300px] mt-2 sm:mt-0  flex sm:flex-row border border-indigo-600  rounded-md sm:ml-4">
              <div className="sm:w-[165px] w-[150px]  flex flex-col p-2  ">
                <label className="font-bold ml-2 font-Monserrat">Journey Date</label>
                <input
                  type="date"
                  name="journeyDate"
                  value={formik.values.journeyDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  min={getCurrentDate()}
                  className="rounded-none px-2 focus:border-none focus:outline-none"
                />
                {formik.touched.journeyDate && formik.errors.journeyDate && (
                  <div className="text-red-500 ml-2">
                    {formik.errors.journeyDate}
                  </div>
                )}
              </div>
              <Divider
                orientation="vertical"
                className="h-full bg-indigo-600 w-0.5"
              />
              <div className="sm:w-[165px] w-[150px] flex flex-col p-2 ">
                <label className="font-bold ml-2 font-Monserrat">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formik.values.returnDate}
                  onChange={formik.handleChange}
                  min={getCurrentDate()}
                  onBlur={formik.handleBlur}
                  className="rounded-none px-2 focus:border-none focus:outline-none"
                />
                {formik.touched.returnDate && formik.errors.returnDate && (
                  <div className="text-red-500 ml-2">
                    {formik.errors.returnDate}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center mb-2">
          <Button
            type="submit"
            radius="full"
            className="w-48 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
          >
            SEND
          </Button>
        </div>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 justify-center items-center">
                  Travelers
                </ModalHeader>
                <ModalBody>
                  <div className="flex ml-4 justify-between">
                    <div>
                      <h4 className="font-bold">Adult</h4>
                      <p className="text-tiny">12 years and above</p>
                    </div>
                    <div className="flex ml-10">
                      <Button
                        onClick={() => handleAdultCountChange("decrease")}
                      >
                        -
                      </Button>
                      <p className="ml-4 mt-2">{adultCount}</p>
                      <Button
                        className="ml-4"
                        onClick={() => handleAdultCountChange("increase")}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex ml-4 justify-between">
                    <div>
                      <h4 className="font-bold">Children</h4>
                      <p className="text-tiny">5 years - Under 12 years</p>
                    </div>
                    <div className="flex ml-10">
                      <Button
                        onClick={() => handleChildCountChange("decrease")}
                      >
                        -
                      </Button>
                      <p className="ml-4 mt-2">{childCount}</p>
                      <Button
                        className="ml-4"
                        onClick={() => handleChildCountChange("increase")}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex  ml-4 justify-between">
                    <div>
                      <h4 className="font-bold">Kids</h4>
                      <p className="text-tiny">2 years - Under 5 years</p>
                    </div>
                    <div className="flex ml-10">
                      <Button onClick={() => handleKidsCountChange("decrease")}>
                        -
                      </Button>
                      <p className="ml-4 mt-2">{kidsCount}</p>
                      <Button
                        className="ml-4"
                        onClick={() => handleKidsCountChange("increase")}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex ml-4 justify-between">
                    <div>
                      <h4 className="font-bold">Infant</h4>
                      <p className="text-tiny">Below 2 years</p>
                    </div>
                    <div className="flex ml-10">
                      <Button
                        onClick={() => handleInfantCountChange("decrease")}
                      >
                        -
                      </Button>
                      <p className="ml-4 mt-2">{infantCount}</p>
                      <Button
                        className="ml-4"
                        onClick={() => handleInfantCountChange("increase")}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Divider className="my-4" />
                  <RadioGroup
                    label="Booking className"
                    orientation="horizontal"
                    className="ml-4"
                    onChange={(e) => setBookingClass(e.target.value)}
                  >
                    <Radio value="Economy">Economy</Radio>
                    <Radio value="Premium-Economy">Premium Economy</Radio>
                    <Radio value="Business">Business</Radio>
                    <Radio value="First className">First className</Radio>
                  </RadioGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    OK
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
    </>
  );
};

export default RoundTrip;
