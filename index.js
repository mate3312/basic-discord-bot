//ODEwMTM5MDkwNDk3Njk5ODUw.YCfS0g.0RnCEAJJ2csS0EL85GbhMyYo7Wo

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const token = config.token;
const prefix = config.prefix;

bot.on("ready", () => {
    console.log('A bot sikeresen elindult: ' + bot.user.tag);
    console.log('A bot ennyi szerveren elérhető: ' + bot.guilds.size);
    let statuszok = ['Segítség: s!segitseg', 'Kapcsolat: s!kapcsolat']
    setInterval(function () {
        let sztatusz = statuszok[Math.floor(Math.random() * statuszok.length)];
        bot.user.setActivity(sztatusz, { type: "WATCHING"})
    }, 5000)
})

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    let uzenetvelezes = message.content.split(" ");
    let cmd = uzenetvelezes[1];
    let args = uzenetvelezes.slice(1);
    //start
    if(message.content.startsWith(prefix + "segitseg")) {
        let segitsegpanel = new Discord.RichEmbed()

        segitsegpanel.setColor("DARK_RED")
        segitsegpanel.setTitle(" ▁ ▂ ▄ ▅ ▆ ▇ █ Terminal █ ▇ ▆ ▅ ▄ ▂ ▁ | Segítség menü")
        segitsegpanel.setDescription("Itt megtalálhatod, hogy miként tudod használni a Terminal botot!")
        segitsegpanel.addField("Parancsok panel:", "s!parancsok")
        segitsegpanel.addField("Beállítások panel:", "s!beallitasok")
        segitsegpanel.addField("Bot panel:", "s!bot")
        segitsegpanel.addField("Hibajelentés panel:", "s!hibajelentes")
        segitsegpanel.addField("Kapcsolat panel:", "s!kapcsolat")


        message.channel.send(segitsegpanel)
    }

    if(message.content.startsWith(prefix + "parancsok")) {

    }

    if(message.content.startsWith(prefix + "beallitasok")) {

    }

    if(message.content.startsWith(prefix + "bot")) {

    }

    if(message.content.startsWith(prefix + "hibajelentes")) {

    }
    if(message.content.startsWith(prefix + "kapcsolat")) {

    }
})


bot.login(token)