const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
    let embed = new Discord.RichEmbed() 
        .setDescription("Server Information")
        .setColor("0xff0000")
        .setThumbnail(message.guild.iconURL)
        .addField("The best server ever in Music ^^:", message.guild.name)
        .addField("Was created on:", message.guild.createdAt)
        .addField("You joined us on:", message.member.joinedAt)
        .addField("Our member count is currently at:", message.guild.memberCount)
    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo"
}