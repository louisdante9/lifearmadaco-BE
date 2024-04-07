import User from '../models/User.js';

export const getClients = async (req, res) => {
  try {
    const clients = await User.find();
    res.status(200).json(clients);
  } catch (error) {
    console.error('Error retrieving clients:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await User.findById(req.params.id);
    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(client);
  } catch (error) {
    console.error('Error retrieving client:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const deleteClient = async (req, res) => {
  try {
    const deletedClient = await User.findByIdAndDelete(req.params.id);
    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json({ message: 'Client deleted successfully', client: deletedClient });
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
