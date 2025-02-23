const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(7692634459:AAGyhx7nj1veZsFYNVh6DSu72Rk6jDtCKco, { polling: true });

// Basic command example
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello! I am your Telegram bot.');
});

// Respond to any text message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `You said: ${msg.text}`);
});
