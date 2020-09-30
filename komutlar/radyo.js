const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix;

exports.run = async (client, message) => {

var streamList = {
    damar: [{
        addr: "https://yayin.damarfm.com:8080/;stream/1/",
        name: "Radyo Damar #1"
    }],
    "arabesk": [{
        addr: "https://playerservices.streamtheworld.com/api/livestream-redirect/SC008_SO1_SC?/;",
        name: "Radyo Arabesk #1"
    }],
    trap: [{
            addr: "https://radyodinle1.turkhosted.com/yayin?uri=95.173.188.166:9984/&tkn=_LDNX_iKT-XUJXbZyEcW_g&tms=1589039843",
            name: "Radyo Türkçe Rap #1"
        }
    ],
    pop: [{
        addr: "https://playerservices.streamtheworld.com/api/livestream-redirect/SUPER2_SC?/;",
        name: "Radyo Pop #1"
    }]

}
var randarray = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}

        try {
            const connection = await message.member.voiceChannel.join();
            var keyArray = Object.keys(streamList),
                genre = streamList[randarray(keyArray)],
                station = randarray(genre)
            playSong(connection, station.addr)
            
            message.channel.send("oynatılıyor: " + station.name)
        } catch (err) {
            message.channel.send(" <a:carpi:758676526518108290> Şu anda bir ses kanalında değilsin. <a:carpi:758676526518108290>")
        }
     

        try {
            if (message.content.split(prefix + "radio ")[1]) {
                var selectedGenre = message.content.split(prefix + "radio ")[1]
                if (streamList[selectedGenre]) {
                    var station = randarray(streamList[selectedGenre])
                    
                    const connection = await message.member.voiceChannel.join();
                    playSong(connection, station.addr)
                    
                    message.channel.send("Şimdi Çalıyor: " + station.name)
                } else if (selectedGenre=="help"){
                  message.channel.send({
  "embed": {
    "title": "",
    "description":  ``,
    "color": 16557315,
    "footer": {
      "text": "ibo radyo"
    },
    "thumbnail": {
      "url": "https://cdn.discordapp.com/avatars/515741819364048909/e9a955e7d2fab03f7f7d09cf2b7f8961.png"
    },
  }
})
                  
                }
                else if (selectedGenre == "stop"){
                        message.member.voiceChannel.leave();
                        message.channel.send(":white_check_mark: Radyo durduruldu")
                }
                else{message.channel.send("İstasyon bulunamadı / Geçersiz Komut")}
            }
        } catch (err) {
            message.channel.send(" <a:carpi:758676526518108290> şu anda bir ses kanalında değilsin <a:carpi:758676526518108290> ")
        }
    }

function playSong(connection, song) {
    return new Promise((resolve, reject) => {
        const dispatcher = connection.playArbitraryInput(song);
        dispatcher.on('end', () => {
            resolve();
        });
    });
} //song function


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["radio"],
    permLevel: 0
};

exports.help = {
    name : "radyo",
    usage: "radyo",
    description: "radyo"
};