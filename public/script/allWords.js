let allWords = [] ;


async function allWordsLoad(){
    closeEditor();
    await callAPIWithDates({},'getAllWords').then(res=>{
        allWords=res;
    });
    showList();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
}
function showList(){
    getE('words_list_id').innerHTML='';
    shuffleArray(allWords);
    allWords.forEach(w=>{
        const div = document.createElement('div');
        div.style.display ='flex';
        div.style.border = '1px solid red';
        div.style.borderRadius = '3px';
        div.style.marginBottom='5px';
        div.style.position='relative';
        div.style.backgroundColor='white';
        div.style.justifyContent = 'space-between';
        div.onclick = ()=>showMeaning(w.Id);
        div.innerHTML=getWord(w);
        getE('words_list_id').appendChild(div);    
    })
}

function getWord(word){
    return `
   
        <p style="margin: 15px;color: red;font-size: x-large;">${word.word} </p>
        <div style="">
            <p style="margin: 15px;color: transparent;font-size: x-large;" id="${word.Id}_meaning_id_all_words_page">${word.Meaning}</p>
            <p style="margin: 15px;color: transparent;font-size: x-large;" id="${word.Id}_sentence_id_all_words_page">${word.Sentence}</p>
        </div>
    `
}

function showMeaning(id){
    let restId = '_id_all_words_page';
    let sid = id+'_sentence'+restId;
    let mid = id + '_meaning'+restId;
    let meaningCurrColor = getE(mid).style.color;
    let sentenceCurrMeaning = getE(sid).style.color;
    if(meaningCurrColor==='transparent' && sentenceCurrMeaning==='transparent') {
        sentenceCurrMeaning='red';
    }
    else if(meaningCurrColor==='transparent') {
        meaningCurrColor = 'red';
    }
    else{
        sentenceCurrMeaning='transparent';
        meaningCurrColor='transparent';
    }
    
    getE(mid).style.color=meaningCurrColor;
    getE(sid).style.color= sentenceCurrMeaning ;
}

function generateWord(word){
    
    for(let index = 0; index<word.length ; x++){
        if(Math.random()<0.4){
            word=replaceChar(word,index);
        }
    }
    return word;
}

function replaceChar(originalString,index){
    let char = originalString[index];
    console.log(typeof char);
    char =char.toUpperCase();
    originalString = originalString.substring(0,index)+char+originalString.substring(index+1);
    return originalString;
    
}