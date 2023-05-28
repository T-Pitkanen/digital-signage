export function getTimeAndDate() {
	setInterval(() => {
		const timeEl = document.querySelector('#time');
		const dateEl = document.querySelector('#date');

		let now = new Date();
		let hour = now.getHours();
		let minute = now.getMinutes();

		let days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];

		let months = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'October',
			'November',
			'December',
		];

		//Formatting the time
		hour = hour % 24;
		if (hour < 10) {
			hour = '0' + hour;
		}
		if (minute < 10) {
			minute = '0' + minute;
		}

		let dayString = days[now.getDay()];
		let monthString = months[now.getMonth()];
		let dayNro = now.getUTCDate();

		const timeString = `
    <span class="hour">${hour}</span>
    <span class="dots">:</span>
    <span class="minute">${minute}</span>
  `;

		timeEl.innerHTML = timeString;
		dateEl.innerHTML = `${dayString}, ${dayNro}. ${monthString}`;

		//1s interval for the dots
		setInterval(() => {
			const dotsEl = document.querySelector('.dots');
			dotsEl.style.visibility =
				dotsEl.style.visibility === 'hidden' ? 'visible' : 'hidden';
		}, 1000);
	}, 1000);
}
