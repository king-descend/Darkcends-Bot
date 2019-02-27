const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
    let kickedUser = message.guild.member(message.mentions.users.first()) || (message.guild.members.get(args[0]));
    if(!kickedUser)
    {
        message.channel.send("Sorry, I couldn't find that user."); 
        return;
    }
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("You don't have the privileges to kick other users!"); 
        return;
    }
    if(kickedUser.hasPermission("MANAGE_MESSAGES"))
    {
        message.channel.send("That user can't be kicked. Nice try."); 
        return;
    }
    let reason = "Unspecified" //= args.join(" ").slice(22);

    let embed = new Discord.RichEmbed() 
        .setDescription("Kick Details")
        .setColor("0xdd6f1a")
        .addField("Kicked User:", kickedUser + " with ID: " + kickedUser.id)
        .addField("Kicked By:", message.author + " with ID:" + message.author.id)
        .addField("Kicked in:", message.channel)
        // .addField("Kicked at:", message.createdAt)
        .addField("Reason for kick:", reason)
    
    message.delete(); 
    // message.guild.channels.first().send(embed);
    message.guild.member(kickedUser).kick(reason); 
    message.channel.send("Succesfully kicked!"); 
}

module.exports.help = {
    name: "kick"
}