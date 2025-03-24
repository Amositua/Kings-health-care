import React from "react";
import { useEffect, useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ApplicationFormPage() {
  const topRef = useRef(null);
  
  useEffect(() => {
    // Scroll to top of this specific component when it mounts
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <div ref={topRef} className="bg-lightBlue">
      <div class="container mx-auto px-5 pt-3 ">
        <div class="flex justify-center items-center pb-4">
          <div className="w-1/3">
          <Link className="inline-block w-10" to="/">
        <img src="assets/image.png" alt="" />
        </Link>          </div>
          <div class="flex items-center justify-start w-2/3 mr-10 md:mr-0">
            <h1 className="text-center md:text-3xl text-xl font-semibold max-w-xl md:ml-16 ml-0">
              APPLICATION FORM
            </h1>
          </div>
        </div>

        <p>
          Our application process for Job recruitment consists of five steps:
          <br />
          <br />
          Step 1: Complete job applications online, ensuring all gaps in
          employment history are explained. To initiate the process, sign in
          using a Google email account before filling out the application form.
          <br />
          <br />
          Step 2: After submitting your application, we will review it, and if
          successful, we’ll extend an invitation for an interview. Due to the
          high volume of applications received, we are unable to provide
          individual status updates.
          <br />
          <br />
          Step 3: Participate in a competency-based interview. Video or
          telephone interviews are also available.
          <br />
          <br />
          Step 4: Upon success, we will initiate the processing of your DBS if
          not on the update service. Additionally, we’ll contact your referees.
          It’s crucial to ensure your referees respond promptly to prevent
          recruitment delays. Important documents needed:
          <br />
          <br />
          For UK Applicants
          <br />
          <br />
        </p>

        <ul className="list-disc pl-7">
          <li>Proof of National Insurance</li>
          <li>HMRC letter with your current address</li>
          <li> Utility bill (not older than 3 months)</li>
          <li>Bank statement (not older than 3 months)</li>
          <li>Driving licence (or provisional)</li>
          <li>Proof of ID (e.g., Passport from any country)</li>
          <li>UK or EU residence permit/right to work in the UK</li>
          <li> DBS</li>
        </ul>
        <br></br>
        <p>
          For students, provide a copy of your timetable, and note that during
          term time, you can only work up to 20 hours per week.
          <br />
          <br />
          Step 5: Attend three full-day training and induction sessions. Online
          training options are also available.
          <br />
          <br />
          Documents Needed for Overseas Application
          <br />
          <br />
          <ul className="list-disc pl-7 pb-10">
            <li>IELTS or ECCTIS for Degree Holders</li>
            <li>Valid Passport</li>
            <li>International Driving licence (optional)</li>
            <li>Academic Certificates</li>
            <li>Tuberclosis Test prior CoS</li>
            <li>Police Report prior CoS</li>
            <li>CV</li>
          </ul>
        </p>
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

export default ApplicationFormPage;
