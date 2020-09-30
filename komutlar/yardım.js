const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async(client, message, args) => {

//if (!message.author.hasPermission("BAN_MEMBERS")) return message.channel.send(" :X: DAHA HAZIR DEĞİL :X:")

const embed = new Discord.RichEmbed()

.setColor("RANDOM") //RANDOM yazarsanız rastgele renk atar
.setTitle("yardım komutları")
.addField('&banner','senin için banner yaparım.')
.addField('&embed','embedli yazarım. (sadece yetkili)')
.addField('&çekiliş','fast çekiliş yaparım.')
.addField('&mute','kurallara uymazsan seni mutelerim.')
.addField('&roller','sunucudaki rolleri listeler  ( :x: bakımda :x: )')
.addField('&sil <1/100>','alirli miktarda mesajı silerim.')
.addField('&ara155','eğlence komutudur polisi ararım.')
.setDescription("bir sponsorumuz var sponsor sitesine gitmek ve botunu uptime yapmak için [TIKLA](https://uptime-rebels.glitch.me) sponsorumuz botumuzu uptime yapan kişinin sitesidir sizde gidip botlarınızı 7/24 yapabilirsiniz")
.setFooter(message.author.username, message.author.avatarURL)
//.setImage("Fotoğraf yada Gifiniz Büyük Gözüksün İstiyorsanız Buraya Linkini Koyun")
//.setThumbnail("Fotoğraf yada Gifiniz Sağ Üstte Küçük Gözüksün İstiyorsanız Buraya Linkini Koyun")

message.channel.send(embed)

}//.addField('','')

exports.conf = {
enabled: false, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'yardım',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}


