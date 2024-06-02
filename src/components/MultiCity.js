import React, { useEffect, useState } from "react";
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
import sendEmail from "./SendEmail";
import AirportData from "./Data/AirportData";
import { IoAirplaneSharp } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  phone: Yup.string().required("Please enter your phone number"),
});

const MultiCity = () => {
  const [cities, setCities] = useState([
    {
      from: {
        city: "Dhaka",
        airport: "Hazrat Shahjalal International Airport",
        country: "Bangladesh",
        open: false,
      },
      to: {
        city: "Cox's Bazar",
        airport: "Cox's Bazar Airport",
        country: "Bangladesh",
        open: false,
      },
      date: "",
    },
  ]);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);
  const [bookingClass, setBookingClass] = useState("Business");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const [toValue, setToValue] = useState("");
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

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      toast.success("Message sent! We will contact with you very soon", {
        position: "top-center",
      });
      const selectedCountries = cities.map((city, index) => {
        return `${index + 1}. From: ${city.from.airport}, ${city.from.city}, ${
          city.from.country
        } To: ${city.to.airport}, ${city.to.city}, ${city.to.country}, Date: ${
          city.date
        }`;
      });

      const data = {
        email: values.email,
        phone: "+880" + values.phone,
        adultCount: totalTravelers.adult,
        childCount: totalTravelers.child,
        kidsCount: totalTravelers.kids,
        infantCount: totalTravelers.infant,
        bookingClass: totalTravelers.bookingClass,
        MultipleCitiy: selectedCountries.join(", "),
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

  const addCity = () => {
    if (cities.length >= 3) {
      toast.error("Oops! You've already added the maximum of 3 cities.", {
        position: "top-center",
      });
    } else {
      setCities((prevCities) => [
        ...prevCities,
        {
          from: {
            city: "Select a City",
            airport: "Click to choose an airport",
            country: "Or airport",
          },
          to: {
            city: "Select a City",
            airport: "Click to choose an airport",
            country: "Or airport",
          },
          date: "",
        },
      ]);
      updateFormikValues();
    }
  };

  const removeCity = (index) => {
    setCities((prevCities) => {
      const updatedCities = [...prevCities];
      updatedCities.splice(index, 1);
      return updatedCities;
    });
    updateFormikValues();
  };

  const handleCityChange = (index, field, value) => {
    setCities((prevCities) => {
      const updatedCities = [...prevCities];
      updatedCities[index][field] = value;
      return updatedCities;
    });
  };

  const handlePopoverOpenChange = (index, isOpen) => {
    setCities((prevCities) => {
      const updatedCities = [...prevCities];
      updatedCities[index].from.open = isOpen;
      if (isOpen) {
        updatedCities[index].from.open = true;
      }

      return updatedCities;
    });
  };

  const handleToPopoverOpenChange = (index, isOpen) => {
    setCities((prevCities) => {
      const updatedCities = [...prevCities];
      updatedCities[index].to.open = isOpen;
      if (isOpen) {
        updatedCities[index].to.open = true;
      }

      return updatedCities;
    });
  };

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
              <label className="font-bold ml-2 font-Monserrat">
                Your Email
              </label>
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
              <label className="font-bold ml-2 font-Monserrat">
                Phone Number
              </label>
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
                placeholder="0 travalers & className Business"
                className="rounded-none px-2 focus:border-none focus:outline-none"
                value={`${totalTravelers.total} travelers & className ${totalTravelers.bookingClass}`}
              />
            </div>
          </div>

          {cities.map((city, index) => (
            <div className="flex flex-col sm:flex-row mt-2 sm:mt-4" key={index}>
              <div className="sm:w-[340px] w-[300px] flex flex-col border border-indigo-600 p-2 rounded-md">
                <label className="font-bold ml-2 font-Monserrat">From</label>
                <Popover
                  placement="bottom"
                  isOpen={city.from.open}
                  onOpenChange={(isOpen) =>
                    handlePopoverOpenChange(index, isOpen)
                  }
                  showArrow={true}
                >
                  <PopoverTrigger>
                    <div
                      // onClick={() => setOpen(!open)}
                      className={`bg-white w-full  px-2 text-sm flex items-center justify-between rounded ${
                        !city.from && "text-gray-700"
                      }`}
                    >
                      <div className="flex flex-col">
                        <p className="font-bold text-cyan-700 font-Monserrat">
                          {city.from.city}, {city.from.country}
                        </p>
                        <p className="font-normal text-cyan-500 font-Monserrat">
                          {city.from.airport}
                        </p>
                      </div>
                      <BiChevronDown
                        size={20}
                        className={`${city.from.open && "rotate-180"}`}
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
                        {AirportData?.map((item) => (
                          <li
                            key={item?.id}
                            className={`p-2  w-[285px] text-sm hover:bg-slate-200 hover:text-black
                           ${
                             (item?.name?.toLowerCase() ===
                               city.from.airport.toLowerCase() &&
                               "bg-slate-200 text-black") ||
                             (item?.municipality?.toLowerCase() ===
                               city.from.city.toLowerCase() &&
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
                                  city.from.airport.toLowerCase() &&
                                item?.municipality?.toLowerCase() !==
                                  city.from.city.toLowerCase()
                              ) {
                                setCities((prevCities) => {
                                  const updatedCities = [...prevCities];
                                  updatedCities[index].from = {
                                    airport: item?.name,
                                    city: item?.municipality,
                                    country: item?.country_name,
                                    open: false,
                                  };
                                  return updatedCities;
                                });

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
                                <p className="text-xs font-Monserrat">
                                  {item.name}
                                </p>
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
                <Popover
                  placement="bottom"
                  isOpen={city.to.open}
                  onOpenChange={(isOpen) =>
                    handleToPopoverOpenChange(index, isOpen)
                  }
                  showArrow={true}
                >
                  <PopoverTrigger>
                    <div
                      className={`bg-white w-full  px-2 text-sm flex items-center justify-between rounded ${
                        !city.to && "text-gray-700"
                      }`}
                    >
                      <div className="flex flex-col">
                        <p className="font-bold text-cyan-700 font-Monserrat">
                          {city.to.city}, {city.to.country}
                        </p>
                        <p className="font-normal text-cyan-500 font-Monserrat">
                          {city.to.airport}
                        </p>
                      </div>
                      <BiChevronDown
                        size={20}
                        className={`${city.to.open && "rotate-180"}`}
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
                        {AirportData?.map((item) => (
                          <li
                            key={item?.id}
                            className={`p-2  w-[285px] text-sm hover:bg-slate-200 hover:text-black
                           ${
                             (item?.name?.toLowerCase() ===
                               city.to.airport.toLowerCase() &&
                               "bg-slate-200 text-black") ||
                             (item?.municipality?.toLowerCase() ===
                               city.to.city.toLowerCase() &&
                               "bg-slate-200 text-black")
                           }
                            ${
                              item?.name?.toLowerCase().startsWith(toValue) ||
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
                                  city.to.airport.toLowerCase() &&
                                item?.municipality?.toLowerCase() !==
                                  city.to.city.toLowerCase()
                              ) {
                                setCities((prevCities) => {
                                  const updatedCities = [...prevCities];
                                  updatedCities[index].to = {
                                    airport: item?.name,
                                    city: item?.municipality,
                                    country: item?.country_name,
                                    open: false,
                                  };
                                  return updatedCities;
                                });
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
                                <p className="text-xs font-Monserrat">
                                  {item.name}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </div>
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="sm:w-[340px] w-[300px] mt-2 sm:mt-0  flex flex-row border border-indigo-600  rounded-md sm:ml-4">
                <div className="sm:w-[160px] w-[150px] flex flex-col p-2  ">
                  <label className="font-bold ml-2 font-Monserrat">
                    Journey Date
                  </label>
                  <input
                    type="date"
                    value={city.date}
                    onChange={(e) =>
                      handleCityChange(index, "date", e.target.value)
                    }
                    min={getCurrentDate()}
                    className="rounded-none px-2 focus:border-none focus:outline-none"
                  />
                </div>
                <Divider
                  orientation="vertical"
                  className="h-full bg-indigo-600 w-0.5"
                />
                <div className="sm:w-[240px] w-[150px] flex flex-row p-4 ">
                  {index === cities.length - 1 ? (
                    <Button
                      color="primary"
                      // disabled={cities.length >= 3}
                      variant="ghost"
                      onClick={addCity}
                    >
                      Add Another City
                    </Button>
                  ) : (
                    <Button
                      color="danger"
                      variant="ghost"
                      onClick={() => removeCity(index)}
                    >
                      Remove City
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
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

export default MultiCity;
