

import Restaurant from "../../DB/models/Restaurant";






// Create a new restaurant
const createRestaurant = async (req, res) => {
  try {
    const { name, description, location, cuisine, image, owner } = req.body;

    if (!name || !description || !location || !cuisine || !image || !owner) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const restaurant = await Restaurant.create({ name, description, location, cuisine, image, owner });

    res.status(201).json({ message: 'Restaurant created successfully', restaurant });
  } catch (error) {
    res.status(500).json({ message: 'Server error while creating restaurant', error: error.message }); 
  }
};

// Get all restaurants 
const getAllRestaurants = async (req, res) => {
  try {
    const query = {};

    if (req.query.name) query.name = new RegExp(req.query.name, 'i');
    if (req.query.location) query.location = new RegExp(req.query.location, 'i');
    if (req.query.cuisine) query.cuisine = req.query.cuisine;

   
    const restaurants = await Restaurant.find(query).populate('owner', 'name email');

    res.status(200).json({ restaurants });
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching restaurants', error: error.message });
  }
};

// Update a restaurant
const updateRestaurant = async (req, res) => {
  try {
    const { id } = req.params;

    const updated = await Restaurant.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updated) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json({ message: 'Restaurant updated', restaurant: updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error while updating restaurant', error: error.message });
  }
};

// Delete a restaurant
const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Restaurant.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.status(200).json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while deleting restaurant', error: error.message });
  }
};

module.exports = {
  createRestaurant,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant
};
