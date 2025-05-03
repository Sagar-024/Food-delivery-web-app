import { StatusCodes } from 'http-status-codes';
import User from '../../DB/models/User.js'
import Restaurant from '../../DB/models/Restaurant.js';
import Menu from '../../DB/models/Menu.js';
import Order from '../../DB/models/Order.js';

// Custom error class for better error handling
class DashboardError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

// Helper method to get count of users with role 'user'
const getUserCount = async () => {
  try {
    return await User.countDocuments({ role: 'user' });
  } catch (error) {
    throw new DashboardError(
      `Failed to fetch user count: ${error.message}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// Helper method to get count of restaurants
const getRestaurantCount = async () => {
  try {
    return await Restaurant.countDocuments();
  } catch (error) {
    throw new DashboardError(
      `Failed to fetch restaurant count: ${error.message}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// Helper method to get count of menus
const getMenuCount = async () => {
  try {
    return await Menu.countDocuments();
  } catch (error) {
    throw new DashboardError(
      `Failed to fetch menu count: ${error.message}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// Helper method to get count of orders
const getOrderCount = async () => {
  try {
    return await Order.countDocuments();
  } catch (error) {
    throw new DashboardError(
      `Failed to fetch order count: ${error.message}`,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

// Middleware to restrict access to admin users
const restrictToAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user?.id); // Assuming req.user is set by auth middleware
    if (!user || user.role !== 'admin') {
      throw new DashboardError(
        'Access denied: Admin role required',
        StatusCodes.FORBIDDEN
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

// Main route handler for admin dashboard
const getAdminDashboard = async (req, res, next) => {
  try {
    // Log request for monitoring
    console.log(`[${new Date().toISOString()}] Admin dashboard accessed by user ID: ${req.user?.id}`);

    // Fetch counts concurrently for performance
    const [totalUsers, totalRestaurants, totalMenus, totalOrders] = await Promise.all([
      getUserCount(),
      getRestaurantCount(),
      getMenuCount(),
      getOrderCount(),
    ]);

    // Standardized response
    res.status(StatusCodes.OK).json({
      success: true,
      data: {
        totalUsers,
        totalRestaurants,
        totalMenus,
        totalOrders,
      },
      message: 'Dashboard data retrieved successfully',
    });
  } catch (error) {
    // Log error for debugging
    console.error(`[${new Date().toISOString()}] Error in admin dashboard: ${error.message}`);
    next(error);
  }
};

// Global error handler middleware (to be added in main app)
const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({
    success: false,
    error: error.message || 'An unexpected error occurred',
  });
};

export { getAdminDashboard, restrictToAdmin, errorHandler };