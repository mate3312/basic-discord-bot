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
    let uzenetfelezes = message.content.split(" ");
    let cmd = uzenetfelezes[1];
    let args = uzenetfelezes.slice(1);
    //start
    if(message.content.startsWith(prefix + "segitseg")) {
        let segitsegpanel = new Discord.RichEmbed()

        segitsegpanel.setColor("DARK_RED")
        segitsegpanel.setTitle(" ▁ ▂ ▄ ▅ ▆ ▇ █ Terminal █ ▇ ▆ ▅ ▄ ▂ ▁ | Segítség menü")
        segitsegpanel.setDescription("Itt megtalálhatod, hogy miként tudod használni a Terminal botot!")
        segitsegpanel.addField("Parancsok panel:", "t!parancsok")
        segitsegpanel.addField("Beállítások panel:", "t!beallitasok")
        segitsegpanel.addField("Bot panel:", "t!bot")
        segitsegpanel.addField("Hibajelentés panel:", "t!hibajelentes")
        segitsegpanel.addField("Kapcsolat panel:", "!kapcsolat")
        segitsegpanel.setTimestamp()
        segitsegpanel.setFooter("Terminal ~ 2021")

        message.channel.send(segitsegpanel)
    }

    if(message.content.startsWith(prefix + "parancsok")) {
        let parancsokpanel = new Discord.RichEmbed()

        parancsokpanel.setColor("DARK_RED")
        parancsokpanel.setTitle(" ▁ ▂ ▄ ▅ ▆ ▇ █ Terminal █ ▇ ▆ ▅ ▄ ▂ ▁ | Segítség menü")
        parancsokpanel.setDescription("Itt megtalálhatod, a Terminal parancsait!")
        parancsokpanel.addField("Ping parancs:", "t!ping")
        parancsokpanel.setTimestamp()
        parancsokpanel.setFooter("Terminal ~ 2021")

        message.channel.send(parancsokpanel)
    }
    if(message.content.startsWith(prefix + "beallitasok")) {

    }
    if(message.content.startsWith(prefix + "bot")) {

    }
    if(message.content.startsWith(prefix + "hibajelentes")) {

    }
    if(message.content.startsWith(prefix + "kapcsolat")) {

    }
    if(message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong :ping_pong:")
    }
})


bot.login(token)
