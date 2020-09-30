const Discord = require('discord.js');
const moment = require('moment');
const ms = require('ms')
exports.run = async (client, message) => {
var time = moment().format('Do MMMM YYYY , hh:mm');
var room;
var title;
var duration;
var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
var filter = m => m.author.id === message.author.id;

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR
///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

      message.channel.send(`:eight_pointed_black_star:| **Çekilişin yapılacağı kanalın adını yaz**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **Böyle bir kanal bulamadım**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **Çekilişin süresini belirle (1s, 1m, 1h, 1d, 1w)**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send(':heavy_multiplication_x:| **Böyle bir süre bilmiyorum :(**');
            duration = collected.first().content
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **Şimdi de ödülü yaz.**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setColor("#f558c9")
                  .setDescription(`**Ödül: ${title}** \n🎉'a Basarak Katıl \nKalan Süre : ${duration} \n **Başlama Zamanı :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username + " (ibo çekiliş)", message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **ÇEKİLİŞ BAŞLADI** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .setColor("#f558c9")
            .setFooter("(ibo çekiliş)")
                       .addField('Çekiliş Bitti !',`Kazanan : ${gFilter} \nBitiş zamanı :`)
                       .setTimestamp()
                     m.edit('** 🎉 ÇEKİLİŞ BİTTİ 🎉**' , {embed: endEmbed});

                       var embedLel = new Discord.RichEmbed()
                        .setColor("#f558c9")
                        .setDescription("Ödülünü Moderatörleri Etiketleyerek Alabilirsin!").setFooter("(ibrahim winner)")
                    message.guild.channels.find("name" , room).send(`**Tebrikler ${gFilter}! \`${title}\` kazandın!**` , embedLel)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **Maalesef gerekli yetkilerim bulunmamakta**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR
///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR
///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'çekiliş',
  description: 'Çekiliş mi? Sunucunda güzel şeyler olacak :3',
  usage: 'çekiliş'
};

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR
///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR

///////////////////// BU KOD GALAXY CODE BRİZZ AİTTİR