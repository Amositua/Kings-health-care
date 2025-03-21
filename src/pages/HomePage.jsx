import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Disable scroll restoration behavior
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to the top
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted!");
    }
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      {/* <!-- Progress scroll totop --> */}
      <div class="progress-wrap cursor-pointer">
        <svg
          class="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
      <motion.nav
      id="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative top-0 container mx-auto px-4 md:py-4 py-3 w-full z-50"
      >
        <div class="flex items-center justify-between bg-softBlue my-2 px-5 pl-2 md:pl-5 md:py-3 py-3 rounded-lg bg-opacity-90 backdrop-blur-sm">
          <div class="flex items-center space-x-12">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-1 md:space-x-4">
              <img
                src="/assets/image.png"
                alt="Logo"
                className="h-[26px] md:h-full"
              />
              <p className="font-bold text-sm md:text-base text-gray-800">
                Kings Health Care Practitioner Limited
              </p>
            </a>

            {/* Desktop menu */}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:flex "
            >
              <a href="#navbar" class="ml-10 hover:text-softGreen">
                Home
              </a>
              <a href="#about-us" class="ml-10 hover:text-softGreen">
                About Us
              </a>
              <a href="#services" class=" ml-10 hover:text-softGreen">
                Services
              </a>
              <a href="#contact-us" class="ml-10 hover:text-softGreen">
                Contact
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex">
            <Link to="/registration">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-darkBlue text-gray-100 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
              >
                Apply Now
              </motion.button>
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-3xl text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute py-6 px-6 rounded-lg bg-softBlue backdrop-blur-sm bg-opacity-100 left-[1.5rem] right-[1.5rem] top-[4.8rem] md:top-[6.4rem] z-100"
          >
            <div class="flex flex-col items-center justify-center w-full md:space-y-6 space-y-4 font-semibold rounded-sm">
              <a
                href="#navbar"
                class="w-full text-center text-sm  hover:text-softGreen"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </a>
              <a
                href="#about-us"
                class="w-full text-center text-sm hover:text-softGreen"
                onClick={() => setIsOpen(!isOpen)}
              >
                About Us
              </a>
              <a
                href="#services"
                class="w-full text-center text-sm hover:text-softGreen"
                onClick={() => setIsOpen(!isOpen)}
              >
                Services
              </a>
              <a
                href="#contact-us"
                class="w-full text-center text-sm hover:text-softGreen"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </a>
              <div className="bg-gray-400 h-[0.5px] w-full"></div>
              <button
                class="md:w-1/2 w-[100px] text-sm py-1 md:py-3 border-t border-gray-400 text-center rounded-full bg-darkBlue text-gray-100 hover:bg-blue-700 hover:text-white transition duration-300 "
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link to='/registration'>
                Apply Now
                </Link>
              </button>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero-section */}
      <motion.section
        id="hero"
        className="container mx-auto px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }} // Triggers when 20% of the section is in view
      >
        <div className="flex flex-col lg:flex-row justify-between md:space-x-20 items-start mt-2 md:mt-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col lg:w-[60%] w-full md:space-y-8 space-y-6 max-w-4xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Get Ready for the Best Professional Attention Ever!
            </h2>
            <img
              src="assets/green-line1.png"
              alt=""
              className="md:w-[30rem] w-[15rem] md:self-center "
            />
            <p className="max-w-md text-base md:text-lg md:font-semibold">
              We Recruit only the best and qualified Medical Practitioners and
              Nurses to Take care of your Health using the best medical
              products.
            </p>
            <div className="flex justify-between items-center md:justify-start md:space-x-20 space-x-5">
              <button className="flex justify-center items-center w-[65%] md:w-40 bg-darkBlue text-gray-100 px-1 py-1 md:py-1 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 md:px-6">
                <a href="#contact-us" className="w-[90%] ">
                  Get in touch
                </a>
                <div className="w-[23%]">
                  <img src="assets/small-arrow-2.png" alt="" className="mt-3 w-[500px]" />
                </div>
              </button>

              <div className="flex space-x-3 md:space-x-4 items-center">
                <img
                  src="/assets/phoneIcon.png"
                  alt=""
                  className="h-[45px] md:h-full"
                />
                <div className="items-start">
                  <p className="text-softGreen text-base mt-5 md:mt-0">
                    Customer Care
                  </p>
                  <p className="">
                    <a href="tel:07859735868" className="hover:underline">
                      07859735868
                    </a>{" "}
                    /
                    <a href="tel:0786103198" className="hover:underline">
                      0786103198
                    </a>{" "}
                    /
                    <a href="tel:08166438809" className="hover:underline">
                      08166438809
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="assets/health-icon.png"
                alt=""
                className="h-[130px] md:h-full"
              />
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className="md:w-[40%] w-full flex justify-center self-center relative"
          >
            <img
              src="assets/green-circle.png"
              className="absolute w-[19rem] md:w-0 sm:w-0 xl:w-0 top-0 left-12 lg:-left-[2.8rem] 2xl:w-[35rem] "
              alt=""
            />
            <img
              src="assets/blue-circle.png"
              className="absolute md:w-0 sm:w-0 xl:w-0 2xl:w-[30rem] w-[15rem] top-8 left-[4.7rem] lg:left-0 lg:top-10 lg:right-[4.35rem]"
              alt=""
            />
            <img
              src="/assets/doc-photo.png"
              alt="Doctor"
              className="h-[350px] z-10 md:h-full"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services */}
      <section id="services" class="container mx-auto px-6 overflow-hidden">
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  class="flex flex-col md:flex-row items-center justify-center md:space-x-8  bg-lightBlue py-6 px-5 rounded-md space-y-4 md:space-y-0 overflow-hidden"
>
          {/* box 1 */}
          <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 , duration: 0.6 }}
      viewport={{ once: true }}
      class="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3"
    >
       <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="assets/service-icon1.png"
            alt='services'
            className="h-[60px] md:h-full"
          />
            <h3 className="text-lg font-semibold">Specialty Services</h3>
            <p className="text-center text-md md:text-base max-w-xs">
              We are constantly striving to redefine the standard of excellence
              in everything we do.
            </p>
            <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        href="#vision"
        // target="_blank"
        rel="noopener noreferrer"
        className="text-softGreen hover:underline"
      >  
                  <div class="flex">
                <p>Learn More</p>
                <img src="assets/green-arrow.png" alt="" />
              </div>
            </motion.a>
          </motion.div>

          {/* box 2 */}
          <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 , duration: 0.6 }}
      viewport={{ once: true }}
      class="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3"
    >
             <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="assets/service-icon2.png"
            alt='services'
            className="h-[60px] md:h-full"
          />
            <h3 className="text-lg font-semibold">Accountable</h3>
            <p className="text-center max-w-xs">
            We are Responsible, answerable and transparent in all our dealings with staffs, trainees and patients
            </p>
            <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        href="#vision"
        // target="_blank"
        rel="noopener noreferrer"
        className="text-softGreen hover:underline"
      >  
              <div class="flex">
                <p>Learn More</p>
                <img src="assets/green-arrow.png" alt="" />
              </div>
            </motion.a>
          </motion.div>

          {/* box 3 */}
          <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 , duration: 0.6 }}
      viewport={{ once: true }}
      class="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3"
    >
            <motion.img
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            src="assets/service-icon3.png"
            alt='services'
            className="h-[60px] md:h-full"
          />
            <h3 className="text-lg font-semibold">Reel</h3>
            <p className="text-center max-w-xs">
            We are authentic and geniune. we also have staffs to meet one on one in our different branch offices.
            </p>
            <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        href="#vision"
        // target="_blank"
        rel="noopener noreferrer"
        className="text-softGreen hover:underline"
      >
              <div class="flex">
                <p>Learn More</p>
                <img src="assets/green-arrow.png" alt="" />
              </div>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>


      {/* training */}
      <section id="training" className="container mx-auto px-6 md:my-24 my-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-start items-center justify-between md:space-x-20 md:mx-12 overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:max-w-xl max-w-4xl md:ml-4 md:w-[70%] w-full"
          >
            <h6 className="text-2xl md:text-4xl font-bold leading-tight">
              We’re accepting new trainees and we can’t wait to have you in our
              midst.
            </h6>
            <p className="md:mt-10 mt-4 max-w-sm md:text-lg">
              We use only the best products to transform the future of
              healthcare by empowering medical excellence.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative md:w-[30%] self-start"
          >
            <img src="assets/green-gradient.png" alt="" className="w-[19rem] h-full"/>
            <img src="assets/training-image.png" alt="" className="w-[17rem] absolute left-8 top-8" />
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about-us" className="container mx-auto px-6 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:space-y-0 space-y-6 md:space-x-20 bg-lightBlue py-6 px-5 rounded-md md:my-8 my-0 items-start"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-[35%]"
          >
            <img src="assets/personnel.png" className="w-full" alt="" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-[65%]"
          >
            <h2 className="md:text-4xl text-2xl max-w-3xl font-bold leading-tight">
              Why choose Kings Health care practitioners 
              <img className="md:block hidden 2xl:ml-[15rem]" src="assets/longer-green-line.png" alt=""/> for your health
              training programs.
            </h2>
            <p className="mt-4 mb-4 max-w-xl md:text-lg">
              We have medical professionals to offer the best teachings to our
              trainees, using the best medical products and equipment.
            </p>

            <div className="flex flex-col space-y-4">
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex space-x-4"
                >
                  <img
                    src="assets/shield.png"
                    alt=""
                    className="h-[25px] w-[20px]"
                  />
                  <p>
                    {[
                      "We offer the best learning experience.",
                      "We offer a conducive and healthy learning and working space.",
                      "We certify our trainees with international certificates.",
                      "We place our certified trainees on job opportunities within and outside Nigeria.",
                      "We provide emergency staff of nurses and healthcare assistants (HCA) for NHS and private healthcare organizations.",
                    ][index] || "Additional Benefit"}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* training 2 */}
      <section id="activity" className="container mx-auto px-6 md:my-24 my-10 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-20 md:mx-12">
          {/* Text Content */}
          <motion.div
            className="md:w-[70%] max-w-lg md:ml-4 space-y-4 md:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h6 className="text-2xl md:text-4xl font-bold leading-tight">
              Explore diverse career paths from Nursing to Medical research etc.
            </h6>
            <p className="mt-10 max-w-lg md:text-lg">
              We use only the best quality products in the market to ensure a
              healthy and effective medical training session.
            </p>

            {/* Call-to-Action Button */}
            <motion.button
              className="md:mt-12 bg-darkBlue text-gray-100 md:px-6 pl-2 md:py-1 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to='/registration'>
              <div className="flex items-center justify-center">
                <p>Let's have you on board</p>
                <img src="assets/arrow.png" alt="Arrow" className="mt-4" />
              </div>
              </Link>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative md:w-[30%] md:mt-0 mt-10 "
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="assets/green-gradient.png" alt="" className=" h-full"/>
            <img src="assets/personnel2.png" alt="" className=" absolute left-10 top-8 w-[90%]" />
          </motion.div>
        </div>
      </section>

      {/* programme */}
      <section id="programme" className="container mx-auto md:px-20 px-5">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Heading Animation */}
          <motion.h1
            className="text-2xl md:text-4xl font-bold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We’re recruiting new trainees
          </motion.h1>

          {/* Image Animation */}
          <motion.img
            src="assets/green-line.png"
            alt=""
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Text Animation */}
          <motion.div
            className="flex flex-col space-y-6 md:text-lg md:font-semibold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Choose a team who cares about what you need. At Kings health care
              practitioner limited, we’re more interested in the personal
              welfare of our team mates (Trainee) and not just about the
              “pressures” that come with learning.
            </p>

            <p>
              Whenever we talk about ourselves, we talk about what we can do for
              you, because that is what is important to us. Regardless, we
              understand that it is only fair if you know more about us,
              especially if you are considering partnering with us. A brief
              historical detail about our health care system: Kings Health Care
              Practitioner Limited was incorporated on the 24th of November,
              2015.
            </p>
          </motion.div>
        </div>
      </section>

      {/* programme 2*/}
      <section
        id="learning"
        className="container mx-auto md:px-20 px-5 mt-10 md:mt-32"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Heading Animation */}
          <motion.h1
            className="text-2xl md:text-4xl font-bold max-w-4xl text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We’re established, we’re experienced, we’re financially stable.
          </motion.h1>

          {/* Image Animation */}
          <motion.img
            src="assets/green-line.png"
            alt=""
            className=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {/* Text Animation */}
          <motion.div
            className="flex flex-col space-y-6 md:text-lg md:font-semibold"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              But we know that might not be enough for you to choose us. But
              knowing that our services meet the highest standards of quality,
              ensuring exceptional results. We meticulously attend to every
              detail, guaranteeing a flawless and healthy experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About us */}
      <section
        id="vision"
        className="container mx-auto px-5 mt-10 md:mt-20 bg-lightBlue"
      >
        <div className="flex flex-col space-y-12 md:px-12 py-10">
          {/* Vision Section */}
          <motion.div
            className="flex flex-col items-start space-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
              src="assets/vision.png"
              className="shadow-md shadow-gray-500 rounded-lg p-2 h-[65px]"
              alt="Vision Icon"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <h3 className="text-2xl md:text-3xl text-center font-semibold">
              Vision
            </h3>
            <img src="assets/green-line.png" alt="" className="" />
            <p className="max-w-3xl">
              Setting the standard for excellence in health care by unlocking a
              healthier tomorrow through innovative care, education, and
              community engagements.
            </p>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="flex flex-col items-start justify-center space-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="assets/mission.png"
              className="h-[75px]"
              alt="Mission Icon"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <h3 className="text-2xl md:text-3xl text-center font-semibold">
              Mission
            </h3>
            <img src="assets/green-line.png" alt="" className="" />
            <p className="max-w-3xl">
              To deliver compassionate, high-quality health care with empathy,
              kindness, and respect by improving the health and well-being of
              our community through accessible and affordable health care
              trainings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accreditation */}
      <section
        id="accreditation"
        className="container mx-auto px-5 md:px-20 mt-10 md:mt-20 mb-10"
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Heading */}
          <motion.h1
            className="text-2xl md:text-4xl uppercase font-semibold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Accreditations and Partnerships
          </motion.h1>

          {/* Decorative Line */}
          <motion.img
            src="assets/accreditions-line.png"
            alt="Accreditation Line"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />

          {/* Content */}
          <motion.div
            className="flex flex-col space-y-6 md:text-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p>
            Kings Health practitioner Limited is an international health care company that has its headquarter in England and Nigeria. At Kings Health practitioners Llimited, we understand the importance of accreditions that is why we ensure that we meet the specific standards and criteria for a quality, safety performance.
            </p>

            <p>
              Through strategic partnerships and accreditation, we continue to
              elevate healthcare training and delivery, ensuring that our
              services adhere to the highest international standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <motion.section
        id="contact-us"
        className="container mx-auto px-5 md:max-w-6xl md:my-16 my-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div class="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <div class="md:w-1/2 w-full bg-softBlue md:rounded-l-md md:rounded-r-none rounded-md p-6">
            <h2 class="text-2xl md:text-4xl font-bold">Get in touch</h2>
            <img src="assets/green-line.png" alt="" className="" />
            {/* form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-4 bg-softBlue placeholder:text-black placeholder:opacity-40 py-1 mt-8 border-b-2 border-black border-opacity-20 focus:outline-none"
                ></input>
              </div>

              {/* Email Input */}
              <div>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 bg-softBlue placeholder:text-black mt-5 border-b-2 border-black border-opacity-20 placeholder:opacity-40 focus:outline-none"
                />
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full px-4 py-2  bg-softBlue placeholder:text-black mt-5 border-b-2 focus:outline-none border-black border-opacity-20 placeholder:opacity-40 overflow-y-hidden"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-[20%] bg-blue-600 text-white md:py-2 py-1 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>{" "}
          </div>
          <div class="md:w-1/2 w-full h-[455px]">
            <iframe
              title="Google Maps Location"
              className="w-full h-full rounded-r-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.322866731237!2d0.7047512763204434!3d51.54397840803093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8d9b28430521f%3A0x679f3bbaf6c8173d!2sCumberland%20House%2C%2024-28%20Baxter%20Ave%2C%20Southend-on-Sea%20SS2%206HZ%2C%20UK!5e0!3m2!1sen!2sng!4v1741890240261!5m2!1sen!2sng"
              frameborder="0"
              // class="google-maps"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* footer */}
      <motion.section
        id="footer"
        className="bg-softBlue"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div class="flex flex-col md:flex-row items-center justify-between px-5 pt-6 pb-14 space-x-0 space-y-8 md:space-y-0 md:spaxe-x-4">
          {/* col 1 */}
          <div class="flex flex-col space-y-4 md:space-y-6 self-start">
            <div class="flex flex-col">
              <h3 className="font-semibold text-lg">Be in the Know</h3>
              <p className="max-w-xl">
                Get an opportunity to work overseas and in different African
                countries by training and earning a certificate with us at Kings
                Health Care Practitioners Limited
              </p>
            </div>

            <div class="flex items-center space-x-2">
              <img src="assets/image.png" alt="" className="h-[40px]" />
              <h2 className="font-semibold text-lg">
                Kings Health Care Practitioner Limited
              </h2>
            </div>
          </div>

          {/* col 2 */}
          <div class="flex flex-col space-y-3 self-start">
            <div class="">
            <h3 className="font-semibold text-lg">Services</h3>
            <p>Trainings</p>
            </div>
            <p>Job recruitment</p>
            <p>Hire emergency staffs and Health care assistance</p>
          </div>

          {/* col 3 */}
          <div class="flex flex-col self-start space-y-2">
            <div class="flex flex-col">
              <h3 className="font-semibold text-lg">Help</h3>
                <a href="mailto:Admin@kingshealthcarepractitioner.com">
                  Admin@kingshealthcarepractitioner.com
                </a>
                </div>
                <a href="mailto:Kingshealthcarepractitioner001@gmail.com">
                  Kingshealthcarepractitioner001@gmail.com
                </a>
              
            
          </div>

          {/* col 4 */}
          <div class="flex flex-col space-y-2 self-start">
            <div class="flex flex-col">
              <h3 className="font-semibold text-lg">Address</h3>
              <p>3, Nicon Crescent, Independence Layout, Enugu, Nigeria</p>
            </div>
            <p>
              Cumber land house, 24-28 Baxter Avenue, South end- on- sea.
              England.
            </p>
            <div class="flex flex-col space-y-2">
            <h2 className="mt-2">Follow us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl hover:text-blue-900" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl hover:text-blue-900" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:text-blue-900" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl hover:text-blue-900" />
                </a>
              </div>
              </div>
          </div>
        </div>
        <hr className="border-t-1 border-black my-3" />
        <motion.p
          className="text-center pb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          All rights reserved ® Kings Health care practitioners limited.com |
          Terms and conditions apply!
        </motion.p>
      </motion.section>
    </div>
  );
}

export default HomePage;

// save for refernce
// gpt service section
// {/* Services */}
/* <section id="services" className="container mx-auto px-6">
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  class="flex flex-col md:flex-row items-center justify-center md:space-x-8  bg-lightBlue py-6 px-5 rounded-md space-y-4 md:space-y-0"
>
  {[
    {
      title: "Specialty Services",
      description:
        "We are constantly striving to redefine the standard of excellence in everything we do with passion dedication.",
      image: "assets/service-icon1.png",
    },
    {
      title: "Accountable",
      description:
        "We are Responsible, answerable and transparent in all our dealings with staffs, trainees and patients",
      image: "assets/service-icon2.png",
    },
    {
      title: "Real",
      description:
        "We are authentic and geniune. we also have staffs to meet one on one in our different branch offices.",
      image: "assets/service-icon3.png",
    },
  ].map((services, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, duration: 0.6 }}
      viewport={{ once: true }}
      class="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3"
    >
     
      <h3 className="text-2xl font-semibold">{services.title}</h3>
      <p className="text-center text-md md:text-base max-w-xs">
        {services.description}
      </p>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        viewport={{ once: true }}
        href="#vision"
        // target="_blank"
        rel="noopener noreferrer"
        className="text-softGreen hover:underline"
      >
        <div className="flex">
          <p>Learn More</p>
          <img src="assets/green-arrow.png" alt="" />
        </div>
      </motion.a>
    </motion.div>
  ))}
</motion.div>
</section> */