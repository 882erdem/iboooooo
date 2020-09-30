const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');//Save Code
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const ibo155 = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Bu Kişi Vatan Hainidir xD!!')//Save Code
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif`)
    return message.channel.sendEmbed(ibo155);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["polisi-ara"],
  permLevel: 0
};

exports.help = {
  name: 'ara155',
  description: 'Polisi Arar Eğlence',
  usage: 'ara155'
};