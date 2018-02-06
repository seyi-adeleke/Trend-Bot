const config = require('./config');
const twillio = require('twilio')(config.twillio.accountSidTwillio, config.twillio.authTokenTwillio);

module.exports = (data) => {
    twillio.messages.create({
        from: '+18032814475',
        to: '+2348056983182',
        body: `Hey Seyi ${data.trend} is Trending!. Find out why here ${data.url}`,
    }).then((message) => {
        console.log(message.Sid);
    });
};


