console.log('🟥 🟦 🟩 🟨');

function blocksBegin() {

let redButton = document.getElementById('red-btn');

}

//create function that adds red block when red btn is clicked on
//then gets removed when red block icon is clicked

function handleRedClick() {
let addToDivLocation = document.querySelector('#blocks');

//take div element and replace the space with red block
addToDivLocation.innerHTML += `<span onclick="deleteRedBlock(event)"><div class="block red-fill"></div></span>`
}

//create function that adds blue block when blue btn is clicked on
//then gets removed when blue block icon is clicked
function handleBlueClick() {
let addToDivLocation = document.querySelector('#blocks');

//take div element and replace the space with blue block
addToDivLocation.innerHTML += `<span onclick="deleteBlueBlock(event)"><div class="block blue-fill"></div></span>`
}

//create function that adds green block when green btn is clicked on
//then gets removed when green block icon is clicked
function handleGreenClick() {
let addToDivLocation = document.querySelector('#blocks');

//take div element and replace the space with green block
addToDivLocation.innerHTML += `<span onclick="deleteGreenBlock(event)"><div class="block green-fill"></div></span>`
}

//create function that adds yellow block when yellow btn is clicked on
//then gets removed when yellow block icon is clicked
function handleYellowClick() {
let addToDivLocation = document.querySelector('#blocks');

//take div element and replace the space with yellow block
addToDivLocation.innerHTML += `<span onclick="deleteYellowBlock(event)"><div class="block yellow-fill"></div></span>`
}


//function delete red
function deleteRedBlock(event){
    event.target.remove();
}

//function delete blue
function deleteBlueBlock(event){
    event.target.remove();
}

//function delete green
function deleteGreenBlock(event){
    event.target.remove();
}

//function delete yellow
function deleteYellowBlock(event){
    event.target.remove();
}
// Will call blocksBegin() when the page loads
blocksBegin();