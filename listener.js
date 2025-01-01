import TelegramBot from 'node-telegram-bot-api';

// replace the value below with the Telegram token you receive from @BotFather
const token = '7795797504:AAG_IkBsK7yrxZXiXp8iLBw_-GwWfZLwsns';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
	console.log(msg);
});

bot.on('polling_error', (error) => {
	console.log(error.code); // => 'EFATAL'
});

bot.on('webhook_error', (error) => {
	console.log(error.code); // => 'EPARSE'
});

console.log('Bot is running...');
