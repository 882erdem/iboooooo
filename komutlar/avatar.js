const Discord = require('discord.js');

exports.run = async(message) => {
var argument = message.mentions.users.first() || message.author
const avatar = new Discord.RichEmbed()
.setTitle(`${argument.username} Avatar`)
.setURL(argument.avatarURL)
.setImage(argument.avatarURL)
.setTimestamp()
message.channel.send(avatar)
}

exports.conf = {
enabled: true,
aliases: ['avatar']
}
exports.help = {
name: "avatar"
}