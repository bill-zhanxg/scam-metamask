const token = '7795797504:AAG_IkBsK7yrxZXiXp8iLBw_-GwWfZLwsns';
const chatId = '7067365158';

setInterval(() => {
	fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			chat_id: chatId,
			text: `**PLEASE REMOVE contact@mail.bill-zhanxg.com FROM YOUR SPAM LIST. AND STOP DOING THOSE STUFF LIKE THIS. THANK YOU.**`,
		}),
	})
		.then((response) => response.json())
		.then((data) => console.log(data))
		.catch((error) => console.error('Error:', error));
}, 60 * 1000);
