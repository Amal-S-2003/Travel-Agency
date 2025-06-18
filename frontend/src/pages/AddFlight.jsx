import React, { useContext, useState } from "react";
import { addFlightAPI } from "../services/all_API";
import { FlightContext } from "../contextAPI/FlightContext";

const AddFlight = () => {
  const [formData, setFormData] = useState({
    flightName: "",
    flightNumber: "",
    departureCity: "",
    arrivalCity: "",
    departureDate: "",
    arrivalDate: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
  });
const {fetchFlights}=useContext(FlightContext)
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent numbers in city fields
    if (
      (name === "departureCity" || name === "arrivalCity") &&
      /\d/.test(value)
    ) {
      return;
    }

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const requiredFields = Object.keys(formData);

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    if (/\d/.test(formData.departureCity)) {
      newErrors.departureCity = "City name cannot contain numbers";
    }
    if (/\d/.test(formData.arrivalCity)) {
      newErrors.arrivalCity = "City name cannot contain numbers";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await addFlightAPI(formData);
        alert(" Flight successfully added!");
        fetchFlights();
        setFormData({
          flightName: "",
          flightNumber: "",
          departureCity: "",
          arrivalCity: "",
          departureDate: "",
          arrivalDate: "",
          departureTime: "",
          arrivalTime: "",
          price: "",
        });
        setErrors({});
      } catch (error) {
        alert(" Failed to add flight. Try again.");
      }
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-teal-700">
        Add New Flight
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Flight Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flight Name / Airline
          </label>
          <input
            type="text"
            name="flightName"
            value={formData.flightName}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.flightName && (
            <p className="text-red-500 text-sm">{errors.flightName}</p>
          )}
        </div>

        {/* Flight Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Flight Number
          </label>
          <input
            type="text"
            name="flightNumber"
            value={formData.flightNumber}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.flightNumber && (
            <p className="text-red-500 text-sm">{errors.flightNumber}</p>
          )}
        </div>

        {/* Departure City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Departure City
          </label>
          <input
            type="text"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.departureCity && (
            <p className="text-red-500 text-sm">{errors.departureCity}</p>
          )}
        </div>

        {/* Arrival City */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Arrival City
          </label>
          <input
            type="text"
            name="arrivalCity"
            value={formData.arrivalCity}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.arrivalCity && (
            <p className="text-red-500 text-sm">{errors.arrivalCity}</p>
          )}
        </div>

        {/* Departure Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Departure Date
          </label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            min={today}
          />
          {errors.departureDate && (
            <p className="text-red-500 text-sm">{errors.departureDate}</p>
          )}
        </div>

        {/* Arrival Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Arrival Date
          </label>
          <input
            type="date"
            name="arrivalDate"
            value={formData.arrivalDate}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            min={formData.departureDate || today}
          />
          {errors.arrivalDate && (
            <p className="text-red-500 text-sm">{errors.arrivalDate}</p>
          )}
        </div>

        {/* Departure Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Departure Time
          </label>
          <input
            type="time"
            name="departureTime"
            value={formData.departureTime}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.departureTime && (
            <p className="text-red-500 text-sm">{errors.departureTime}</p>
          )}
        </div>

        {/* Arrival Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Arrival Time
          </label>
          <input
            type="time"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.arrivalTime && (
            <p className="text-red-500 text-sm">{errors.arrivalTime}</p>
          )}
        </div>

        {/* Price */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition duration-200"
          >
            Add Flight
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFlight;
