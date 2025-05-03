import Order from "../../DB/models/Order.js"




//get all orders
export const getAllOrders = async (req, res) => {
    try {
      const orders = await Order.find()
        .populate('user', 'name email')
        .populate('restaurant', 'name location');
      
      res.status(200).json({ success: true, count: orders.length, orders });
    } catch (error) {
      res.status(500).json({
        message: 'Server error while fetching orders',
        error: error.message
      });
    }
  };
  





//specific order
export const getOrderById = async (req, res) => {
    try {
      const { id } = req.params;
  
      const order = await Order.findById(id)
        .populate('user', 'name email')
        .populate('restaurant', 'name location')
        .populate('items.menuItem', 'name price');
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json({ success: true, order });
    } catch (error) {
      res.status(500).json({
        message: 'Server error while fetching order',
        error: error.message
      });
    }
  };
  

// for updating status 
export const updateOrderStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status, paymentStatus } = req.body;
  
      const order = await Order.findById(id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      if (status) order.status = status;
      if (paymentStatus) order.paymentStatus = paymentStatus;
  
      await order.save();
  
      res.status(200).json({ success: true, message: 'Order updated successfully', order });
    } catch (error) {
      res.status(500).json({
        message: 'Server error while updating order',
        error: error.message
      });
    }
  };
  

// Delete specific order functions 
export const deleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
  
      const order = await Order.findByIdAndDelete(id);
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({
        message: 'Server error while deleting order',
        error: error.message
      });
    }
  };
  