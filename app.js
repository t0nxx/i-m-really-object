const Discord = require('discord.js');
const client = new Discord.Client();
const express = require('express');
const app = express();
const {descrip} = require('./description');
const {testConChannel} = require('./testChannel');
require('dotenv').config();

app.listen(process.env.PORT,()=> console.log(`run on port${process.env.PORT}`));
client.on('message', (message) => {
    if (message.author == client.user) {
        return
    }
    if (message.content.startsWith("*")){
        if (!message.guild) return;
        let fullCommand = message.content.substr(1) ;
        let splitCommand = fullCommand.split(" ") ;
        let primaryCommand = splitCommand[0] ;
        switch (primaryCommand) {
            case "a7a":
                testConChannel(message ,"a7a.mp3");
                break;
            case "555":
                testConChannel(message ,"555.mp3");
                break;
            case "tez":
                testConChannel(message ,"tez.mp3");
                break;
            case "fku":
                testConChannel(message ,"fku.mp3");
                break; 
            case "help":
                message.channel.send(message.author.toString()+""+ descrip()+"");
                break;    
            default:
                message.channel.send(message.author.toString()+' not valid command ya 3le2 enter *help ');
                break;
        }
    }
})
client.login(process.env.TOKEN).then(console.log("connected")).catch(console.log);