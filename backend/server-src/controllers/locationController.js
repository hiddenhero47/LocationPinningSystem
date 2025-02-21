const asyncHandler = require("express-async-handler");
const Location = require("../models/locationModel");

// @disc Get locations
// @route GET/api/locations
// @access Privet
const getLocations = asyncHandler(async (req, res) => {
  const locations = await Location.find();

  res.status(200).json(locations);
});

// @disc Set goals
// @route POST/api/locations/set
// @access Public
const setLocation = asyncHandler(async (req, res) => {
  const { name, email, city, state, country, positionInfo } = req.body;

  if (!name || !email || !city || !state || !country || !positionInfo) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const locationExists = await Location.findOne({ email });

  if (locationExists) {
    res.status(400);
    throw new Error("A Location with this email address exists");
  }

  const location = await Location.create({
    name,
    email,
    city,
    state,
    country,
    positionInfo,
  });

  if (location) {
    res.status(201).json({
      _id: location.id,
      name: location.name,
      email: location.email,
      city: location.city,
      state: location.state,
      country: location.country,
      positionInfo: location.positionInfo,
    });
  } else {
    res.status(400);
    throw new Error("Invalid customer data");
  }
});

// @disc Delete location
// @route DELETE/api/location/:id
// @access Privet
const deleteGoals = asyncHandler(async (req, res) => {
  const findLocationDB = await Location.findById(req.params.id);

  if (!findLocationDB) {
    res.status(400);
    throw new Error("Location not found");
  }

  await Location.deleteOne(findLocationDB);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getLocations,
  setLocation,
  deleteGoals,
};
