const TWITTER_KEY = "E2AYztI1jFmmiIerD9CQVuO4b";
const TWITTER_SECRET_KEY = "YxfpyTh19xyOcyBPkDsdP9SmnviQXRBMkkW3b28jpzWeN6ooON";
const TWITTER_TOKEN = "1057692323239186432-GLPJ2V0hPjzAvYKfn8n6rsynqFAypL";
const TWITTER_SECRET_TOKEN = "UzD9kjkbhmLsWD2SyA5G6dCtpp2dzQFtGOcE4wZW4m1EN";

var Twit = require('twit');
var test_id = "realDonaldTrump";

var T = new Twit ({
    consumer_key: TWITTER_KEY,
    consumer_secret: TWITTER_SECRET_KEY,
    access_token: TWITTER_TOKEN,
    access_token_secret: TWITTER_SECRET_TOKEN
});

var number = 5;
var string = "";

function getID (tweet)
{
    T.get('statuses/show/:id', {id: tweet.id_str, tweet_mode: 'extended'}, function(err, data, response){
        var str = data.full_text;
        string = string + str + '\n';
    });
}

T.get('statuses/user_timeline', {screen_name: test_id, count: number}, function(err, data, response){
    for (i = 0; i < number; i++)
    {
        getID(data[i]);
    }
});

function getString() {
    setTimeout(() => {
        const fs = require('fs'); 
        fs.writeFile('input.txt', string, (err) => {  
            if(err) 
            {
                throw err;
            }
        }) 
    }, 1000);
}

function outputString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const error = false;

            if (!error)
            {
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    });
}

outputString()
.then (getString)
.catch (err => console.log(err));