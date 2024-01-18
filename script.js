console.log('🟥 🟦 🟩 🟨');

function blocksBegin() {

let redButton = document.getElementById('red-btn');

}

//create function that adds red block when red btn is clicked on
//then gets removed when red block icon is clicked

function handleRedClick() {
let addToDivLocation = document.querySelector('#blocks');
let redBtnRecord = document.querySelector('#red-count');

//take div element and replace the space with red block
addToDivLocation.innerHTML += `<span onclick="deleteRedBlock(event)"><div class="block red-fill"></div></span>`

redBtnRecord.textContent = Number(redBtnRecord.textContent) + 1 ;
}

//create function that adds blue block when blue btn is clicked on
//then gets removed when blue block icon is clicked
function handleBlueClick() {
let addToDivLocation = document.querySelector('#blocks');
let blueBtnRecord = document.querySelector('#blue-count');


//take div element and replace the space with blue block
addToDivLocation.innerHTML += `<span onclick="deleteBlueBlock(event)"><div class="block blue-fill"></div></span>`

blueBtnRecord.textContent = Number(blueBtnRecord.textContent) + 1 ;

}


//create function that adds green block when green btn is clicked on
//then gets removed when green block icon is clicked
function handleGreenClick() {
let addToDivLocation = document.querySelector('#blocks');
let greenBtnRecord = document.querySelector('#green-count');

//take div element and replace the space with green block
addToDivLocation.innerHTML += `<span onclick="deleteGreenBlock(event)"><div class="block green-fill"></div></span>`

greenBtnRecord.textContent = Number(greenBtnRecord.textContent) + 1 ;

}

//create function that adds yellow block when yellow btn is clicked on
//then gets removed when yellow block icon is clicked
function handleYellowClick() {
let addToDivLocation = document.querySelector('#blocks');
let yellowBtnRecord = document.querySelector('#yellow-count');


//take div element and replace the space with yellow block
addToDivLocation.innerHTML += `<span onclick="deleteYellowBlock(event)"><div class="block yellow-fill"></div></span>`

yellowBtnRecord.textContent = Number(yellowBtnRecord.textContent) + 1 ;

}


//function delete red
function deleteRedBlock(event){
    event.target.remove();
    let deleteFromCount = document.querySelector('#red-count');

    deleteFromCount.textContent = Number(deleteFromCount.textContent) - 1 ;

}

//function delete blue
function deleteBlueBlock(event){
    event.target.remove();
    let deleteFromCount = document.querySelector('#blue-count');

    deleteFromCount.textContent = Number(deleteFromCount.textContent) - 1 ;

}

//function delete green
function deleteGreenBlock(event){
    event.target.remove();
    let deleteFromCount = document.querySelector('#green-count');

    deleteFromCount.textContent = Number(deleteFromCount.textContent) - 1 ;

}

//function delete yellow
function deleteYellowBlock(event){
   event.target.remove();
   let deleteFromCount = document.querySelector('#yellow-count');

   deleteFromCount.textContent = Number(deleteFromCount.textContent) - 1 ;

}

// Will call blocksBegin() when the page loads
blocksBegin();