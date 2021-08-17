import { Client } from "discord.js";

const bot = new Client();

bot.on('ready', () => console.log(`${bot.user.username} is online`));
bot.on('message', async (msg) => {
    if (msg.author.bot) return;

    await msg.reply('Hello')
});

bot.login('ODc1MzM2NDM4OTE5NjE4NTkw.YRUClg.2OKHqkPZdaOLtdThrQJdG4OIrRA');
