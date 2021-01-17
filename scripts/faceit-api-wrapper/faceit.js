const axios = require('axios').default;
const c = require ('../../config.js');

axios.defaults.headers.common['Authorization'] = `Bearer ${c.faceit_key}`;

module.exports = {
    getChampionshipDetails,
    getMatchDetails,
    getMatchStatistics
}

/**
 * @author Nick van Raaij
 * @param id - An id off a faceit championship
 * @return A championship object
 * */
async function getChampionshipDetails(id) {
    return new Promise((resolve, reject) => {
        axios.get(`https://open.faceit.com/data/v4/championships/${id}`)
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                console.error(error);
            })
    })
}

/**
 * @author Nick van Raaij
 * @param id - An id off a faceit match
 * @return A match object
 * */
async function getMatchDetails(id) {
    return new Promise((resolve, reject) => {
        axios.get(`https://open.faceit.com/data/v4/matches/${id}`)
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                console.error(error);
            })
    })
}

/**
 * @author Nick van Raaij
 * @param id - An id off a faceit match
 * @return Faceit match statistics
 * */
async function getMatchStatistics(id) {
    return new Promise((resolve, reject) => {
        axios.get(`https://open.faceit.com/data/v4/matches/${id}/stats`)
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                console.error(error);
            })
    })
}


