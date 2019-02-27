const Discord = require('discord.js');

var servers = [];

module.exports.run = async (bot, message, args) =>
{

    if (typeof(message.member.voiceChannel) !== "undefined")
    {
        if (!message.guild.voiceConnection)
        {
            /*if(!servers[message.guild.id]) // error: servers undefined
            {
                servers[message.guild.id] = {queue: []}
            }
            var servers = servers[message.guild.id]*/
            if (message.member.voiceChannel) {
            const connection = await message.member.voiceChannel.join();
            /*message.member.voiceChannel.join()
                .then(connection =>{
                    //var server = servers[message.guild.id];*/
                    message.reply("Succesfully Joined!");
                }
        }
    }
    else
    {
        message.reply("You Must be in the Right Channel to summon me!");
    }
}

module.exports.help = {
    name: "join"
}