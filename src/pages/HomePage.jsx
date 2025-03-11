import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
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
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative top-0 container mx-auto px-3 md:py-4 py-3 w-full z-50"
      >
        <div class="flex items-center justify-between bg-softBlue my-2 px-5 pl-2 md:pl-5 md:py-3 py-3 rounded-lg bg-opacity-90 backdrop-blur-sm">
          <div class="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex items-center space-x-1 md:space-x-4">
              <img
                src="/assets/image.png"
                alt="Logo"
                className="h-[26px] md:h-full"
              />
              <p className="font-bold text-sm md:text-base text-gray-800">
                Kings Health Care Practitioner Limited
              </p>
            </div>

            {/* Desktop menu */}

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hidden lg:flex font-medium"
            >
              <a href="#home" class="ml-10 hover:text-softGreen">
                Home
              </a>
              <a href="#services" class="ml-10 hover:text-softGreen">
                About Us
              </a>
              <a href="#about" class=" ml-10 hover:text-softGreen">
                Services
              </a>
              <a href="#contact" class="ml-10 hover:text-softGreen">
                Contact
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:flex">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-darkBlue text-gray-100 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300"
            >
              Apply Now
            </motion.button>
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
                href="#home"
                class="w-full text-center text-sm  hover:text-softGreen"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </a>
              <a
                href="#about"
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
                href="#services"
                class="w-full text-center text-sm hover:text-softGreen"
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact
              </a>
              <div className="bg-gray-400 h-[0.5px] w-full"></div>
              <a
                href="#sign-in"
                class="md:w-1/2 w-[100px] text-sm py-1 md:py-3 border-t border-gray-400 text-center rounded-full bg-darkBlue text-gray-100 hover:bg-blue-700 hover:text-white transition duration-300 "
                onClick={() => setIsOpen(!isOpen)}
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero-section */}
      <motion.section
        id="hero"
        className="container mx-auto px-6"
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
            <img src="assets/green-line1.png" alt="" className="md:w-[30rem] w-[15rem] md:self-center "/>
            <p className="max-w-md text-base md:text-lg md:font-semibold">
              We Recruit only the best and qualified Medical Practitioners and
              Nurses to Take care of your Health using the best medical
              products.
            </p>
            <div className="flex justify-between items-center md:justify-start md:space-x-20 space-x-5">
              <button className="flex justify-center items-center w-[55%] md:w-40 bg-darkBlue text-gray-100 px-1 py-1 md:py-1 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 md:px-6">
                <p className="w-[90%] ">Get in touch</p>
                <div className="w-[20%]">
                  <img src="assets/arrow.png" alt="" className="mt-3" />
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
                  <p className="">07859735868 / 0786103198</p>
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
            {/* <img src="assets/green-circle.png" className="absolute w-[35rem] right-12 top-0" alt=""/>
            <img src="assets/blue-circle.png" className="absolute w-[55rem] " alt=""/> */}
            <img
              src="/assets/doc-photo.png"
              alt="Doctor"
              className="h-[350px] z-10 md:h-full"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services */}
      <section id="services" className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center md:space-x-8 bg-lightBlue py-6 px-5 rounded-md space-y-4 md:space-y-0"
        >
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3"
            >
              <motion.img
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                src="assets/service-icon1.png"
                alt=""
                className="h-[60px] md:h-full"
              />
              <h3>Specialty Services</h3>
              <p className="text-center text-md md:text-base max-w-xs">
                We are constantly striving to redefine the standard of
                excellence in everything we do.
              </p>
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                href="#service"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex">
                  <p>Learn More</p>
                  <img src="assets/green-arrow.png" alt="" />
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* training */}
      <section id="training" className="container mx-auto px-6 md:my-24 my-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-start items-center justify-between md:space-x-20 md:mx-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:max-w-xl max-w-4xl md:ml-4 md:w-1/2 w-full"
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
            className="mt-10"
          >
            <img src="assets/training-image.png" alt="" className="w-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="container mx-auto px-6">
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
              Why choose Kings Health care practitioners for your health
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
      <section id="activity" className="container mx-auto px-6 md:my-24 my-10">
        <div className="flex flex-col md:flex-row items-start justify-between md:space-x-20 md:mx-12">
          {/* Text Content */}
          <motion.div
            className="md:w-2/3 max-w-lg md:ml-4 space-y-4 md:space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h6 className="text-2xl md:text-4xl font-bold leading-tight">
              Explore diverse career paths from Nursing to Medical Research.
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
              <div className="flex items-center justify-center">
                <p>Let's have you on board</p>
                <img src="assets/arrow.png" alt="Arrow" className="mt-4" />
              </div>
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="lg:w-1/3 md:w-1/2 mt-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="assets/personnel2.png"
              alt="Medical Personnel"
              className="w-full"
            />
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
        id="about-us"
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
            className="flex flex-col items-start justify-center"
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
              Kings Health Practitioner Limited is an international health care
              company with headquarters in England and Nigeria. At Kings Health
              Practitioners Limited, we understand the importance of
              accreditations, which is why we ensure that we meet the specific
              standards and criteria for quality and safety performance.
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
      <section
        id="contact-us"
        class="container mx-auto md:max-w-7xl px-5 md:my-20 my-0"
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
                <input required
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
                <textarea required
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
                className="w-[30%] bg-blue-600 text-white md:py-2 py-1 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>{" "}
          </div>
          <div class="md:w-1/2 w-full h-[455px]">
            <iframe
              title="Google Maps Location"
              className="w-full h-full rounded-r-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.6420448839117!2d-4.1436297242233655!3d50.373228792921985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486c934b791dff07%3A0xbc2cdbd5c3284625!2s27%20Mayflower%20St%2C%20Plymouth%20PL1%201QJ%2C%20UK!5e0!3m2!1sen!2sng!4v1713532543743!5m2!1sen!2sng"
              frameborder="0"
              class="google-maps"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* footer */}
      <section id="footer" class="container mx-auto px-5">

      </section>
    </div>
  );
}

export default HomePage;
