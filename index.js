const Twitter  = require('twitter-node-client').Twitter;
require('dotenv').config();


config = {
    "consumerKey": process.env.consumerKey,
    "consumerSecret": process.env.consumerSecret,
    "accessToken": process.env.accessToken,
    "accessTokenSecret": process.env.accessTokenSecret,
};

const twitter = new Twitter(config);

const error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
const success = function (data) {
    const object = JSON.parse(data);
    console.dir(object, {depth: null, colors: true})

};


twitter.getCustomApiCall('/trends/place.json', {id: '1398823'}, error, success);

