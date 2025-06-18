import React, { useContext, useState, useEffect } from "react";
import { FlightContext } from "../contextAPI/FlightContext";
import FlightCard from "./FlightCard";
import SortOptions from "./SortOptions";
import Filters from "./Filters";

function FlightList() {
  const { allFlights } = useContext(FlightContext);
  console.log("allFlights", allFlights);

  const [filteredFlights, setFilteredFlights] = useState(allFlights);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 10000,
    minDuration: 0,
    maxDuration: 10,
    selectedAirlines: [],
  });
  const [sortOption, setSortOption] = useState("");

  const getDurationInHours = (start, end) => {
    const [sh, sm] = start.split(":").map(Number);
    const [eh, em] = end.split(":").map(Number);
    let startMins = sh * 60 + sm;
    let endMins = eh * 60 + em;
    if (endMins < startMins) endMins += 24 * 60;
    return (endMins - startMins) / 60;
  };

  const applySorting = (data) => {
    const sorted = [...data];
    switch (sortOption) {
      case "priceAsc":
        return sorted.sort((a, b) => a.price - b.price);
      case "priceDesc":
        return sorted.sort((a, b) => b.price - a.price);
      case "durationAsc":
        return sorted.sort(
          (a, b) =>
            getDurationInHours(a.departureTime, a.arrivalTime) -
            getDurationInHours(b.departureTime, b.arrivalTime)
        );
      case "durationDesc":
        return sorted.sort(
          (a, b) =>
            getDurationInHours(b.departureTime, b.arrivalTime) -
            getDurationInHours(a.departureTime, a.arrivalTime)
        );
      case "nameAsc":
        return sorted.sort((a, b) => a.flightName.localeCompare(b.flightName));
      case "nameDesc":
        return sorted.sort((a, b) => b.flightName.localeCompare(a.flightName));
      default:
        return data;
    }
  };

  useEffect(() => {
    const filtered = allFlights?.filter((flight) => {
      const priceValid =
        flight.price >= filters.minPrice && flight.price <= filters.maxPrice;
      const duration = getDurationInHours(
        flight.departureTime,
        flight.arrivalTime
      );
      const durationValid =
        duration >= filters.minDuration && duration <= filters.maxDuration;
      const airlineValid =
        filters.selectedAirlines.length === 0 ||
        filters.selectedAirlines.includes(flight.flightName);
      return priceValid && durationValid && airlineValid;
    });
    setFilteredFlights(applySorting(filtered || []));
  }, [filters, allFlights, sortOption]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2"> Sort By</h2>
            <SortOptions onSortChange={setSortOption} />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2"> Filters</h2>
            <Filters
              filters={filters}
              onFilterChange={setFilters}
              allFlights={allFlights}
            />
          </div>
        </div>

        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
             Flight Lists
          </h1>

          {filteredFlights?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {filteredFlights?.map((flight, index) => (
                <FlightCard key={index} flight={flight} />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center mt-10 text-lg">
              No matching flights found 
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlightList;
