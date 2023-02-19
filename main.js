//Création + connection du bot
const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const config = require("./config")

//Pour initialiser les commandes
const loadCommand = require("./Loader/loadCommands")

bot.login(config.token)
loadCommand(bot)

bot.on("messageCreate", async message => {
    if(message.content === "!ping") return bot.commands.get("ping").run(bot, message)
})

bot.on("ready", async () => {
    console.log(bot.user.tag +" est bien en ligne !")
})