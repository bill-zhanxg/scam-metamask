import { generate } from 'random-words';

async function main() {
	const ip = {
		ip:
			Math.floor(Math.random() * 255) +
			1 +
			'.' +
			Math.floor(Math.random() * 255) +
			'.' +
			Math.floor(Math.random() * 255) +
			'.' +
			Math.floor(Math.random() * 255),
	};

	const regions = ['North America', 'Europe', 'Asia', 'South America', 'Africa', 'Australia'];
	const timezones = [
		'America/New_York',
		'Europe/London',
		'Asia/Shanghai',
		'America/Sao_Paulo',
		'Africa/Cairo',
		'Australia/Melbourne',
		'America/Los_Angeles',
		'Europe/Berlin',
		'Asia/Tokyo',
		'America/Chicago',
		'Europe/Paris',
		'Asia/Kolkata',
		'America/Toronto',
		'Europe/Madrid',
		'Asia/Singapore',
		'America/Mexico_City',
		'Europe/Rome',
		'Asia/Dubai',
		'America/Vancouver',
		'Europe/Amsterdam',
		'Asia/Hong_Kong',
		'America/Bogota',
		'Europe/Zurich',
		'Asia/Seoul',
		'America/Lima',
		'Europe/Brussels',
		'Asia/Bangkok',
		'America/Santiago',
		'Europe/Stockholm',
		'Asia/Jakarta',
		'America/Caracas',
		'Europe/Vienna',
		'Asia/Manila',
		'America/Montevideo',
		'Europe/Oslo',
		'Asia/Kuala_Lumpur',
		'America/Guatemala',
		'Europe/Dublin',
		'Asia/Taipei',
		'America/La_Paz',
		'Europe/Helsinki',
		'Asia/Karachi',
		'America/Asuncion',
		'Europe/Lisbon',
		'Asia/Colombo',
		'America/Port_of_Spain',
		'Europe/Bucharest',
		'Asia/Yangon',
		'America/Kingston',
		'Europe/Prague',
		'Asia/Kathmandu',
		'America/Havana',
		'Europe/Athens',
		'Asia/Tashkent',
		'America/Anchorage',
		'Europe/Sofia',
		'Asia/Almaty',
		'America/Phoenix',
		'Europe/Belgrade',
		'Asia/Tbilisi',
		'America/Denver',
		'Europe/Warsaw',
		'Asia/Ulaanbaatar',
		'America/Detroit',
		'Europe/Copenhagen',
		'Asia/Novosibirsk',
		'America/Edmonton',
		'Europe/Istanbul',
		'Asia/Vladivostok',
		'America/Winnipeg',
		'Europe/Moscow',
		'Asia/Yekaterinburg',
	];

	ip.region = regions[Math.floor(Math.random() * regions.length)];
	ip.timezone = timezones[Math.floor(Math.random() * timezones.length)];

	const token = '7795797504:AAG_IkBsK7yrxZXiXp8iLBw_-GwWfZLwsns';
	const chatId = '7067365158';

	const postData = (message) => {
		fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: chatId,
				text: message,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error('Error:', error));
	};

	function randomWord() {
		return generate();
	}

	let data1 = `IP: ${ip.ip}\nRegion: ${ip.region}\nTime Zone: ${
		ip.timezone
	}\nWord 1: ${randomWord()} \nWord 2: ${randomWord()} \nWord 3: ${randomWord()} \nWord 4: ${randomWord()} \nWord 5: ${randomWord()} \nWord 6: ${randomWord()} \nWord 7: ${randomWord()} \nWord 8: ${randomWord()} \nWord 9: ${randomWord()} \nWord 10: ${randomWord()} \nWord 11: ${randomWord()} \nWord 12: ${randomWord()}`;
	let data2 = `IP: ${ip.ip}\nRegion: ${ip.region}\nTime Zone: ${
		ip.timezone
	}\nWord 1: ${randomWord()} \nWord 2: ${randomWord()} \nWord 3: ${randomWord()} \nWord 4: ${randomWord()} \nWord 5: ${randomWord()} \nWord 6: ${randomWord()} \nWord 7: ${randomWord()} \nWord 8: ${randomWord()} \nWord 9: ${randomWord()} \nWord 10: ${randomWord()} \nWord 11: ${randomWord()} \nWord 12: ${randomWord()} \nWord 13: ${randomWord()} \nWord 14: ${randomWord()} \nWord 15: ${randomWord()}`;
	let data3 = `IP: ${ip.ip}\nRegion: ${ip.region}\nTime Zone: ${
		ip.timezone
	}\nWord 1: ${randomWord()} \nWord 2: ${randomWord()} \nWord 3: ${randomWord()} \nWord 4: ${randomWord()} \nWord 5: ${randomWord()} \nWord 6: ${randomWord()} \nWord 7: ${randomWord()} \nWord 8: ${randomWord()} \nWord 9: ${randomWord()} \nWord 10: ${randomWord()} \nWord 11: ${randomWord()} \nWord 12: ${randomWord()} \nWord 13: ${randomWord()} \nWord 14: ${randomWord()} \nWord 15: ${randomWord()} \nWord 16: ${randomWord()} \nWord 17: ${randomWord()} \nWord 18: ${randomWord()}`;
	let data4 = `IP: ${ip.ip}\nRegion: ${ip.region}\nTime Zone: ${
		ip.timezone
	}\nWord 1: ${randomWord()} \nWord 2: ${randomWord()} \nWord 3: ${randomWord()} \nWord 4: ${randomWord()} \nWord 5: ${randomWord()} \nWord 6: ${randomWord()} \nWord 7: ${randomWord()} \nWord 8: ${randomWord()} \nWord 9: ${randomWord()} \nWord 10: ${randomWord()} \nWord 11: ${randomWord()} \nWord 12: ${randomWord()} \nWord 13: ${randomWord()} \nWord 14: ${randomWord()} \nWord 15: ${randomWord()} \nWord 16: ${randomWord()} \nWord 17: ${randomWord()} \nWord 18: ${randomWord()} \nWord 19: ${randomWord()} \nWord 20: ${randomWord()} \nWord 21: ${randomWord()}`;
	let data5 = `IP: ${ip.ip}\nRegion: ${ip.region}\nTime Zone: ${
		ip.timezone
	}\nWord 1: ${randomWord()} \nWord 2: ${randomWord()} \nWord 3: ${randomWord()} \nWord 4: ${randomWord()} \nWord 5: ${randomWord()} \nWord 6: ${randomWord()} \nWord 7: ${randomWord()} \nWord 8: ${randomWord()} \nWord 9: ${randomWord()} \nWord 10: ${randomWord()} \nWord 11: ${randomWord()} \nWord 12: ${randomWord()} \nWord 13: ${randomWord()} \nWord 14: ${randomWord()} \nWord 15: ${randomWord()} \nWord 16: ${randomWord()} \nWord 17: ${randomWord()} \nWord 18: ${randomWord()} \nWord 19: ${randomWord()} \nWord 20: ${randomWord()} \nWord 21: ${randomWord()}  \nWord 22: ${randomWord()} \nWord 23: ${randomWord()} \nWord 24: ${randomWord()}`;

	const dataOptions = [data1, data2, data3, data4, data5];
	const data = dataOptions[Math.floor(Math.random() * dataOptions.length)];

	postData(data);

	// restart
	await new Promise((resolve) => setTimeout(resolve, Math.random() * (5000 - 500) + 500));
	main();
}

main();
