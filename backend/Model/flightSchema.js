const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flightName: {
    type: String,
    required: true,
  },
  flightNumber: {
    type: String,
    required: true,
  },
  departureCity: {
    type: String,
    required: true,
    match: [/^[A-Za-z\s]+$/, "City name must only contain letters"],
  },
  arrivalCity: {
    type: String,
    required: true,
    match: [/^[A-Za-z\s]+$/, "City name must only contain letters"],
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureTime: {
    type: String,
    required: true,
  },
  arrivalTime: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  }
}, {
  timestamps: true,
});

const flights = mongoose.model("flights", flightSchema);

module.exports = flights;
