import React from "react";

const Filters = ({ filters, onFilterChange, allFlights }) => {
  const uniqueAirlines = [...new Set(allFlights.map(f => f.flightName))];

  const handleCheckboxChange = (airline) => {
    const updatedAirlines = filters.selectedAirlines.includes(airline)
      ? filters.selectedAirlines.filter(a => a !== airline)
      : [...filters.selectedAirlines, airline];

    onFilterChange({ ...filters, selectedAirlines: updatedAirlines });
  };

  return (
    <div className="space-y-4">
      {/* Price Range */}
      <div>
        <label className="block text-sm font-medium mb-1"> Price Range (₹)</label>
        <input
          type="range"
          min="0"
          max="10000"
          value={filters.maxPrice}
          onChange={(e) =>
            onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) })
          }
          className="w-full"
        />
        <p className="text-sm">Up to ₹{filters.maxPrice}</p>
      </div>

      {/* Duration Range */}
      <div>
        <label className="block text-sm font-medium mb-1"> Max Duration (hrs)</label>
        <input
          type="range"
          min="0"
          max="24"
          value={filters.maxDuration}
          onChange={(e) =>
            onFilterChange({ ...filters, maxDuration: parseInt(e.target.value) })
          }
          className="w-full"
        />
        <p className="text-sm">Up to {filters.maxDuration} hrs</p>
      </div>

      {/* Airline Selection */}
      <div>
        <label className="block text-sm font-medium mb-1"> Airlines</label>
        <div className="space-y-1">
          {uniqueAirlines.map((airline, idx) => (
            <div key={idx}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.selectedAirlines.includes(airline)}
                  onChange={() => handleCheckboxChange(airline)}
                />
                {airline}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
