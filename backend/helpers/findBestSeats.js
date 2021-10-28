// function to get the best seats from available seats
exports.findBestSeats = (arr, seats) => {
	for (let i = 0; i < 8; i++) {
		let new_seats = seats - (7 - arr[i].length);
		j = i - 1;
		k = i + 1;

		while (new_seats) {
			if (j >= 0 && k < 7) {
				if (new_seats <= 7 - arr[j].length) {
				} else if (new_seats <= 7 - arr[k].length) {
				} else {
				}
			}
		}
	}
};
