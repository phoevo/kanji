let kanjiDisplay = document.querySelector("#kanji");
let readingDisplay = document.querySelector("#reading");
let translationDisplay = document.querySelector("#translation");
let nextBtn = document.querySelector("#next");
let backBtn = document.querySelector("#back");
let n5LevelBtn = document.querySelector("#n5Level");
let n4LevelBtn = document.querySelector("#n4Level");
let progress = document.querySelector("#progress");
let addLibraryBtn = document.querySelector("#addToLibrary");
let addFlashcardsBtn = document.querySelector("#addToFlashcards");
let display = document.querySelector(".display");

let index = 0;
let currentKanji;
let currentReading;
let currentTranslation;
selectList();

function selectList(){
    n5LevelBtn.addEventListener("click", function(){
        index = 0;
        nextBtn.disabled = false;
        establishLocation(n5kanji, n5reading, n5translation);
        progressNum();
        flipRemove();
        /*
        establishLocation function gets rid of the code below that that existed
        for the n5/n4LevelBtns and for the library. Too repetitive.(the irony i know..)
        currentKanji = n5kanji;
        currentReading = n5reading;
        currentTranslation = n5translation;
        kanjiDisplay.innerHTML = n5kanji[index];
        readingDisplay.innerHTML = n5reading[index];
        translationDisplay.innerHTML = n5translation[index];
        */

        
       
    })

    n4LevelBtn.addEventListener("click", function(){
        index = 0;
        nextBtn.disabled = false;
        establishLocation(n4kanji, n4reading, n4translation);
        progressNum();  
        flipRemove();
    })   
}



function progressNum(){
    progress.innerHTML = `Progress: ${index + 1}/${currentKanji.length}`
}

function displayKanji(){
    kanjiDisplay.innerHTML = currentKanji[index];
    readingDisplay.innerHTML = currentReading[index];
    translationDisplay.innerHTML = currentTranslation[index];
}

function nextKanji(){
    if (index < currentKanji.length){
        index ++;
        displayKanji();
    }
}

function previousKanji(){
    if (index < currentKanji.length){
        index --;
       displayKanji();
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


addLibraryBtn.addEventListener("click", function(){
    console.log(currentKanji[index]);
    libraryKanji.push(currentKanji[index]);
    libraryReading.push(currentReading[index]);
    libraryTranslation.push(currentTranslation[index]);

    console.log(`Library has a length of ${libraryKanji.length}`);
    console.log(libraryKanji);
    textNotification(`Added to library`);
})

let library = document.querySelector("#library");
    library.addEventListener("click", function(){
    index = 0;
    nextBtn.disabled = false;
    establishLocation(libraryKanji, libraryReading, libraryTranslation);
    progressNum();  
    flipRemove();
        
})
    
function textNotification(text){
    const p = document.createElement('p')
        p.innerText = `${text}`;
        display.appendChild(p);   
        setTimeout(() => {
            p.remove();
         }, 1000);
    }
     

function establishLocation(a, b, c){
    currentKanji = a;
    currentReading = b;
    currentTranslation = c;
    kanjiDisplay.innerHTML = a[index];
    readingDisplay.innerHTML = b[index];
    translationDisplay.innerHTML = c[index];
}    

addFlashcardsBtn.addEventListener("click", function(){
    flashcardsKanji.push(currentKanji[index]);
    flashcardsReading.push(currentReading[index]);
    flashcardsTranslation.push(currentTranslation[index]);
    

    console.log(`Flashcards has a length of ${flashcardsKanji.length}`);
    console.log(flashcardsKanji);
    textNotification(`Added to flashcards`);
})
let flashcards = document.querySelector("#flashcards");
    flashcards.addEventListener("click", function(){
    index = 0;
    nextBtn.disabled = false;
    establishLocation(flashcardsKanji, flashcardsReading, flashcardsTranslation);
    progressNum(); 
    createFlipButton();  
})

let flipBtn = document.createElement("button");

function createFlipButton(){
        flipBtn.setAttribute("id", "flipBtn");
        flipBtn.innerHTML = "Flip";
        display.appendChild(flipBtn);
}

flipBtn.addEventListener("click", function(){
    
})
       
function flipRemove(){
    flipBtn.remove();
}





            
   










