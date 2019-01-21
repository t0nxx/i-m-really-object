exports.testConChannel = (message , path)=>{ 
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { 
            message.reply('I have successfully connected to the channel!');
            play(connection,path,message);
            console.log(path);
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first! ya 3le2');
}
}



const play = (connection , path , message) =>{
    const dispatcher = connection.playFile(__dirname+ "/" + "audios" + "/" + path);

    dispatcher.on('start', () => {

        console.log("Playing");
        dispatcher.setVolume(5); 
    });

    dispatcher.on('error', e => {
        console.log(e);
      });
        
    dispatcher.on('end', () => {
        console.log("End");
        setTimeout(() => {
            message.member.voiceChannel.leave();
        }, 3000);
      });
      
      
      console.log(dispatcher.time); 
      
}

