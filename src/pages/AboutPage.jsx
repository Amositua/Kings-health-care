import React from "react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function AboutPage() {
  const topRef = useRef(null);

  useEffect(() => {
    // Scroll to top of this specific component when it mounts
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <div ref={topRef} className="bg-lightBlue">
      <div class="container mx-auto px-5 pt-3">
        <div class="flex items-center justify-between">
        <Link className="inline-block md:w-[10%]" to="/">
          <img className="w-24" src="assets/image.png" alt="" />
        </Link>

        <div class="flex items-center justify-center md:w-[90%] md:mr-20">
          <h1 className="text-center md:text-3xl text-lg font-semibold max-w-xl">
            WELCOME TO KINGS HEALTH PRACTITIONERS LIMITED
          </h1>
        </div>
        </div>
        

        <p className="mt-4">
          Kings Health Care Practitoners Limited is a recruitment  and
          Domiciliary & Supported Living service care provider led by a highly
          experienced team of certified Medical staffs. Drawing on our diverse
          experience, expertise, compliance, management and leadership skills,
          we bring to bear the quality of care and service delivery needs at all
          times and in any part of the world 24/7. <br /> <br />
          We are passionate about our services and business, always constantly
          thriving in pursuit of excellence of service and improved systems of
          operations, which is crucial in the healthcare industry today and in
          the future thereby giving you maximum health care training and
          services.
          <br /> <br />
          We provide a range of services within the areas of NHS and Private
          Hospitals, Nursing/ Residential Homes, Mental Health Divisions, One to
          One Care within Hospitals, Care Trusts and Local Authorities. No
          matter what your situation is or type of work you require, we will
          always provide bespoke alternative solutions, either temporary or
          permanent to meet the needs and requirements of our Clients. Our
          vision is simple, Setting the standard for excellence in health care
          by unlocking a healthier tomorrow through innovative care, education
          and community engagements trusted service in the UK and all around the
          globe. 
        </p>

        <h3 className="mt-8 font-semibold text-xl md:text-3xl ml-4">
          What We Do
        </h3>
        <p className="font-semibold mt-3">
          We have a diverse selection of skilled and compliant Support workers
          and carers. We can fill roles right across the healthcare spectrum
          24/7.
        </p>

        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
            <div class="md:w-[45%] w-full">
              <h4 className="text-md text-blue-500">Experts in Care jobs</h4>

              <p className="mt-4">
                Experts in Nursing & Care jobs. Delivering excellence for
                clients and service users. Our healthcare staff are nurse-led
                and trained to the highest clinical standards for their
                professional development
              </p>
            </div>

            <div class="md:w-[50%] w-full">
              <h4 className="text-md text-blue-500">
                The Recruitment Agency of Choice
              </h4>

              <p className="mt-4">
                Whether you’re recruiting for healthcare staff, or looking for
                your new healthcare job, Kings Health Practitioner Limited is
                perfectly positioned to help you in your search. Trust us to
                find People with The Right Skills and experts in nursing & care.
              </p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
            <div class="md:w-[45%] w-full">
              <h4 className="text-md text-blue-500">
                Need A Nurse/Support worker/Carer
              </h4>

              <p className="mt-4">
                We have a diverse selection of skilled and compliant nurses and
                care givers. We can fill roles right across the healthcare
                spectrum 24/7. We offer competitive rates, flexible hours, free
                training, join us and we will  find your ideal job to suit your
                needs, in your local area
              </p>
            </div>

            <div class="md:w-[50%] w-full">
              <h4 className="text-md text-blue-500">
                The International Recruitment
              </h4>

              <p className="mt-4">
                Kings Health practitoner Limited is assisting in recruiting
                oversees nurses, care givers and health practitioners who desire
                to work in the Uk.  We also offer professional assistance to
                individuals and institutions wanting to launch their own
                successful care agency company.
              </p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
            <div class="md:w-[45%] w-full">
              <h4 className="text-md text-blue-500">
                Kings Health Care Practitioners Limited
              </h4>

              <p className="mt-4">
                <ul className="list-disc ml-6">
                  <li>
                    Provision of last minute temporary cover 24/7, 365 days a
                    year
                  </li>
                  <li>Full UK coverage</li>
                  <li>Comparative competitive rates</li>
                  <li>Rigorous vetting process</li>
                  <li>Full NHS compliance</li>
                  <li>Annual DBS checks</li>
                  <li>In-house registration system</li>
                  <li>Dedicated booking consultants</li>
                  <li>Last minute emergency cover</li>
                </ul>
              </p>
            </div>

            <div class="md:w-[50%] w-full">
              <h4 className="text-md text-blue-500">
                Recruitment screening Process{" "}
              </h4>

              <p className="mt-4">
                At Kings Health Practitioners Limited we ensure that regulatory
                requirements in areas such as candidate vetting and training are
                met as well as candidates health status will be check thoroughly
                checked . All our candidates are fully compliant and vetted
                according to all national and International Framework
                guidelines. We provide nurses and health care assistants to
                those who require healthcare professional services and care.
              </p>
            </div>
          </div>

          <div class="flex items-center justify-end mt-6 pb-4">
            <Link
              className="bg-blue-500 text-white md:p-4 p-2 rounded-md hover:bg-blue-700"
              to="/application-form"
            >
              APPLICATION FORM
            </Link>
          </div>
        </div>
      </div>

      {/* footer */}
      <section className="bg-softBlue">
        <div class="flex flex-col md:flex-row items-center justify-between px-5 pt-6 pb-6 md:space-x-10 space-y-8 md:space-y-0 md:spaxe-x-4 mt-10">
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
              <p>
              Cumber land house, 24-28 Baxter Avenue, South end- on- sea.
              England.
            </p>
            </div>
            <p>3, Nicon Crescent, Independence Layout, Enugu, Nigeria</p>
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
              <Link className="inline-block pt-2" to="/privacy-policy">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <hr className="border-t-1 border-black my-3" />
        <motion.p
          className="text-center pb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          All rights reserved ® Kings Health care practitioners limited.com |
          Terms and conditions apply!
        </motion.p>
      </section>
    </div>
  );
}

export default AboutPage;
