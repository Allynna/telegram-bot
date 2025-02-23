const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot's token from BotFather
const token = '7692634459:AAGyhx7nj1veZsFYNVh6DSu72Rk6jDtCKco';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Define a command to start the bot
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const message = `¡Hola, ${msg.chat.first_name}! Bienvenido a tu bot de Telegram.`;
  bot.sendMessage(chatId, message);
});

// Add more commands or actions here
bot.onText(/\/help/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Aquí están los comandos disponibles:\n/start - Iniciar el bot\n/help - Ver ayuda');
});

// A fallback for any text message
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  if (msg.text !== '/start' && msg.text !== '/help') {
    bot.sendMessage(chatId, 'Gracias por tu mensaje. Estoy aquí para ayudarte.');
  }
});
