const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: **Uyarı** :warning:', '`abone` **adlı komutu özel mesajlarda kullanamazsın.**')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('Bunun için gerekli iznin yok');
  let guild = message.guild
  var role = message.guild.roles.find(role => role.id === "759684425201745950");
  let user = message.mentions.members.first() 

  if (!user) return message.reply('**Kime Abone Verceğimi Yazmadın!**').catch(console.error);
user.addRole(role);
const embed = new Discord.RichEmbed()
        .setDescription(`${user} adlı kullanıcımız kanalıma abone olmuş ona ${role} rolü verim sizde abone olarak ${role} rolünü alabilirsiniz`)
        .setFooter('Abone sistemi', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
client.channels.get('759492649165258782').send({embed})
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["a"],
  permLevel: 0
};

exports.help = {
  name: 'abone',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};