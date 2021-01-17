const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const bot = require('./bot');

const accessToken = 'IGAVlzuTJhhaOjhnWNCc.oXQUTV6ePTddzdnVFauu'
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// when there's a post request to /webooks...
app.post('/webhooks', function (req, res) {

    if (req.query.access_token !== accessToken) {
        res.status(401);
        res.send('INVALID ACCESS TOKEN')
    } else {
        // respond with 200 OK
        switch (req.body.event) {
            case 'match_object_created':
                break;
            case 'match_status_ready':
                break;
            case 'match_status_configuring':
                if (req.body.payload.entity.id === '59faa6b2-e3e5-4dd0-8262-b980f569b65d') {
                    bot.createNewMatchMessage(req.body.payload.id);
                }
                break;
            case  'match_status_aborted':
                bot.removeMatchMessage(req.body.payload.id);
                break;
            case 'match_status_cancelled':
                bot.removeMatchMessage(req.body.payload.id);
                break;
            case 'match_status_finished':
                bot.removeMatchMessage(req.body.payload.id);
                break;
        }

        res.send('OK');
    }
});

app.listen(3000, function () {
    console.log('Listening for webhooks on port 3000');
})