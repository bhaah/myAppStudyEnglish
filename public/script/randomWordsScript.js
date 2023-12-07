let words = [];


async function loadRandomWords(){
    closeEditor();
    await callAPIWithDates({'number':7},'getNumberOfWords').then(res=>{
        getE('random_words_list_id').innerHTML='';
        words = res;
    })
    showCards();
}



function showCards(){
    words.forEach(word=>{
        const div = document.createElement('div');
        div.style.margin = '20px';
        div.innerHTML = getCard(word);
        div.id = word.Id+'_word_container';
        getE('random_words_list_id').appendChild(div);
    })
}

function backToHome(){
    window.location.replace('../');
}

function getCard(word){
    return `
    <div style="border: 2px solid black;color: red;padding: 10px;display: flex;justify-content: space-between;background-color:aqua ;" onclick="showWord(${word.Id})">
        <div>
            <h3>${word.word}</h3>
            <h4 id="${word.Id}_meaning" style="color:transparent">${word.Meaning}</h4>
            <h5 id="${word.Id}_sentence" style="color:transparent">${word.Sentence}</h5>
        </div>
        <div style="display: flex;flex-direction: column;">
            <button style="margin: 5px;background-color: transparent;border: 0;z-index:1;" onclick="wordDone(${word.Id})"><i class="fa fa-check" aria-hidden="true"></i>
            </button>
            <button style="margin: 5px;background-color: transparent;border: 0;z-index:1;" onclick="wrong(${word.Id})"><i class="fa fa-times" aria-hidden="true"></i>
            </button>
            
        </div>
        
    </div>
    `;
}


function showWord(id){
    let mid = id+'_meaning';
    let sid = id + '_sentence';
    let color = (getE(mid).style.color==='transparent')?'red':'transparent';
    getE(mid).style.color=color;
    getE(sid).style.color= color;
}

async function wordDone(id){
    remove(id);
    await callAPI({'id':id},'wordDone');
}
async function wrong(id){
    remove(id);
    await callAPI({'id':id},'wordNotDone');
}

function remove(id){
    getE(id+'_word_container').remove();
    words = words.filter(word=>{
        if(word.Id != id) return word;
    });
    if(words.length===0) loadRandomWords();
}