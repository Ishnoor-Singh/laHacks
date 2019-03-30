//this will be the final file
const TWITTER_KEY = "E2AYztI1jFmmiIerD9CQVuO4b";
const TWITTER_SECRET_KEY = "YxfpyTh19xyOcyBPkDsdP9SmnviQXRBMkkW3b28jpzWeN6ooON";
const TWITTER_TOKEN = "1057692323239186432-GLPJ2V0hPjzAvYKfn8n6rsynqFAypL";
const TWITTER_SECRET_TOKEN = "UzD9kjkbhmLsWD2SyA5G6dCtpp2dzQFtGOcE4wZW4m1EN";

function getText (tweet)
{
  if (tweet.truncated == false)
  {
    console.log(tweet.text)
  }
  else
  {
    foo(tweet);
  }
}
async function foo (tw)
{
  var txt = "error";
  txt = await bar(tw);
  console.log(txt);
}


function bar (t){
  var param = {id: t.id_str, tweet_mode: 'extended'};
  client.get('statuses/show.json', param, function(error, tweets, response) {
    if (!error) {
      console.log(t)
      return(t.text);
    }
    else
    {
      console.log(error)
    }
  });
}
var Twitter = require('twitter');
var test_id = "realDonaldTrump";
var client = new Twitter({
    consumer_key: TWITTER_KEY,
    consumer_secret: TWITTER_SECRET_KEY,
    access_token_key: TWITTER_TOKEN,
    access_token_secret: TWITTER_SECRET_TOKEN
  });
   
  var params = {screen_name: test_id};
  client.get('statuses/user_timeline.json?count=2', params, function(error, tweets, response) {
    if (!error) {
      tweets.map(x=>getText(x));
    }
    else
    {
      console.log(error);
    }
  });
