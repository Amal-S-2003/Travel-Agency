const flights = require("../Model/flightSchema");
exports.getAllFlights = async (req, res) => {
  try {
    const result = await flights.find();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.addFlight = async (req, res) => {
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
  } = req.body;

  try {
    const newFlight = new flights({
      flightName,
      flightNumber,
      departureCity,
      arrivalCity,
      departureDate,
      arrivalDate,
      departureTime,
      arrivalTime,
      price,
    });

    await newFlight.save();
    res.status(200).json("Flight added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json("Failed to add flight");
  }
};
