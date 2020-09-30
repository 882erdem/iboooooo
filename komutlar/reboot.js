const Discord = require('discord.js');
const moment = require('moment');
exports.run = (client, message, args) => {
message.channel.sendMessage(' ** <a:cark:758455292106899507> Botun Yeniden Başlatılmasını Onaylıyor Musun ? <a:cark:758455292106899507> **')
.then(() => {
  message.channel.awaitMessages(response => response.content === "evet", {
    max: 1,
    time: 30000,
    errors: ['time'],
  })
  .then((collected) => {
      message.channel.sendMessage(' <a:rebels_wumpus:758455327007571979> **Yeniden Başlıyorum** <a:rebels_wumpus:758455327007571979> ').then(message => {
      console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] :tmgec: **Bot Yeniden Başlatılıyor** `)
      process.exit(1);
    }).catch(console.error)
    })
    .catch(() => {
      message.channel.sendMessage(' <a:carpi:758676526518108290> **Yeniden Başlama İşlemini İptal Ettim** <a:carpi:758676526518108290> ');
    });
});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenile','yb'],
  permLevel: 4
};
exports.help = {
  name: 'reboot',
  description: '[YAPIMCI]',
  usage: 'reboot'
};