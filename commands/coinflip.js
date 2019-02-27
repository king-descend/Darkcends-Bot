const Discord = require('discord.js');

module.exports.run; async(bot,message, args) =>
{
    var chance = Math.floor(Math.random() * 2);
    if(chance == 0)
    {
        message.reply("Your coin landed on Heads")
    }
    else
    {
        message.reply("Your coin landed on Tails")
    }
};

module.exports.help = {
    name: "flip"
}