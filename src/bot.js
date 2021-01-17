const Discord = require('discord.js');
const client = new Discord.Client();
const c = require('../config.js');
const faceit = require('../scripts/faceit-api-wrapper/faceit');

const ongoingMatches = [];

module.exports = {
    createNewMatchMessage,
    createNewMatchChannel,
    removeMatchMessage
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content === `${c.prefix} hello`) {
    msg.reply(`Hello!`)
        .then(message => console.log(`Sent message: ${message.content}`))
        .catch(console.error);
  }
  
  if (msg.content.startsWith(`${c.prefix} stats`)) {
      let id = msg.content.split('stats')[1]
      faceit.getChampionshipDetails(id)
          .then(res => {
              msg.channel.send(`
              Name: ${res.data.name}\nType: ${res.data.type}\nGame: ${res.data.game_id}\nRegion: ${res.data.region}\nSlots: ${res.data.slots}\nGroups: ${res.data.total_groups}
              `)
                  .then(message => console.log(`Sent message: ${message.content}`))
                  .catch(console.error);
          });
  }
});

/**
 * @author Nick van Raaij
 * @param id - An id from a FACEIT match
 * @return Resolved promise
 * */
async function createNewMatchMessage(id) {
    return new Promise((resolve, reject) => {
        faceit.getMatchDetails(id)
            .then(res => {
                let data = res.data;
                let matchChannel = client.channels.cache.find(channel => channel.name === 'ongoing-matches');
                data.faceit_url = data.faceit_url.replace('{lang}', 'en');
                matchChannel.send(`${data.teams.faction1.name}  vs  ${data.teams.faction2.name}\nMap: ${data.voting.map.pick}\nBest of: ${data.best_of}\nMatch Lobby: ${data.faceit_url}`)
                    .then(res => {
                        ongoingMatches.push([res.id, data.match_id]);
                        resolve();
                    })
            })
    });
}

/**
 * @author Nick van Raaij
 * @param id - An id from a FACEIT match
 * @return Resolved promise
* */
async function createNewMatchChannel(id) {
    return new Promise((resolve, reject) => {
        faceit.getMatchDetails(id)
            .then(res => {
                let data = res.data;
                data.faceit_url = data.faceit_url.replace('{lang}', 'en');

                //Creates a new channel for each match
                client.guild.channels.create(
                    `${data.team.faction1.name} vs ${data.team.faction2.name}`,
                    ''
                )
                    .then(res => {

                    })
            })
    });
}

/**
 * @author Nick van Raaij
 * @param id - An id from a FACEIT match
 * @return Resolved promise
 * */
async function removeMatchMessage(id) {
    return new Promise((resolve, reject) => {
        const matchChannel = client.channels.cache.find(channel => channel.name === 'ongoing-matches');
        const match = ongoingMatches.find(match => match[1] === id);
        if (match !== undefined) {
            matchChannel.messages.fetch().then(message => {
                matchChannel.messages.delete(match[0]);
                ongoingMatches.splice(ongoingMatches.indexOf(match),1);
                console.log('Removed a match message.');
                resolve();
            });
        }
    })
}

//Initialize bot
client.login(c.token).catch(console.error);