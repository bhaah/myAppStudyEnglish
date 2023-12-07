let allWords = [] ;


async function allWordsLoad(){
    closeEditor();
    await callAPIWithDates({},'getAllWords').then(res=>{
        allWords=res;
    });
    showList();
}


function showList(){
    getE('words_list_id').innerHTML='';
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
    let sId = id+'_sentence'+restId;
    let mId = id + '_meaning'+restId;
    let colorToUpdate = getE(sId).style.color==='red'?'transparent':'red';
    getE(mId).style.color=colorToUpdate;
    getE(sId).style.color = colorToUpdate;
}

