import { createContext, useEffect, useState } from "react";
import { getAllFlights } from "../services/all_API";

export const FlightContext = createContext();

export const FlightContextProvider = ({ children }) => {
  const [allFlights, setAllFlights] = useState([]);
  const [flight, setFlight] = useState({});

  const fetchFlights = async () => {
    try {
      const result = await getAllFlights();
      console.log(result.data)
      if (result?.data) {
        setAllFlights(result.data);
      } else {
        console.error("No flight data received");
      }
    } catch (error) {
      console.error("Failed to fetch flights:", error);
    }
  };
  useEffect(() => {

    fetchFlights();
    
  }, []);

  return (
    <FlightContext.Provider value={{ allFlights, setAllFlights, flight, setFlight,fetchFlights }}>
      {children}
    </FlightContext.Provider>
  );
};
