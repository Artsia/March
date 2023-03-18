// Get references to the buttons and music player
var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");
var skipBtn = document.getElementById("skip-btn");
var musicPlayer = document.getElementById("music-player");

// Add event listeners to the buttons
playBtn.addEventListener("click", function () {
    musicPlayer.play();
});

pauseBtn.addEventListener("click", function () {
    musicPlayer.pause();
});

skipBtn.addEventListener("click", function () {
    musicPlayer.currentTime += 60; // Skip ahead 10 seconds
});

var baseUrl = 'https://api.music.amazon.dev';



/*https://api.music.amazon.dev/v1/albums/?ids=B0064UPU4G,B091BHTFTZ,B0869N1S7F*/


/**Calls to the Amazon Music Web API must 
 * always include two header parameters: x-api-key and Authorization. 
 * The value of x-api-key should be your client ID, and the value o
 * f Authorization should be the bearer 
 * token you recieved from the LWA service. */

function login() {

    const data = {
        response_type: 'device_code',
        client_id: 'amzn1.application-oa2-client.5e0256cabe',
        scope: 'profile'
    };

    fetch('https://api.amazon.com/auth/o2/create/codepair', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
        .then(response => response.json())
        .then(data => {
            const device_code = data.device_code;
            console.log(`Device code: ${device_code}`);
        })
        .catch(error => console.error(error));

}


//using spotify API to play musuc


