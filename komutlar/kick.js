const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()//artemus
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':x: Bu komut özel mesajlarda kullanıma kapatılmıştır.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let sebep = args.slice(1).join(' ');  //komutlara **artemus**
  let user = message.mentions.users.first();
  if (sebep.length < 1) return message.channel.send('Sunucudan atma sebebini yazmalısın.');
  if (message.mentions.users.size < 1) return message.channel.send('Kimi sunucudan atacağını yazmalısın.').catch(console.error);
  if (!message.guild.member(user).kickable) return message.channel.send('**Yetkilileri sunucudan atamam**.');
  message.guild.member(user).kick();
  return message.channel.send(`${user.username}#${user.discriminator} adlı kullanıcıyı ${sebep} nedeniyle sunucudan attın.`);
};
exports.conf = {//artemus
  enabled: true,
  guildOnly: true,
  aliases: ['kick', 'at', 'yolla'],
  permLevel: 0
};
exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};
 