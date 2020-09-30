const Discord = require('discord.js')
exports.run = (client, message, args) => {
    try {
        const embed = new Discord.RichEmbed()
            .addField(`Sunucuda, bulunmakta olan roller;`, message.guild.roles.filter(r => r.name !== "@everyone").map(r => r).join(' , '))
      .setFooter('İbrahim, Rol Liste', client.user.avatarURL)
            .setColor(0x808080)
            .setTimestamp()
        message.channel.send({embed})
    } catch (err) {
        const embed = new Discord.RichEmbed()
            .addField(`Sunucuda, bulunmakta olan roller;`, 'Çok fazla rol bulunmakta veya rol bulunmamakta!')
            .setColor(0x00ffff)
            .setTimestamp()
        message.channel.send({embed})
    }
}//NzU5NzQ0ODMyNTkwOTcwODkw.X3B9gw.7FohCzzAfAFcxhWDUehFn-mftMc
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['roles'],
    permLevel: 0,
    kategori: 'kullanıcı'
}
exports.help = {
    name: 'roller',
    description: 'Sunucuda bulunan rolleri gösterir.',
    usage: 'roller'
}