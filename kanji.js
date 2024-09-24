let kanjiDisplay = document.querySelector("#kanji");
let readingDisplay = document.querySelector("#reading");
let translationDisplay = document.querySelector("#translation");
let nextBtn = document.querySelector("#next");
let backBtn = document.querySelector("#back");
let n5LevelBtn = document.querySelector("#n5Level");
let n4LevelBtn = document.querySelector("#n4Level");
let progress = document.querySelector("#progress");


let index = 0;
let currentKanji;
let currentReading;
let currentTranslation;
selectList();

function selectList(){
    n5LevelBtn.addEventListener("click", function(){
        index = 0;
        nextBtn.disabled = false;
        currentKanji = n5kanji;
        currentReading = n5reading;
        currentTranslation = n5translation;
        kanjiDisplay.innerHTML = n5kanji[index];
        readingDisplay.innerHTML = n5reading[index];
        translationDisplay.innerHTML = n5translation[index];
        progressNum();
    
    })

    n4LevelBtn.addEventListener("click", function(){
        index = 0;
        nextBtn.disabled = false;
        currentKanji = n4kanji;
        currentReading = n4reading;
        currentTranslation = n4translation;
        kanjiDisplay.innerHTML = n4kanji[index];
        readingDisplay.innerHTML = n4reading[index];
        translationDisplay.innerHTML = n4translation[index];
        progressNum();
       
    })   
}



function progressNum(){
    progress.innerHTML = `Progress: ${index + 1}/${currentKanji.length}`
}


function nextKanji(){
    if (index < currentKanji.length){
        index ++;
        kanjiDisplay.innerHTML = currentKanji[index];
        readingDisplay.innerHTML = currentReading[index];
        translationDisplay.innerHTML = currentTranslation[index];
    }
}

function previousKanji(){
    if (index < currentKanji.length){
        index --;
        kanjiDisplay.innerHTML = currentKanji[index];
        readingDisplay.innerHTML = currentReading[index];
        translationDisplay.innerHTML = currentTranslation[index];
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
    else if (index === currentKanji.length - 1){
        nextBtn.disabled = true;
    }
    else{ 
        backBtn.disabled = false;
        nextBtn.disabled = false;
    }
}









