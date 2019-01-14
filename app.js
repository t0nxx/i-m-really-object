const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.TOKEN);

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    if (receivedMessage.content.startsWith("*")){
        if (!receivedMessage.guild) return;
        let fullCommand = receivedMessage.content.substr(1) ;
        let splitCommand = fullCommand.split(" ") ;
        let primaryCommand = splitCommand[0] ;
        if(primaryCommand == "a7a"){
            
            testConChannel(receivedMessage ,"a7a.mp3");
            
        }else if (primaryCommand == "555"){
            
            testConChannel(receivedMessage ,"555.mp3");
        }else if (primaryCommand == "help"){
            receivedMessage.channel.send(receivedMessage.author.toString()+" type '*555' for sha5ra or '*a7a' for a7a :D");
        }else if (primaryCommand == "out"){
            if (receivedMessage.member.voiceChannel) {
                receivedMessage.member.voiceChannel.leave();
                receivedMessage.channel.send(receivedMessage.author.toString()+" i will out")
            }
            
        
        }else{
            receivedMessage.channel.send(receivedMessage.author.toString()+" not valid command ya 3le2 enter !help ");
        }
        
    }
   
})





const testConChannel = (receivedMessage , path) => {
    if (receivedMessage.member.voiceChannel) {
        receivedMessage.member.voiceChannel.join()
          .then(connection => { 
            receivedMessage.reply('I have successfully connected to the channel!');
            play(connection,path,receivedMessage);
            console.log(path);
          })
          .catch(console.log);
      } else {
        receivedMessage.reply('You need to join a voice channel first! ya 3le2');
}
}

const play = (connection , path , receivedMessage) =>{
    const dispatcher = connection.playFile(__dirname+ "/" + path);

    dispatcher.on('start', () => {

        console.log("Playing");
        dispatcher.setVolume(5); 
    });

    dispatcher.on('error', e => {
        console.log(e);
      });
        
    dispatcher.on('end', () => {
        console.log("End");
        receivedMessage.member.voiceChannel.leave();
      });
      
      
      console.log(dispatcher.time); 
      
}
