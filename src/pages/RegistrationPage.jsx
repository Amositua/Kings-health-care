import { useState } from "react";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    address: "",
    idType: "",
    idFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idFile: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg w-full max-w-xl"
      >
        <div class="flex items-center justify-center space-x-3">
          <img src="assets/image.png" alt="" />
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-2">
            Registration Form
          </h2>
        </div>

        <p className="text-center lg:text-lg font-bold mb-4">
          Enter Your Registration Details
        </p>

        <div className="space-y-6">
          <div class="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold ">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <div class="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <div class="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
            />
          </div>

          <div class="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold">Gender</label>
            <select
              name="gender"
              className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

            <div class="flex flex-col space-y-2">
          <label className="block text-md lg:text-xl font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          />
          </div>

            <div class="flex flex-col space-y-2">
          <label className="block text-md lg:text-xl font-semibold">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter your country"
            className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          />
</div>
<div class="flex flex-col space-y-2">
          <label className="block text-md lg:text-xl font-semibold">State</label>
          <input
            type="text"
            name="state"
            placeholder="Enter your state"
            className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          />
</div>
<div class="flex flex-col space-y-2">
          <label className="block text-md lg:text-xl font-semibold">City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          />
</div>
<div class="flex flex-col space-y-2">
          <label className="block text-md lg:text-xl font-semibold">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Enter your address"
            className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          />
</div>
<div class="flex flex-col space-y-2">
          <label className="block text-md lg:text-xl font-semibold">ID Type</label>
          <select
            name="idType"
            className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Select ID Type</option>
            <option value="Passport">Passport</option>
            <option value="Driver's License">Driver's License</option>
          </select>
          </div>
          <div class="flex flex-col space-y-2">
          <label className="block text-md lg:text-xl font-semibold">ID File</label>
          <p className="font-semibold">Note: Only Png, jpg and pdf files are allowed. maximum file size is 5MB</p>
          <div className="border border-dashed border-gray-400 p-3 lg:p-5 rounded-md flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100">
            
          <img className="w-16" src="assets/cloud.png" alt="" />
            <label className="font-medium text-gray-700 cursor-pointer">
              Upload an image of your ID
            </label>
            <input type="file" className="hidden" onChange={handleFileChange} />
            <div className="text-gray-600 text-sm mt-2">
              Click to select a file
            </div>
          </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 lg:p-5 mt-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
