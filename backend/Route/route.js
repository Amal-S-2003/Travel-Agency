const express = require("express");
const router = express.Router();
const flightController=require('../Controllers/flightController')
// Add New Flight
router.post("/add-flight", flightController.addFlight);

// Get All Flights
router.get("/get-all-flights", flightController.getAllFlights);



module.exports = router;
