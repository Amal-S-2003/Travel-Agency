import { commonAPI } from "./common_api";
import { server_url } from "./server_url";

// Add New Flight
export const addFlightAPI = async (reqBody) => {
  return await commonAPI("POST", `${server_url}/add-flight`, reqBody, "");
};


// Get All Flight Details
export const getAllFlights = async () => {
  return await commonAPI("GET", `${server_url}/get-all-flights`, "", "");
};