import ServiceProvider from '../models/ServiceProvider.js';

export const getServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find();
    res.status(200).json(serviceProviders);
  } catch (error) {
    console.error('Error retrieving service providers:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getServiceProviderById = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findById(req.params.id);
    if (!serviceProvider) {
      return res.status(404).json({ message: 'Service provider not found' });
    }
    res.status(200).json(serviceProvider);
  } catch (error) {
    console.error('Error retrieving service provider:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addServiceProvider = async (req, res) => {
  const { name, description, location } = req.body;
  try {
    const newServiceProvider = new ServiceProvider({ name, description, location });
    await newServiceProvider.save();
    res.status(201).json({ message: 'Service provider added successfully', serviceProvider: newServiceProvider });
  } catch (error) {
    console.error('Error adding service provider:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateServiceProvider = async (req, res) => {
  const { name, description, location } = req.body;
  try {
    const updatedServiceProvider = await ServiceProvider.findByIdAndUpdate(
      req.params.id,
      { name, description, location },
      { new: true }
    );
    if (!updatedServiceProvider) {
      return res.status(404).json({ message: 'Service provider not found' });
    }
    res.status(200).json({ message: 'Service provider updated successfully', serviceProvider: updatedServiceProvider });
  } catch (error) {
    console.error('Error updating service provider:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteServiceProvider = async (req, res) => {
  try {
    const deletedServiceProvider = await ServiceProvider.findByIdAndDelete(req.params.id);
    if (!deletedServiceProvider) {
      return res.status(404).json({ message: 'Service provider not found' });
    }
    res.status(200).json({ message: 'Service provider deleted successfully', serviceProvider: deletedServiceProvider });
  } catch (error) {
    console.error('Error deleting service provider:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
