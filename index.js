const Twitter  = require('twitter-node-client').Twitter;
require('dotenv').config();


config = {
    "consumerKey": process.env.consumerKey,
    "consumerSecret": process.env.consumerSecret,
    "accessToken": process.env.accessToken,
    "accessTokenSecret": process.env.accessTokenSecret,
};

const twitter = new Twitter(config);

const error =  (err, response, body) => {
    console.log('ERROR [%s]', err);
};

const checkIfTrending = (trends) => {
    let isTrending = false;
    const searchItem = trends.find((trend) => {
        return trend.name === process.argv[2];
    });
    if (searchItem !== undefined) {
        isTrending = true;
        return {
            isTrending,
            trend: searchItem.name,
            url: searchItem.url
        }
    } else {
        return `${process.argv[2]} is not trending`;
    }
};

const success =  (data) => {
    const trendData= JSON.parse(data);
    const trends = trendData[0].trends;
    const currentTrend = checkIfTrending(trends);
    console.log(currentTrend);
};


twitter.getCustomApiCall('/trends/place.json', {id: '1398823'}, error, success);

