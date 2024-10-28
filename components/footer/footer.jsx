import { Button, Input, Textarea, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../constants/scrollToTop";
import logo from "../../public/images/logo.png";
import emailjs from "emailjs-com";
const Footer = () => {
  const toast = useToast();
  const [btnLoader, setBtnLoader] = useState(false);

  const showToast = () => {
    toast({
      title: "Message Sent",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const errorToast = (res, status) => {
    toast({
      title: res,
      status: status,
      duration: 2000,
      isClosable: true,
      position: "top",
      containerStyle: {
        zIndex: 9999,
      },
    });
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    const errors = validateForm(formData);

    if (errors === false) {
      setBtnLoader(true);
      axios
        .post("https://homyz-server.vercel.app/contact", formData)
        .then((response) => {
          showToast();
          setFormData({
            firstName: "",
            lastName: "",
            phoneNo: "",
            email: "",
            message: "",
          });
          setBtnLoader(false);
        })
        .catch((error) => {
          setBtnLoader(false);
          errorToast(error.message, "error");
          console.error("Error submitting form:", error);
        });
    }
  };

  const onSubmit = async () => {
    setBtnLoader(true);

    try {
      const response = await emailjs.send(
        "service_7y68v5w",
        "template_qdgg4sk",
        {
          firstName: formData?.firstName,
          to_name: "Reosemanor",
          lastName: formData?.lastName,
          email: formData?.email,
          phone: formData?.phoneNo,
          message: formData?.message,
          reply_to: "Reosemanor",
          subject: "Careers",
        },
        "nj0Q-d8XDd1R5XVgh"
      );

      if (response.status) {
        showToast();
        setBtnLoader(false);
        setFormData({
          firstName: "",
          lastName: "",
          phoneNo: "",
          email: "",
          message: "",
        });
      } else {
        setBtnLoader(false);

        console.log("Error", data);
      }
    } catch (error) {
      setBtnLoader(false);

      console.error("Error submitting form:", error);
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = (data) => {
    let _error;
    if (
      data.firstName &&
      data.firstName.trim() &&
      data.lastName &&
      data.lastName.trim() &&
      data.email &&
      data.email.trim() &&
      isValidEmail(data.email.trim()) &&
      data.phoneNo &&
      data.phoneNo.trim() &&
      data.message &&
      data.message.trim()
    ) {
      _error = false;
    } else {
      if (
        !data.firstName &&
        !data.firstName.trim() &&
        !data.lastName &&
        !data.lastName.trim() &&
        !data.email &&
        !data.email.trim() &&
        !isValidEmail(data.email.trim()) &&
        !data.phoneNo &&
        !data.phoneNo.trim() &&
        !data.message &&
        !data.message.trim()
      ) {
        errorToast("Fill the fields first!", "error");
      } else if (!data.firstName || !data.firstName.trim()) {
        errorToast("Enter the firstName!", "error");
      } else if (!data.lastName || !data.lastName.trim()) {
        errorToast("Enter the lastName!", "error");
      } else if (!data.email || !data.email.trim()) {
        errorToast("Enter the email!", "error");
      } else if (!isValidEmail(data.email.trim())) {
        errorToast("Enter the valid  email!", "error");
      } else if (!data.phoneNo || !data.phoneNo.trim()) {
        errorToast("Enter the phone no!", "error");
      } else if (!data.message || !data.message.trim()) {
        errorToast("Enter the message!", "error");
      }
    }
    return _error;
  };

  // You can add more validations based on your requirements

  return (
    <div className="bg-black">
      <footer
        style={{ maxWidth: 1200 }}
        className="mx-auto flex justify-between gap-20 max-lg:flex-col py-20 px-8 max-sm:px-5  "
      >
        <div className="flex flex-col items-start h-auto justify-between gap-16 w-2/4 max-lg:w-full pr-10 max-sm:pr-0">
          <div className="flex flex-col text-lg items-start  justify-between gap-10 ">
            <a href="/">
              <img src={logo} className="w-50 h-40" alt="rosemanor-logo" />
            </a>
            <p style={{ color: "#696969" }}>
              At Rosemanor, we prioritize your mental well-being by providing a
              safe and tranquil space. Our compassionate team is dedicated to
              offering personalized care, ensuring you feel supported and
              understood every step of the way.
              <br />
              General Enquiries<br></br>
              0207 787 9694 <br />
              Monday-Friday 9am-5pm <br />
              info@rosemanorhomes.uk{" "}
            </p>
            <div className="flex text-xl justify-start items-center gap-10 text-red-500">
              <Link target="_blank" to={"https://facebook.com"}>
                <FaFacebookF />
              </Link>
              <Link target="_blank" to={"https://instagram.com"}>
                <FaInstagram />
              </Link>
              <Link target="_blank" to={"https://twitter.com"}>
                <FaTwitter />
              </Link>
            </div>
            <ul className="text-white text-lg flex justify-start items-center flex-wrap gap-x-8 gap-y-4">
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/services"
              >
                Services
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/about"
              >
                About Us
              </Link>
              <Link
                onClick={scrollToTop}
                className="hover:text-red-500 transition-all"
                to="/contact"
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <p style={{ color: "#696969" }}>
            © Rosemanor. All Rights Reserved 2024. <br />
            Rosenmanor is a Limited Company registered in England & wales under
            company number 04433986 and whose registered office is 97 Babington
            Road, Streatham, London, England, SW16 6AN
          </p>
        </div>

        <div
          id="contact"
          className="w-2/4 max-lg:w-full flex flex-col h-auto justify-between items-start gap-10 "
        >
          <h1 className="text-3xl text-white">
            {" "}
            Placement Enquiries for Women (Ages 18+)
          </h1>

          <div className="name w-full gap-8 text-white max-sm:flex-col max-sm:gap-10 mt-3 flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="First Name"
              name="firstName"
              maxLength={20}
              value={formData.firstName}
              onChange={handleChange}
              autoComplete="off"
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="Last Name"
              name="lastName"
              maxLength={20}
              value={formData.lastName}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="contact w-full text-white gap-8 max-sm:flex-col max-sm:gap-10  flex">
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              placeholder="Email Address"
              name="email"
              maxLength={40}
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            <Input
              pl={3}
              fontSize={19}
              variant={"flushed"}
              borderColor={"#696969"}
              focusBorderColor="white"
              _placeholder={{ color: "#696969" }}
              type="number"
              placeholder="Phone No"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              autoComplete="off"
              max={15}
              maxLength={15}
            />
          </div>
          <Textarea
            pl={3}
            fontSize={19}
            variant={"flushed"}
            borderColor={"#696969"}
            focusBorderColor="white"
            _placeholder={{ color: "#696969" }}
            placeholder="Message"
            maxLength={200}
            className="w-full text-white"
            name="message"
            value={formData.message}
            onChange={handleChange}
            autoComplete="off"
          />
          <Button
            _hover={{ backgroundColor: "white", color: "#d5515e" }}
            backgroundColor={"#d5515e"}
            color={"white"}
            borderColor={"#d5515e"}
            variant={"outline"}
            size={"lg"}
            isLoading={btnLoader}
            loadingText={"Sending.."}
            onClick={onSubmit}
            className="mt-4  max-lg:w-72 max-sm:w-full"
            transitionDuration={"300ms"}
            fontWeight={"normal"}
            fontSize={"20px"}
            borderRadius={"4px"}
          >
            Submit
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
