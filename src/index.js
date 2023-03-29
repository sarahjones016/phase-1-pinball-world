//Variables
const gameListNav = document.querySelector(".game-list")
const detailName = document.getElementById("detail-title")
const detailImage = document.getElementById("detail-image")
const detailScore = document.getElementById("detail-high-score")
const form = document.getElementById("high-score-form")

// Fetch
fetch("http://localhost:3000/games")
.then(function (res) {
    return res.json();
})
.then(function (data) {
    renderGameData(data)

    detailName.textContent = data[0].name
    detailImage.src = data[0].image
    detailScore.textContent = data[0].high_score  
})

// Render Function
function renderGameData(data) {
    for (const game of data) {

        const nameInfo = document.createElement("h5")
        const gameName = game.name
        const gameManufacturer = game.manufacturer_name
        nameInfo.textContent = gameName + " (" + gameManufacturer + ")"
        gameListNav.append(nameInfo)

        nameInfo.addEventListener("click", function() {
            detailName.textContent = game.name
            detailImage.src = game.image
            detailScore.textContent = game.high_score  
        })
    }  
}

//Form Input
form.addEventListener("submit", function(e) {
    e.preventDefault();

    console.log(e.target["score-input"].value)

    detailScore.textContent = e.target["score-input"].value
})