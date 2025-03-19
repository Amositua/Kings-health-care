import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationPage = () => {
  const [error, setError] = useState(null);
  
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

  const [errors, setErrors] = useState({}); // State to store validation errors

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error message when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
    setErrors({ ...errors, phone: "" });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, idFile: e.target.files[0] });
    setErrors({ ...errors, idFile: "" });
  };
  const  navigate = useNavigate()

  const handleSubmit = async (e) => {
  
    e.preventDefault();
    let validationErrors = {};

   
    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        validationErrors[key] = "This field is required";
      }
    });

    // If errors exist, prevent form submission
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await axios.post("https://kings-backend-4diu.onrender.com/register", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // alert(response.data.message);
      console.log(response.data.data)
      navigate('/congratulation-one');
    } catch(error){
      if (error.response) {
        console.error(error.response.data); // Will log as an object: { error: "File too large" }
        setError(error.response.data.error); // Display the error in the UI if needed
      } else {
        console.error("An unknown error occurred.");
      }
    }
  
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg w-full max-w-xl"
      >
        <div className="flex items-start justify-between">
          <div class="w-[10%]">
            <img className="w-10 md:w-full" src="assets/image.png" alt="" />
          </div>
          <div class="flex flex-col w-[85%]">
            <h2 className="lg:text-5xl text-4xl font-bold mb-4">
              Registration Form
            </h2>
            <p className="lg:text-2xl font-bold mb-6">
              Enter Your Registration Details
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* First Name, Last Name, Email */}
          {[
            { label: "First Name", name: "firstName", type: "text" },
            { label: "Last Name", name: "lastName", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col space-y-2">
              <label className="block text-md lg:text-xl font-semibold">
                {label}
              </label>
              <input
                type={type}
                name={name}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Gender Field (Moved Up) */}
          <div className="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold">
              Gender
            </label>
            <select
              name="gender"
              className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onChange={handleChange}
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Phone Number Field (Moved Up) */}
          <div className="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold">
              Phone Number
            </label>
            <PhoneInput
              country={"gb"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{
                name: "phone",
              }}
              inputClass="!w-full !pl-12 !pr-0 !p-6 lg:!py-8 !border !border-gray-300 !rounded-md focus:!ring-2 focus:!ring-blue-400 focus:!outline-none"
              containerClass="w-full"
              buttonClass="!bg-gray-100 !border-r px-4 !border-gray-300"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* Remaining Fields (Country, State, City, Address) */}
          {[
            { label: "Country", name: "country", type: "text" },
            { label: "State", name: "state", type: "text" },
            { label: "City", name: "city", type: "text" },
            { label: "Address", name: "address", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name} className="flex flex-col space-y-2">
              <label className="block text-md lg:text-xl font-semibold">
                {label}
              </label>
              <input
                type={type}
                name={name}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full p-3 lg:p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onChange={handleChange}
              />
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              )}
            </div>
          ))}

          <div className="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold">
              ID Type
            </label>
            <select
              name="idType"
              className={`w-full p-3 lg:p-5 border border-gray-300"
              } rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none`}
              onChange={handleChange}
            >
              <option value="">Select ID Type</option>
              <option value="Passport">Passport</option>
              <option value="Driver's License">Driver's License</option>
              <option>National Identification Number(NIN)</option>
            </select>
            {errors.idType && (
              <p className="text-red-500 text-sm">{errors.idType}</p>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label className="block text-md lg:text-xl font-semibold">
              ID File
            </label>
            <p className="font-semibold">
              Note: Only PNG, JPG, and PDF files are allowed. Max file size: 5MB
            </p>
            <div
              className="border border-dashed border-gray-400 p-3 lg:p-5 rounded-md flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100"
              onClick={() => document.getElementById("fileInput").click()} // Click the hidden input
            >
              <img className="w-16" src="assets/cloud.png" alt="" />
              <label className="font-medium text-gray-700 cursor-pointer">
                Upload an image of your ID
              </label>
              <input
                id="fileInput"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, application/pdf" // Restrict file types
              />
              <div className="text-gray-600 text-sm mt-2">
                Click to select a file
              </div>
            </div>
            {formData.idFile && (
              <p className="text-gray-600 text-sm">
                Selected file: {formData.idFile.name}
              </p>
            )}
            {errors.idFile && (
              <p className="text-red-500 text-sm">{errors.idFile}</p>
            )}
          </div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

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
