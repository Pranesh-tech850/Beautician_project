import Service from "../models/Service.js";

// Create Service
export const createService = async (req, res) => {
    try {
        const { name, description, price, duration, image } = req.body;

        const service = await Service.create({
            name,
            description,
            price,
            duration,
            image
        });

        res.status(201).json({
            success: true,
            service
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Services
export const getServices = async (req, res) => {
    try {
        const services = await Service.find();

        res.json({
            success: true,
            services
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Single Service
export const getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }

        res.json({
            success: true,
            service
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Service
export const updateService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }

        service.name = req.body.name || service.name;
        service.description = req.body.description || service.description;
        service.price = req.body.price || service.price;
        service.duration = req.body.duration || service.duration;
        service.image = req.body.image || service.image;

        const updatedService = await service.save();

        res.json({
            success: true,
            service: updatedService
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Service
export const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }

        await service.deleteOne();

        res.json({
            success: true,
            message: "Service deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};