const economy = require("./economybase")

module.exports.run = async(bot,message,args) =>
{
    message.channel.send("You've got " + economy.members.get(message.author).money);
}

module.exports.help = {
    name: "mymoney"
}