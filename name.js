const Discord = require("discord.js");
const client = new Discord.Client();

client.login("...");

client.on("ready", () => {
  console.log("I am ready!");
  client.user.setGame(`Say ::help for help!`);
});

client.on("message", (message) => {
    if (message.author.bot || message.author.id === client.user.id) return;
  if (message.content.startsWith("::ping")) {
    message.channel.send("pong!");
   }
    if (message.content.startsWith("::game time")) {
    message.channel.send("Looks like you've lost your mind! <:nothink:317443428696850443>");
   }
    if (message.content.startsWith("::help")) {
    message.channel.send("911! Kidding, here are my commands.\n**I have many hidden sass commands**. Don't be surprised if I randomly jump in. ;) \n**::ping** - Just a simple 'pong' back. \n**::game time** - That's for later. ;) \n**::help** - you should know! \n**::home server** - An invite to my home; where I was first placed. \n**::credits** - A list of credits. \n**::suggestions** - A list of server suggestions. \n**::respond to** - A list of things I respond to. \n**::8ball** - Ask and it'll respond at random.");
   }
    if (message.content.startsWith("::Welcome")) {
    message.channel.send("This is the official bot of Cypher123#0589 and ExtremeGalaxies#4755! Looks like we have a newcomer! Welcome to this server and enjoy your stay! ;)");
   }
    if (message.content.startsWith("Discord")) {
    message.channel.send("drocsiD <:thinkeyes:317443389140500482>");
   }
   if (message.content.startsWith("discord")) {
   message.channel.send("drocsiD <:thinkeyes:317443389140500482>");
  }
     if(message.content === "oi") {
       message.channel.send("vey")
   }
     if(message.content === "Oi") {
       message.channel.send("vey")
   }
    if (message.content.startsWith("::home server")) {
    message.channel.send("This is where I was tested and was first placed: https://discord.gg/PthAt9e");
   }
     if(message.content === "Ye") {
       message.channel.send("s")
   }
     if(message.content === "ye") {
       message.channel.send("s")
   }
     if(message.content === "XD") {
       message.channel.send("DX")
   }
  if (message.content.startsWith("::credits")) {
    message.channel.send("**Cypher123#0589**: Owner of this bot \n**ExtremeGalaxies#4755**: Co-owner? He did promote the idea, but I took action. \n**Bit#8289**: Co-programmer? I mean, he did help when I didn't know what to do. He helped a lot. \n**GamersGotPower#9571**: When I first made it, I had a few (very few) questions. He answered. Also the first person to put this bot in another server, not by request. :P \n**mikemodder007#7678**: First person who put this bot in a server by request. \n**Smashbattles and other bots**, as if it weren't for those I wouldn't have thought about making a bot. \n**And all of my friends**, as they gave me the idea to code (pretty much).");
   }
     if(message.content === "cya") {
       message.channel.send("Bye!")
   }
     if(message.content === "Cya") {
       message.channel.send("Bye!")
   }
     if(message.content === "C'ya") {
       message.channel.send("Bye!")
   }
     if(message.content === "c'ya") {
       message.channel.send("Bye!")
   }
  if (message.content.startsWith("Kys")) {
    message.channel.send("That was so rude of you!");
   }
  if (message.content.startsWith("kys")) {
    message.channel.send("That was so rude of you!");
   }
  if (message.content.startsWith("Heck")) {
    message.channel.send("`\n Heck`");
   }
  if (message.content.startsWith("heck")) {
    message.channel.send("`\n Heck`");
   }
  if (message.content.startsWith("::suggestions")) {
    message.channel.send("These servers I wanna suggest for no reason whatsoever. \n***Cypher123's servers:*** \n   **Bots and Elsewhat**: https://discord.gg/PthAt9e \n   **Sonic Central**: https://discord.gg/UpFNhMc \n***Thomas's server:*** \n   **3Discord**: https://discord.gg/XqGMQHw \n***sudofox#8048's server:*** \n   **Sudomemo**: https://discord.gg/JEXTphm \n***thejsa#7237's server:*** \n   **kaeru:world**: https://discord.gg/2kFVQjB \n***mikemodder007#7678's server:*** \n   **007Bot Industries**: https://discord.gg/Ax9Pf7w");
   }
  if (message.content.startsWith("Oki")) {
    message.channel.send("*Ok");
   }
  if (message.content.startsWith("oki")) {
    message.channel.send("*ok");
   }
  if (message.content.startsWith("vey")) {
    message.channel.send("oi vey!");
   }
  if (message.content.startsWith("Vey")) {
    message.channel.send("oi vey!");
   }
     if(message.content === "oi vey") {
       message.channel.send("yev io")
   }
     if(message.content === "Oi vey") {
       message.channel.send("yev iO")
   }
  if (message.content.startsWith("durp")) {
    message.channel.send("https://cdn.discordapp.com/emojis/319524705105346560.png");
   }
  if (message.content.startsWith("Durp")) {
    message.channel.send("https://cdn.discordapp.com/emojis/319524705105346560.png");
   }
 if (message.content.startsWith("derp")) {
    message.channel.send("https://cdn.discordapp.com/emojis/319524705105346560.png");
   }
 if (message.content.startsWith("Derp")) {
    message.channel.send("https://cdn.discordapp.com/emojis/319524705105346560.png");
   }
 if (message.content.startsWith(">")) {
    message.channel.send("^<^");
   }
     if(message.content === "^") {
       message.channel.send("^ Agreed")
   }
 if (message.content.startsWith("<")) {
    message.channel.send("^<^");
   }
 if (message.content.startsWith("I'm")) {
    message.channel.send("Pffffftttttt... liar.");
   }
 if (message.content.startsWith("i'm")) {
    message.channel.send("Pffffftttttt... liar.");
   }
   if (message.content.startsWith("im")) {
      message.channel.send("Pffffftttttt... liar.");
     }
   if (message.content.startsWith("Im")) {
      message.channel.send("Pffffftttttt... liar.");
     }
 if (message.content.startsWith("I am")) {
    message.channel.send("Pffffftttttt... liar.");
   }
 if (message.content.startsWith("i am")) {
    message.channel.send("Pffffftttttt... liar.");
   }
 if (message.content.startsWith("bean")) {
    message.channel.send("https://cdn.discordapp.com/emojis/319636723040649226.png");
   }
 if (message.content.startsWith("lmao")) {
    message.channel.send("*lamo");
   }
 if (message.content.startsWith("Lmao")) {
    message.channel.send("*Lamo");
   }
   if (message.content.startsWith("lmo")) {
      message.channel.send("*lmao");
     }
   if (message.content.startsWith("Lmo")) {
      message.channel.send("*Lmao");
     }
 if (message.content.startsWith("So")) {
    message.channel.send("oS. Is it weird that OS is so backwards? Does that mean that Chrome OS is Chrome so-backwards?");
   }
 if (message.content.startsWith("And")) {
    message.channel.send("dnA. Is it weird that And backwards is dna?");
   }
 if (message.content.startsWith("and")) {
    message.channel.send("dna. Is it weird that And backwards is dna?");
   }
 if (message.content.startsWith("so")) {
    message.channel.send("os. Is it weird that OS is so backwards? Does that mean that Chrome OS is Chrome so-backwards?");
   }
 if (message.content.startsWith("I'm Cypher")) {
    message.channel.send("I am!");
   }
 if (message.content.startsWith("i'm Cypher")) {
    message.channel.send("I am!");
   }
 if (message.content.startsWith("I am Cypher")) {
    message.channel.send("No you're not! I am!");
   }
 if (message.content.startsWith("i am Cypher")) {
    message.channel.send("No you're not! I am!");
   }
 if (message.content.startsWith("I'm cypher")) {
    message.channel.send("I am!");
   }
 if (message.content.startsWith("i'm cypher")) {
    message.channel.send("I am!");
   }
 if (message.content.startsWith("I am cypher")) {
    message.channel.send("No you're not! I am!");
   }
 if (message.content.startsWith("i am cypher")) {
    message.channel.send("No you're not! I am!");
   }
 if (message.content.startsWith("Idk")) {
    message.channel.send("Or do you?");
   }
   if (message.content.startsWith("IDK")) {
      message.channel.send("Or do you?");
     }
 if (message.content.startsWith("idk")) {
    message.channel.send("Or do you?");
   }
 if (message.content.startsWith("nothx")) {
    message.channel.send("yes, thanks!");
   }
 if (message.content.startsWith("Nothx")) {
    message.channel.send("yes, thanks!");
   }
 if (message.content.startsWith("Idc")) {
    message.channel.send("Yes you do!");
   }
 if (message.content.startsWith("idc")) {
    message.channel.send("Yes you do!");
   }
 if (message.content.startsWith("lel")) {
    message.channel.send("*lol");
   }
 if (message.content.startsWith("Lel")) {
    message.channel.send("*lol");
   }
 if (message.content.startsWith(":V")) {
    message.channel.send("'<'");
   }
 if (message.content.startsWith(":v")) {
    message.channel.send("'<'");
   }
 if (message.content === "os") {
    message.channel.send("Ha ha! Nice try!");
   }
 if (message.content === "Os") {
    message.channel.send("Ha ha! Nice try!");
   }
 if (message.content.startsWith("dna")) {
    message.channel.send("*DNA");
   }
 if (message.content.startsWith("Dna")) {
    message.channel.send("*DNA");
   }
 if (message.content.startsWith("DNA")) {
    message.channel.send("Good boy.");
   }
 if (message.content.startsWith("boi")) {
    message.channel.send("*boy");
   }
 if (message.content.startsWith("Boi")) {
    message.channel.send("*Boy");
   }
 if (message.content.startsWith("gud")) {
    message.channel.send("*good");
   }
 if (message.content.startsWith("Gud")) {
    message.channel.send("*Good");
   }
 if (message.content.startsWith("lamo")) {
    message.channel.send("Eksdee");
   }
 if (message.content.startsWith("Lamo")) {
    message.channel.send("Eksdee");
   }
 if (message.content.startsWith("Cypher")) {
    message.channel.send("<@!215232862822072320>");
   }
 if (message.content.startsWith("cypher")) {
    message.channel.send("<@!215232862822072320>");
   }
 if (message.content === "Cool") {
    message.channel.send("Cool, or chill?");
   }
 if (message.content === "cool") {
    message.channel.send("Cool, or chill?");
   }
 if (message.content.startsWith("Noice")) {
    message.channel.send("*Nice");
   }
 if (message.content.startsWith("noice")) {
    message.channel.send("*nice");
   }
 if (message.content.startsWith("kewl")) {
    message.channel.send("*cool");
   }
 if (message.content.startsWith("Kewl")) {
    message.channel.send("*Cool");
   }
   if (message.content.startsWith("Hoi")) {
      message.channel.send("*Hi");
     }
   if (message.content.startsWith("hoi")) {
      message.channel.send("*hi");
     }
     if (message.content === "Ya") {
        message.channel.send("*Yes");
       }
       if (message.content === "ya") {
          message.channel.send("*Yes");
         }
         if (message.content === "Ye") {
            message.channel.send("*Yes");
           }
           if (message.content === "ye") {
              message.channel.send("*Yes");
             }
       if (message.content.startsWith("ik")) {
         message.channel.send("Pft, sure you know.");
      }
      if (message.content.startsWith("Ik")) {
        message.channel.send("Pft, sure you know.");
     }
     if (message.content.startsWith("IK")) {
       message.channel.send("Pft, sure you know.");
    }
     if (message.content.startsWith("Noep")) {
       message.channel.send("*Nope");
    }
    if (message.content.startsWith("noep")) {
      message.channel.send("*nope");
   }
   if (message.content.startsWith("Dicksword")) {
     message.channel.send("*Discord");
  }
  if (message.content.startsWith("dicksword")) {
    message.channel.send("*Discord");
 }
 if(message.content === "o") {
   message.channel.send("*oh")
}
if(message.content === "O") {
  message.channel.send("*Oh")
}
if (message.content.startsWith("( ͡° ͜ʖ ͡°)")) {
  message.channel.send("Dead memes, huh?");
}
if (message.content.startsWith("doode")) {
  message.channel.send("*dude");
}
if (message.content.startsWith("Doode")) {
  message.channel.send("*Dude");
}
if(message.content === "k") {
  message.channel.send("*okay")
}
if(message.content === "K") {
  message.channel.send("*Okay")
}
if(message.content === "::respond to") {
  message.channel.send("```Discord, oi, ye, XD, cya, kys, heck, oki, vey, oi vey, durp, derp, >, ^, <, I'm, I am, bean, lmao, and, so, I'm Cypher, idk, nothx, idc, lel, :v, os, dna, DNA, boi, gud, lamo, cypher, cool, noice, kewl, hoi, ya, ye, ik, noep, dicksword, o, ( ͡° ͜ʖ ͡°), doode, k, lmo```");
}
if (!message.content.endsWith(".") && !message.content.endsWith("?") && !message.content.endsWith("!") && !message.content.endsWith(".\"") && !message.content.endsWith("?\"") && !message.content.endsWith("!\"") && !message.content.endsWith("\)")) {
message.channel.send("Add some end punctuation! We need to know how you feel about this, right? Please, do it.");
}

if(message.content.startsWith("::8ball")) {
    let response = Math.floor(Math.random() * 11);
    switch(response){
    case 1:
    message.channel.send("Yes!");
    return;
    case 2:
    message.channel.send("Uh, no.");
    return;
    case 3:
    message.channel.send("That's an obvious no!");
    return;
    case 4:
    message.channel.send("The outcome isn't very good 😏");
    return;
    case 5:
    message.channel.send("Possibly. Try again!");
    return;
    case 6:
    message.channel.send("Doesn't seem like it.");
    return;
    case 7:
    message.channel.send("Obviously!");
    return;
    case 8:
    message.channel.send("It seems like it.");
    return;
    case 9:
    message.channel.send("Only if you wish.");
    return;
    case 10:
    message.channel.send("Ha! As if! I'm 100% sure that's a no.");
    return;
    case 11:
    message.channel.send("Believe it or not, I'm positively positive.");
    return;
  }
}
});

client.on("guildMemberAdd", (member) => {
  console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
  member.guild.defaultChannel.send(`Hello, "${member.user.username}"! Looks like you're new here! Please, don't leave right away unless joining was an accident, because activity is on the way! This is the official bot of Cypher123#0589 and ExtremeGalaxies#4755! Welcome to this server and enjoy your stay! ;)`);
});

client.on("guildAdd", (guild) => {
  console.log(`I've joined "${guild}"`);
});
