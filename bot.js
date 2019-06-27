const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
        if(member.guild.id === "466734861558743041") {  
  const channel = member.guild.channels.find('590172264994045967'); 
if (!channel) return;
channel.send(`**Welcome To , Vectoria...**:emoji_1:   :rose: `)
channel.send(`<@${member.user.id}>`)
}});

client.on('ready', () => {
         console.log(`Logged in as ${client.user.tag}!`);
        });

client.login(process.env.BOT_TOKEN);
