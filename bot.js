const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
        if(member.guild.id === "525580458340384768") {  
  const channel = member.guild.channels.find('id', '528564782630961182'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> أهلين تشرفنا`)
}});

client.on('ready', () => {
         console.log(`Logged in as ${client.user.tag}!`);
        });

client.login(process.env.BOT_TOKEN);
