import Menu from "../../DB/models/Menu.js";
import Restaurant from "../../DB/models/Restaurant.js";

//creating the menu for the restaurants
export const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, image, restaurant, available } = req.body;

    if (!name || !price || !restaurant) {
      return res.status(400).json({ message: 'Name, price, and restaurant are required.' });
    }

    // Check if restaurant exists
    const existingRestaurant = await Restaurant.findById(restaurant);
    if (!existingRestaurant) {
      return res.status(404).json({ message: 'Restaurant not found.' });
    }

    const menuItem = await Menu.create({
      name,
      description,
      price,
      image,
      restaurant,
      available
    });

    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({
      message: 'Server error while creating menu item',
      error: error.message
    });
  }
};

// get al menu for seeing 
export const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find().populate('restaurant', 'name location');
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({
      message: 'Server error while fetching menu items',
      error: error.message
    });
  }
};

//updating the menu by the admin
export const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image, available } = req.body;

    const menuItem = await Menu.findById(id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    if (name) menuItem.name = name;
    if (description) menuItem.description = description;
    if (price) menuItem.price = price;
    if (image) menuItem.image = image;
    if (typeof available === 'boolean') menuItem.available = available;

    await menuItem.save();
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({
      message: 'Server error while updating menu item',
      error: error.message
    });
  }
};

//delete menu item 
export const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;

    const menuItem = await Menu.findById(id);
    if (!menuItem) {
      return res.status(404).json({ message: 'Menu item not found' });
    }

    await menuItem.deleteOne();
    res.status(200).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    res.status(500).json({
      message: 'Server error while deleting menu item',
      error: error.message
    });
  }
};
