export function getData() {
	const data = {};

	data.getInfo = {
		info: [
			{
				title: 'Welcome to Solace!',
				text: 'Our goal is to make your stay as enjoyable as possible.',
				text2:
					'If you need anything, don’t hesitate to ask our professional staff.',
				image: 'images/oswald-elsaboath-7EDZ1fxhgJQ-unsplash.jpg',
				times: '',
			},
			{
				title: 'Restaurant Savor',
				text: 'Experience a culinary journey at our award-winning restaurant.',
				text2: 'Join us for weekly specials.',
				image: 'images/takahiro-taguchi-8l_RuuZrOyY-unsplash.jpg',
				times: 'Open daily 6pm - 11pm',
			},
			{
				title: '',
				textExtra: 'Looking for a relaxing and rejuvenating experience?',
				text: 'We offer a wide range of treatments and amenities to help you unwind and feel your best.',
				text2: ' Schedule a spa visit at the front desk. ',
				image: 'images/huum-K65M3GbRYq8-unsplash.jpg',
				times: '',
			},
			{
				title: 'Harmony Lounge',
				text: 'Enjoy a refined and laid-back environment with cocktails, top-notch wines, and artisan beers.',
				image: 'images/takahiro-taguchi-8l_RuuZrOyY-unsplash.jpg',
				times: 'Open daily 5pm - 12pm',
			},
		],
	};

	const infoContainers = document.querySelectorAll('.info-container');
	let currentInfoIndex = 0;

	function showNextInfo() {
		const info = data.getInfo.info[currentInfoIndex];
		const header = document.querySelector('.header');
		const infoExtra = document.querySelector('.info-extra');

		//Fade out existing content and fade in new
		infoContainers.forEach((container) => {
			container.classList.add('fade-out');
			setTimeout(() => {
				container.innerHTML = `<img class="info-image"
                            src="${info.image}"
                            alt=""/>
                          
                           <div class="info-text-wrapper">
                           <div class="header">${info.title}</div>
                           <div class="info-extra">${info.textExtra || ''}</div>
                               <div class="info-text-p">
                                <p>${info.text}</p>
                                <p class="info-text-p2">
                                  ${info.text2 || ''}
                                </p>
                                <p class="info-times">${info.times}</p>
                               </div>
                          </div>`;
				container.classList.remove('fade-out');
				container.classList.add('fade-in');
				setTimeout(() => {
					container.classList.remove('fade-in');
				}, 500);
			}, 500);
		});

		currentInfoIndex = (currentInfoIndex + 1) % data.getInfo.info.length;
	}

	showNextInfo();
	setInterval(showNextInfo, 15000);

	// EVENTS
	const eventData = {};

	eventData.eventsData = {
		events: [
			{
				name: 'Music Night',
				date: '15/7 20:00',
				place: 'Restaurant Savor',
				src: 'images/jordan-whitfield-BhfE1IgcsA8-unsplash.jpg',
			},
			{
				name: 'Wine & Cheese Tasting',
				date: '20/6 18:00',
				place: 'Restaurant Savor',
				src: 'images/hermes-rivera-aK6WGqxyHFw-unsplash.jpg',
			},
			{
				name: 'Morning Yoga',
				date: '12/7 8:30',
				place: 'Yoga Studio',
				src: 'images/jay-castor-7AcMUSYRZpU-unsplash.jpg',
			},
			{
				name: 'Cocktail-making Class',
				date: '30/7 17:00',
				place: 'Harmony Lounge',
				src: 'images/stanislav-ivanitskiy-j5SwUbcgeyA-unsplash.jpg',
			},
		],
	};

	const eventContainer = document.querySelectorAll('.event-container');
	let currentEventIndex = 0;

	function showNextEvent() {
		const event = eventData.eventsData.events[currentEventIndex];

		eventContainer.forEach((container) => {
			container.classList.add('fade-out');
			setTimeout(() => {
				container.innerHTML = `
        <img class="event-image" src="${event.src}" alt="">
        <div class="events-container">
          <div class="events-wrapper">
            <p>${event.name}</p>
            <p>${event.date}</p>
            <p>${event.place}</p>
          </div>
        </div>
      `;
				container.classList.remove('fade-out');
				container.classList.add('fade-in');
				setTimeout(() => {
					container.classList.remove('fade-in');
				}, 500);
			}, 500);
		});

		currentEventIndex =
			(currentEventIndex + 1) % eventData.eventsData.events.length;
	}

	showNextEvent();
	setInterval(showNextEvent, 15000);
}
