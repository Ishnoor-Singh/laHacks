const axios = require("axios");
const base = "https://www.googleapis.com/youtube/v3/";
const KEY = "AIzaSyA6kU6LhCRMQbWL8DwEJSSb_lDQ4kYUY7E"

function get_uploads(name){
    axios({
        method:'get',
        url: base + "channels?part=contentDetails&forUsername=" + name + "&key=" + KEY
    }).then(response=>{
        const uploads_id = response.data.items[0].contentDetails.relatedPlaylists.uploads
        uploads_url =  base + "playlistItems?part=snippet&maxResults=50&playlistId=" + uploads_id + "&key=" + KEY;
        // console.log(uploads_url)

        function example (url){ axios({
            method:'get',
            url: url
        }).then(res=>{
            
            for (var i = 0; i < 50; i++) {
                console.log(res.data.items[i].snippet.thumbnails.high.url);
            }
        })
        .catch(error=>{
            console.log(error);
            // console.log(error.res.status);
        })
    }
    example(uploads_url);
    })
    .catch(error=>{
        console.log(error);
    })
}
get_uploads("marquesbrownlee");