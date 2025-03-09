import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Reference for menu container

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
  return (
    <div className="bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative top-0 container mx-auto px-6 md:py-4 py-3 w-full z-50"
      >
        <div class="flex items-center justify-between bg-softBlue my-2 px-5 pl-2 md:pl-5 md:py-3 py-1 rounded-lg bg-opacity-90 backdrop-blur-sm">
          <div class="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex items-center space-x-1 md:space-x-4">
              <img
                src="/assets/image.png"
                alt="Logo"
                className="h-[26px] md:h-full"
              />
              <p className="font-bold text-xs md:text-base text-gray-800">
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
            {isOpen ? <FiX size={20}/> : <FiMenu size={20}/>}
          </button>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute py-6 px-6 rounded-lg bg-softBlue backdrop-blur-sm bg-opacity-100 left-[1.5rem] right-[1.5rem] top-[3.8rem] md:top-[6.4rem] z-100"
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
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div class="flex flex-col lg:flex-row justify-between md:space-x-20 items-start mt-4 md:mt-20">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:space-y-8 space-y-6 max-w-4xl"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Get Ready for the Best professional Attention Ever!
            </h2>
            <p className="max-w-md text-base md:text-lg md:font-semibold">
              We Recruit only the best and qualified Medical Practitioners and
              Nurses to Take care of your Health using the best medical
              products.
            </p>
            <div class="flex justify-between items-center md:justify-start md:space-x-20 space-x-5">
              <button className="flex justify-center items-center w-[50%] md:w-40 bg-darkBlue text-gray-100 px-1  py-0 md:py-1 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300 md:px-6">
                  <p className="w-[70%] text-sm">Get in touch</p>
                  <div class="w-[20%]">
                  <img src="assets/arrow.png" alt="" className="mt-3"/>
                  </div>
                  
                
              </button>

              <div class="flex space-x-3 md:space-x-4  items-center">
                <img src="/assets/phoneIcon.png" alt="" className="h-[38px] md:h-full"/>
                <div class="items-start">
                  <p class="text-softGreen text-md mt-5 md:mt-0">Customer Care</p>
                  <p className="text-sm">07859735868 / 0786103198</p>
                </div>
              </div>
            </div>
            <div class="">
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center self-center"
          >
            <img
              src="/assets/doc-photo.png"
              alt="Doctor"
              className="h-[350px] md:h-full"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Services */}
      <section id="services" class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-center md:space-x-8  bg-lightBlue py-6 px-5 rounded-md space-y-4 md:space-y-0">
          {/* box 1 */}
          <div class="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3">
            <img
              src="assets/service-icon1.png"
              alt=""
              className="h-[60px] md:h-full"
            />
            <h3>Specialty Services</h3>
            <p className="text-center text-md md:text-base max-w-xs">
              We are constantly striving to redefine the standard of excellence
              in everything we do.
            </p>
            <a href="#service" target="_blank" rel="noopener noreferrer">
              <div class="flex">
                <p>Learn More</p>
                <img src="assets/green-arrow.png" alt="" />
              </div>
            </a>
          </div>

          {/* box 2 */}
          <div class="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3">
            <img
              src="assets/service-icon1.png"
              alt=""
              className="h-[60px] md:h-full"
            />
            <h3>Specialty Services</h3>
            <p className="text-center max-w-xs">
              We are constantly striving to redefine the standard of excellence
              in everything we do.
            </p>
            <a href="#service" target="_blank" rel="noopener noreferrer">
              <div class="flex">
                <p>Learn More</p>
                <img src="assets/green-arrow.png" alt="" />
              </div>
            </a>
          </div>

          {/* box 3 */}
          <div class="flex flex-col items-center space-y-4 bg-white py-4 px-6 rounded-md md:w-1/3">
            <img
              src="assets/service-icon1.png"
              alt=""
              className="h-[60px] md:h-full"
            />
            <h3>Specialty Services</h3>
            <p className="text-center max-w-xs">
              We are constantly striving to redefine the standard of excellence
              in everything we do.
            </p>
            <a href="#service" target="_blank" rel="noopener noreferrer">
              <div class="flex">
                <p>Learn More</p>
                <img src="assets/green-arrow.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* training */}
      <section id="training" class="container mx-auto px-6 my-24">
        <div class="flex flex-col md:flex-row items-start justify-between space-x-20 mx-12">
          <div class="max-w-xl ml-4 md:w-1/2">
            <h6 className="text-3xl md:text-4xl font-bold leading-tight">
              We’re accepting new trainees and we can’t wait to have you in our
              midst.
            </h6>
            <p className="mt-10 max-w-sm text-lg">
              We use only the best products to transform the future of
              healthcare by empowering medical excellence.
            </p>
          </div>
          <div class="w-[60%] mt-10">
            <img src="assets/training-image.png" alt="" className="w-full" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" class="container mx-auto px-6">
        <div class="flex space-x-20 bg-lightBlue py-6 px-5 rounded-md my-8 items-start">
          <div class="md:w-[35%]">
            <img src="assets/personnel.png" className="w-full" alt="" />
          </div>

          <div class="md:w-[65%]">
            <h2 className="text-4xl max-w-3xl font-bold leading-tight">
              Why choose Kings Health care practitioners for your health
              training programs.{" "}
            </h2>
            <p className="mt-4 mb-4 max-w-xl text-lg">
              We have medical professionals to offer the best teachings to our
              trainees, using the best medical products and equipments..
            </p>

            <div class="flex flex-col space-y-4">
              <div class="flex space-x-4">
                <img src="assets/shield.png" alt="" />
                <p>We offer the best learning experience.</p>
              </div>
              <div class="flex space-x-4">
                <img src="assets/shield.png" alt="" />
                <p>
                  We offer a conducive and healthy learning and working space.
                </p>
              </div>
              <div class="flex space-x-4">
                <img src="assets/shield.png" alt="" />
                <p>We certify our trainees with international certificates.</p>
              </div>
              <div class="flex space-x-4">
                <img src="assets/shield.png" alt="" />
                <p>
                  We place our certified trainees on job opportunities within
                  and outside Nigeria.
                </p>
              </div>
              <div class="flex space-x-4">
                <img src="assets/shield.png" alt="" />
                <p>
                  We place our certified trainees on job opportunities within
                  and outside Nigeria.
                </p>
              </div>
              <div class="flex space-x-4">
                <img src="assets/shield.png" alt="" />
                <p>
                  We provide emergency staffs of nurse and health care
                  assistants (HCA) for NHS and private health care
                  organisations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* training 2 */}
      <section id="training" class="container mx-auto px-6 my-24">
        <div class="flex items-start justify-between space-x-20 mx-12">
          <div class="max-w-lg ml-4">
            <h6 className="text-4xl font-bold leading-tight">
              Explore diverse career paths from Nursing, to medical research
              etc.
            </h6>
            <p className="mt-10 max-w-lg text-lg">
              We use only the best quality products in the market to achieve a
              healthy medical training session.
            </p>
            <button className="mt-12 bg-darkBlue text-gray-100 px-6 py-1 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
              <div class="flex items-center justify-center">
                <p>Lets have you on board</p>
                <img src="assets/arrow.png" alt="" className="mt-4" />
              </div>
            </button>
          </div>
          <div class="w-1/3 mt-10">
            <img src="assets/personnel2.png" alt="" className="w-full" />
          </div>
        </div>
      </section>

      {/* programme */}
      <section id="programme" class="container mx-auto px-20">
        <div class="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold">We’re recruiting new trainees</h1>
          <img src="assets/green-line.png" alt="" className="" />

          <div class="flex flex-col space-y-6 text-lg font-semibold">
            <p>
              Choose a team who cares about what you need. At Kings health care
              practitioner limited, we’re more interested in the personal
              welfare of our team mates (Trainee) and not just about the
              “pressures” that comes with learning.{" "}
            </p>

            <p>
              when ever we talk about ourselves we talk about what we can do for
              you, because that is what is important to us. Regardless, we
              understand that it is only fair if you know more about us
              especially if you are considering to partner with us. A brief
              historical detail about our health care system. Kings health care
              practitioner limited was incorporated on the 24th of November,
              2015.
            </p>
          </div>
        </div>
      </section>

      {/* programme 2*/}
      <section id="programme" class="container mx-auto px-20 mt-32">
        <div class="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold max-w-4xl text-center">
            We’re established, we’re experienced, we’re financially stable.{" "}
          </h1>
          <img src="assets/green-line.png" alt="" className="" />

          <div class="flex flex-col space-y-6 text-lg font-semibold">
            <p>
              But we know that might not be enough for you to choose us. But
              knowing that our services meet the highest standards of quality,
              ensuring exceptional results. We meticulously attend to every
              detail, guaranteeing a flawless and healthy experience.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* About us */}
      <section id="about-us" class="container mx-auto px-5 mt-20 bg-lightBlue">
        <div class="flex flex-col space-y-12 px-12 py-10">
          <div class="flex flex-col items-start space-y-2">
            <img
              src="assets/vision.png"
              className="shadow-md shadow-gray-500 rounded-lg  p-2"
              alt=""
            />
            <h3 className="text-3xl text-center font-semibold">Vision</h3>
            <img src="assets/green-line.png" alt="" className="" />
            <p className="max-w-3xl">
              Setting the standard for excellence in health care by unlocking a
              healthier tomorrow through innovative care, education and
              community engagements.
            </p>
          </div>

          <div class="flex flex-col items-start justify-center">
            <img src="assets/mission.png" alt="" />
            <h3 className="text-3xl text-center font-semibold">Mission</h3>
            <img src="assets/green-line.png" alt="" className="" />
            <p className="max-w-3xl">
              To deliver compassionate, high-quality health care with empathy,
              kindness and respect by improving the health and well-being of our
              community through accessible and affordab;le health care
              trainings.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditation */}
      <section id="programme" class="container mx-auto px-20 mt-20 mb-32">
        <div class="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl uppercase font-semibold ">
            Accreditions and Partnership
          </h1>
          <img src="assets/accreditions-line.png" alt="" className="" />

          <div class="flex flex-col space-y-6 text-lg">
            <p>
              Kings Health practitioner Limited is an international health care
              company that has its headquarter in England and Nigeria. At Kings
              Health practitioners Llimited, we understand the importance of
              accreditions that is why we ensure that we meet the specific
              standards and criteria for a quality, safety performance.
            </p>

            <p>
              Kings Health practitioner Limited is an international health care
              company that has its headquarter in England and Nigeria. At Kings
              Health practitioners Llimited, we understand the importance of
              accreditions that is why we ensure that we meet the specific
              standards and criteria for a quality, safety performance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
