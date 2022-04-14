var fs = require("fs");
const { type } = require("os");

var data = "New File Contents";

// fs.writeFile("player.json", data, (err) => {
//     if (err) console.log(err);
//     console.log("Successfully Written to File.");
// });
let player;
// fs.readFile('player.json', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     getData(JSON.parse(data))
// });
// function getData(data) {
//     //console.log(data)
//     player = data
// }

addScoreToPlayer = (player, score, callback) => {
    fs.readFile('player.json', (err, data) => {
        if (err) {
            throw err;
        }

        let playerData = JSON.parse(data.toString())
        playerData[player].score = playerData[player].score + score;
        playerData[player].gamesPlayed++;
        console.log(playerData)
        callback(playerData)
    });


}
const playerData = addScoreToPlayer("player1", 1, savePlayerData);
function savePlayerData(playerData) {
    const player = JSON.stringify(playerData, null, 4)
    console.log(typeof (player))
    fs.writeFile("player.json", player, 'utf8', (err) => {
        if (err) console.log(err);
        console.log("Successfully Written to File.");
    });
}

savePlayerData(playerData);