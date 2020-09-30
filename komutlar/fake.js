const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async function (client, message, args) {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  let member = message.guild.member(client.users.get(args[0])) || message.guild.member(message.mentions.users.first())
  if (message.mentions.users.size < 1) return message.reply(`Fake mesaj yazdıracağın kişiyi belirtmelisin! => \`${prefix}fakemesaj @kişi mesaj\``)
  let yazi = args.slice(1).join(' ');
  if (!yazi) return message.reply(`Yazdıracağın mesajı belirtmelisin! => \`${prefix}fakemesaj @kişi mesaj\``)
  if(member.nickname && member.nickname < 2 || member.user.username < 2) return message.channel.send("Kişinin adı 2 karakterden az.").catch(console.err)
  message.delete(50)
  message.channel.createWebhook(`${member.displayName}`, member.user.avatarURL)
  .then(webhook => webhook.edit(`${member.displayName}`, member.user.avatarURL)
  .then(wb => {
    const hook = new Discord.WebhookClient(wb.id, wb.token);
    hook.send(yazi)
    hook.delete()
  })
  .catch(e => message.channel.send("Kişinin adı 2 karakterden az veya 32 karakterden fazla")))
  .catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sahtemesaj', 'fake-mesaj', 'sahte-mesaj'],
  permLevel: 0,
};

exports.help = {
  name: 'fakemesaj',
  description: 'Belirttiğiniz kullanıcının adına sahte mesaj yazarsınız',
  usage: 'fakemesaj @kişi mesaj',
  kategori: 'eğlence'
};