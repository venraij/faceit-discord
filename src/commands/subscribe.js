import Discord from 'discord.js';
let dClient;

/**
 * Subscribes a specified Discord channel to a specified FACEIT chat room.
 *
 * @author Nick van Raaij
 * @param {module:"discord.js".Client} client - A Discord client.
 * @param {Message} msg - A Discord message.
 * */
export default async function subscribeController(client, msg) {
    dClient = client;
    let msgArray = msg.content.split(' ');

    switch (msgArray[2]) {
        case 'chat':
            await faceitRoom(msg.channel, msgArray[3]);
            break;
    }
}

/**
 * Subscribes a specified Discord channel to a specified FACEIT chat room.
 *
 * @author Nick van Raaij
 * @param {module:"discord.js".TextChannel} channel - A Discord channel object.
 * @param {string} room_id - A FACEIT chatroom id.
 * @return {Promise} Resolved promise
 * */
async function faceitRoom(channel, room_id) {

}

/**
 * Subscribes a specified Discord channel to a specified FACEIT hub's matches.
 *
 * @author Nick van Raaij
 * @param {string} channel_name - A Discord channel name.
 * @param {string} hub_id - A FACEIT hub id.
 * @return {Promise} Resolved promise
 * */
async function faceitHubOngoingMatches(channel_name, hub_id) {

}

/**
 * Subscribes a specified Discord channel to a specified FACEIT organizers hubs.
 *
 * @author Nick van Raaij
 * @param {string} channel_name - A Discord channel name.
 * @param {string} organizer_id - A FACEIT organizer id.
 * @return {Promise} Resolved promise
 * */
async function faceiteHubs(channel_name, organizer_id) {

}

/**
 * Subscribes a specified Discord channel to a specified FACEIT championships active matches.
 *
 * @author Nick van Raaij
 * @param {string} channel_name - A Discord channel name.
 * @param {string} championship_id - A FACEIT championship id.
 * @return {Promise} Resolved promise
 * */
async function faceitChampionshipOngoingMatches(channel_name, championship_id) {

}

/**
 * Subscribes a specified Discord channel to a specified FACEIT teams tournaments.
 *
 * @author Nick van Raaij
 * @param {string} channel_name - A Discord channel name.
 * @param {string} team_id - A FACEIT team id.
 * @return {Promise} Resolved promise
 * */
async function faceitTeamTournaments(channel_name, team_id) {

}
