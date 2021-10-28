// to get the count and seat no. of availabile seats
// get -> /api/v1/checkAvailability
exports.checkAvailability = (req, res, next) => {
	res.status(200).json({ success: true });
};

// to book seats of train
// get -> /api/v1/book_seats
exports.bookSeats = (req, res, next) => {
	res.status(200).json({ success: true });
};

// to refresh the coach of train
// get -> /api/v1/refreshSeats
exports.refreshBookings = (req, res, next) => {
	res.status(200).json({ success: true });
};
