import Booking from "../models/Booking.js";
import Service from "../models/Service.js";

export const createBooking = async (req, res) => {
    try {
        const { service, appointmentDate } = req.body;

        // Check whether service exists
        const serviceExists = await Service.findById(service);

        if (!serviceExists) {
            return res.status(404).json({
                success: false,
                message: "Service not found"
            });
        }

        const booking = await Booking.create({
            user: req.user._id,
            service,
            appointmentDate
        });

        res.status(201).json({
            success: true,
            booking
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get Logged In User Bookings
export const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({
            user: req.user._id
        }).populate("service", "name description price duration");

        res.json({
            success: true,
            bookings
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Bookings (Admin)
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find()
            .populate("user", "name email")
            .populate("service","description name");

        res.json({
            success: true,
            bookings
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Booking Status
export const updateBookingStatus = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);

        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }

        booking.status = req.body.status;

        const updatedBooking = await booking.save();

        res.json({
            success: true,
            booking: updatedBooking
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};