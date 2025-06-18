import React from "react";

const SortOptions = ({ onSortChange }) => {
  return (
    <div className="space-y-2">
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select Sort Option</option>
        <option value="priceAsc"> Price: Low to High</option>
        <option value="priceDesc"> Price: High to Low</option>
        <option value="durationAsc"> Duration: Short to Long</option>
        <option value="durationDesc"> Duration: Long to Short</option>
        <option value="nameAsc"> Airline: A to Z</option>
        <option value="nameDesc"> Airline: Z to A</option>
      </select>
    </div>
  );
};

export default SortOptions;
