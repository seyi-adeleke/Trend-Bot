const config = {
    twitter: {
        "consumerKey": process.env.consumerKey,
        "consumerSecret": process.env.consumerSecret,
        "accessToken": process.env.accessToken,
        "accessTokenSecret": process.env.accessTokenSecret,
    },
    twillio: {
        accountSidTwillio: process.env.accountSidTwillio,
        authTokenTwillio: process.env.authTokenTwillio,
    }
};
module.exports = config;
