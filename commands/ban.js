const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
    let bannedUser = message.guild.member(message.mentions.users.first()) || (message.guild.members.get(args[0]));
    if(!bannedUser)
    {
        message.channel.send("Sorry, I couldn't find that user.");
        return;
    }
    if(!message.member.hasPermission("BAN_MEMBERS"))
    {
        message.channel.send("You don't have the privileges to ban other users!"); 
        return;
    }
    if(bannedUser.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("That user can't be banned. Nice try."); 
        return;
    }
    let reason = args.join(" ").slice(22);
    let embed = new Discord.RichEmbed()
        .setDescription("Ban Details")
        .setColor("0xff0000")
        .addField("Banned User:", bannedUser + " with ID: " + bannedUser.id)
        .addField("Banned By:", message.author + " with ID:" + message.author.id)
        .addField("Banned in:", message.channel)
        .addField("Banned at:", message.createdAt)
        .addField("Reason for ban:", reason)
    
    message.delete(); 
    kicksAndBansChannel.send(embed); 
    message.guild.member(bannedUser).kick(reason);
}

module.exports.help = {
    name: "ban"
}