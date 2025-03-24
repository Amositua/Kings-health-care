import React from "react";
import { useEffect, useRef } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CoreValuesPage() {
  const topRef = useRef(null);
  
  useEffect(() => {
    // Scroll to top of this specific component when it mounts
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, []);

  return (
    <div ref={topRef} className=" space-y-4 mt-4">
        <div class="container mx-auto px-5 md:max-w-6xl text-lg">
        <Link className="inline-block w-10 md:w-full" to="/">
        <img src="assets/image.png" alt="" />
        </Link>
        <div
        class="flex flex-col items-center justify-center space-y-2"
      >
        <h2 className="text-2xl">CORE VALUES</h2>
        <img className="w-32" src="assets/short-green-line.png" alt="" />
      </div>

      <div
        class="flex flex-col md:space-y-6 space-y-4 font-semibold mt-4"
      >
        <p>
          {" "}
          <span className="text-blue-500">Excellence:</span> We strive for
          quality, precision and continuous improvement in every aspect of our
          services.
        </p>
        <p>
          <span className="text-blue-500">Respect:</span> We value diversity,
          inclusivity and respect for all individuals, regardless of background,
          perspective, religion or race.
        </p>
        <p>
          <span className="text-blue-500">Integrity:</span> We operate with
          honesty, transparency and ethics in all our interactions and in the
          services we render our clients and trainees.
        </p>
        <p>
          <span className="text-blue-500">Customer Focus:</span> We prioritize
          our customers needs, providing exceptional services and support.{" "}
        </p>
        <p>
          <span className="text-blue-500">Team Work:</span> We collaborate,
          communicate and support each pother to achieve a common goal.
        </p>
        <p>
          <span className="text-blue-500">Accountability:</span> We take
          ownership of our actions, decisions, and outcomes, and are ready for
          our results.
        </p>
        <p>
          <span className="text-blue-500">Sustainability:</span> We prioritize
          environmental responsibility, social awareness and economic viability.
        </p>
        <p>
          <span className="text-blue-500">Adaptability:</span> We remain agile,
          responsive, and open to a good change, embracing new opportunities and
          challenges.
        </p>
        <p>
          <span className="text-blue-500">Community:</span> We engage with and
          contribute to our local communities, promoting social responsibility
          and positive impact.
        </p>
      </div>
        </div>
     

      {/* footer */}
      <section
        className="bg-softBlue"
      >
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

export default CoreValuesPage;
