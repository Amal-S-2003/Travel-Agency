import React from "react";

// Helper to convert ISO date to readable format
const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

function FlightCard({ flight }) {
  const {
    flightName,
    flightNumber,
    departureCity,
    arrivalCity,
    departureDate,
    arrivalDate,
    departureTime,
    arrivalTime,
    price,
  } = flight;

  // Calculate duration in hours and minutes
  const getDuration = () => {
    const [dh, dm] = departureTime.split(":").map(Number);
    const [ah, am] = arrivalTime.split(":").map(Number);

    let dep = dh * 60 + dm;
    let arr = ah * 60 + am;

    // Handle overnight flights
    if (arr < dep) arr += 24 * 60;

    const totalMins = arr - dep;
    const hrs = Math.floor(totalMins / 60);
    const mins = totalMins % 60;

    return `${hrs} H : ${mins} M`;
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center border p-4 rounded-lg shadow-md bg-white space-y-4 md:space-y-0 md:space-x-4">
      
      {/* Airline Info */}
      <div className="flex-1">
        <h2 className="font-bold text-lg text-gray-800">{flightName}</h2>
        <p className="text-sm text-gray-500">Flight No: {flightNumber}</p>
      </div>

      {/* Timing Info */}
      <div className="flex-1 text-center">
        <div className="text-lg font-semibold text-gray-900">
          {departureTime} → {arrivalTime}
        </div>
        <div className="text-sm text-gray-600">
          {departureCity.toUpperCase()} → {arrivalCity.toUpperCase()}
        </div>
        <div className="text-sm text-gray-400">
          {formatDate(departureDate)} → {formatDate(arrivalDate)}
        </div>
        <div className="text-xs text-gray-500 mt-1">🕓 {getDuration()}</div>
        <p className="text-sm text-blue-600 mt-1">Direct</p>
      </div>

      {/* Price & Action */}
      <div className="flex flex-col items-end space-y-1">
        <p className="text-xl font-bold text-green-600">₹{price}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded shadow">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default FlightCard;
