const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
    message.reply("I have send you a PM with a list of my commands, I hope this helps :D");
    embed = new Discord.RichEmbed()
        .setTitle("Descend's Music bot Commands")
        .setColor("#ff0000")
        .addField("?ban '@user'","Bans the mentioned user. (Admin Only).")
        .addField("?botinfo","Descend's Music bot will introduce himself to you.")
        .addField("?commands","That's how you got here.")
        .addField("?kick '@user'","Kicks the mentioned user. (Admin Only).")
        .addField("?mirror","Descend's Music bot  will try and make you feel better about yourself, he's a good friend.")
        .addField("?ping","Plays ping-pong with the bot excpet the only difference is that he then feels the need to tell you the speed of the hit afterwards. Oh well.")
        .addField("?report '@user' 'reason'","Reports the mentioned user so that the admins can decide their fate. Do not abuse this command.")
        .addField("?serverinfo","Useless information about the server that you probably don't care about. But hey. It's here if you want to know. Just in case")
        .addField("?Join" , "this makes the bot join a voicechannel.")
        .addField("?leave" ,"this makes the bot leave a channel.")
    message.author.send(embed); 
}

module.exports.help = {
    name: "commands"
}