const Discord = require('discord.js');

var servers = [];

module.exports.run = async(bot, message, args) =>
{
    if(message.guild.voiceConnection)
    {
        const connection = await message.member.voiceChannel.leave();
    }
    else
    {
        message.reply("I must be in a Voice Channel to leave!")
    }
}

module.exports.help = {
    name: "leave"
}