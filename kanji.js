let n5kanji = ["一", "二", "三", "四", "五", "六", "七"];
let n5reading = ["いち", "に", "さん", "し・よん", "ご", "ろく", "なな・しち"];
let n5translation = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

let kanjiDisplay = document.querySelector("#kanji");
let readingDisplay = document.querySelector("#reading");
let translationDisplay = document.querySelector("#translation");
let nextBtn = document.querySelector("#next");
let backBtn = document.querySelector("#back");
let n5LevelBtn = document.querySelector("#n5Level");
let progress = document.querySelector("#progress");

let index = 0;
kanjiDisplay.innerHTML = n5kanji[index];
readingDisplay.innerHTML = n5reading[index];
translationDisplay.innerHTML = n5translation[index];

progressNum();

function progressNum(){
    progress.innerHTML = `Progress: ${index + 1}/${n5kanji.length}`


}
function nextKanji(){
    if (index < n5kanji.length){
        index ++;
        kanjiDisplay.innerHTML = n5kanji[index];
        readingDisplay.innerHTML = n5reading[index];
        translationDisplay.innerHTML = n5translation[index];
        
       
    }
}

function previousKanji(){
    if (index < n5kanji.length){
        index --;
        kanjiDisplay.innerHTML = n5kanji[index];
        readingDisplay.innerHTML = n5reading[index];
        translationDisplay.innerHTML = n5translation[index];
    }
}



nextBtn.addEventListener("click", function(){
    nextKanji();
    checkListLocation();
    progressNum();
    
});

backBtn.addEventListener("click", function(){
    previousKanji();
    checkListLocation();
    progressNum();

})

function checkListLocation(){
    if (index === 0){
        backBtn.disabled = true;
    }
    else if (index === n5kanji.length - 1){
        nextBtn.disabled = true;
    }
    else{ 
        backBtn.disabled = false;
        nextBtn.disabled = false;
    }
}









