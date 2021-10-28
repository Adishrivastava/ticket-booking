const express = require('express');
const router = express.Router();
const {
	check_availability,
	refresh_bookings,
	book_seats,
} = require('../constants');
const {
	checkAvailability,
	refreshBookings,
	bookSeats,
} = require('../controllers/seatsController');

router.route(check_availability).get(checkAvailability);
router.route(refresh_bookings).put(refreshBookings);
router.route(book_seats).put(bookSeats);

module.exports = router;
