const Discord=require('discord.js');
const robot=new Discord.Client();

robot.login("NDM0MDI2MDg2NjE2MDA2NjY2.DbEbAg.vRHTA7G7QR-_fo9Q1LBi0ymSXy4");

robot.on('message',(message)=>{
 if(message.content=="торт"){
message.reply("Да,я люблю торты!!!");
 }
}
);