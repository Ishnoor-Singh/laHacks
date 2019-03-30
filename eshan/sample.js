const axios = require("axios");
const base = "https://www.googleapis.com/youtube/v3/";
const KEY = "AIzaSyA6kU6LhCRMQbWL8DwEJSSb_lDQ4kYUY7E"

//https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=marquesbrownlee&key={YOUR_API_KEY}
function get_uploads(name){
    axios({
        method:'get',
        url: base + "channels?part=contentDetails&forUsername=" + name + "&key=" + KEY
    }).then(response=>{
        console.log(response.data["items"])
        thing =  base + "playlists?part=snippet&channelId=" + response.data["items"][0].id + "&key=" + KEY;
        console.log(response.data.etag);
        console.log(thing);
       function example (th){ axios({
            // console.log(response.data.etag);
            method:'get',
            url: th
        }).then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log("error");
            console.log(error.response.status);
        })
    }
    example(thing);
    })
    .catch(error=>{
        console.log(error);
    })
}
get_uploads("marquesbrownlee");