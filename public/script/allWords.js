let allWords = [] ;


async function allWordsLoad(){
    await callAPI({},'getAllWords').then(res=>{
        allWords=res;
    });
    showList();
}


function showList(){
    
    allWords.forEach(w=>{
        const div = document.createElement('div');
        div.style.display ='flex';
        div.style.border = '1px solid red';
        div.style.borderRadius = '3px';
        div.style.marginBottom='5px';
        div.style.position='relative';
        div.style.backgroundColor='white';
        div.style.justifyContent = 'space-between';
        div.innerHTML=getWord(w);
        getE('words_list_id').appendChild(div);    
    })
}

function getWord(word){
    return `
   
        <p style="margin: 15px;color: red;font-size: x-large;">${word.word} </p>
        <div style="">
            <p style="margin: 15px;color: red;font-size: x-large;">${word.Meaning}</p>
            <p style="margin: 15px;color: red;font-size: x-large;">${word.Sentence}</p>
        </div>
    `
}