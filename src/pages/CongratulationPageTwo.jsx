import React from 'react'

const CongratulationPageTwo = () => {
  return (
      <div className="">
        <div class="container mx-auto px-5 max-w-xl bg-lightBlue min-h-screen">
          <img className="pt-2" src="assets/image.png" alt="" />
          <div class="flex flex-col items-center justify-center space-y-4 mt-4">
            <div class="flex items-center justify-center space-x-10">
              <img
                className="md:w-[50%] w-[70%] mb-10"
                src="assets/congratulation-image.png"
                alt=""
              />
              <img className="w-16 self-end" src="assets/fansy.png" alt="" />
            </div>
  
            <div class="flex flex-col space-y-6 max-w-xl">
              <h2 className="md:text-4xl  text-xl text-center font-bold">
                CONGRATULATIONS
              </h2>
              <p className="text-justify max-w-lg">
              You have successfully made complete payment for Kings Health Care Practitioner Training Program. Kindly Click on the link below to be redirected to the Student learning portal.
              </p>

              <div class="flex items-center justify-center">
              <button className="mt-4 bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600">
                <div class="flex justify-between space-x-2 md:space-x-0">
                  <p>STUDENT PORTAL LINK</p>
                  {/* <img className="md:w-6 w-5" src="assets/arrow.png" alt=""/> */}
                </div>
              </button>
              </div>
  
              <img className="w-16" src="assets/fansy.png" alt="" />
            </div>
          </div>
          <div class="flex justify-end">
            <img className="w-12 mr-10" src="assets/arrow-line.png" alt="" />
            {/* <img className="w-12" src="assets/arrow-line-2.png" alt=""/> */}
          </div>
        </div>
      </div>
    );
}

export default CongratulationPageTwo