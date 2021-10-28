const CoachSchema = require('../models/SeatsModel');

exports.createCoach = async (req, res, next) => {
	try {
		const coach = await CoachSchema.create(req.body);

		res.status(201).json({
			success: true,
			data: coach,
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({ success: false });
	}
};

// to get the count and seat no. of availabile seats
// get -> /api/v1/checkAvailability
exports.checkAvailability = async (req, res, next) => {
	try {
		const coaches = await CoachSchema.find();

		res.status(200).json({
			success: true,
			data: coaches,
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({ success: false });
	}
};

// to book seats of train
// get -> /api/v1/book_seats
exports.bookSeats = async (req, res, next) => {
	const coach = await CoachSchema.findById(req.params.id);

	const seats = req.body.seats;

	if (req.body.seats > coach.total_seats_available) {
		res.status(401).json({
			success: false,
			message: 'Not enough seats available!',
		});
	}

	try {
		const coach = await CoachSchema.findByIdAndUpdate(
			req.params.id,
			req.body,
			{
				new: true,
				runValidators: true,
			}
		);

		res.status(200).json({
			success: true,
			data: coach,
		});
	} catch (err) {
		console.log(err);
		res.status(401).json({ success: false });
	}
};

// to refresh the coach of train
// get -> /api/v1/refreshSeats
exports.refreshBookings = async (req, res, next) => {
	try {
		const coach = await CoachSchema.findByIdAndUpdate(
			req.params.id,
			{
				booked_seats: [],
				total_seats_available: 0,
			},
			{
				new: true,
				runValidators: true,
			}
		);
	} catch (err) {
		res.status(200).json({
			success: true,
			data: coach,
		});
	}
};
