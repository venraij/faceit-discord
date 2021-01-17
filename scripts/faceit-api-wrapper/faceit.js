const axios = require('axios').default;
const key = 'bad86683-5f5c-4624-aa35-6021f5a16587';

axios.defaults.headers.common['Authorization'] = `Bearer ${key}`;

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


