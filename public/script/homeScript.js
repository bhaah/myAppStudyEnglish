function addWord(){
    let cid='_input_id';
    let word = getE('word'+cid).value;
    let meaning = getE('meaning'+cid).value;
    let sentence = getE('sentence'+cid).value?getE('sentence'+cid).value:'no sentence';
    if(word && meaning){
        const map = {
            'word':word,'meaning':meaning,'sentence':sentence
        };
        callAPI(map,'addWord').then(res =>{
            console.log(res);
            if(res){
                getE('sentence'+cid).value ='';

                getE('meaning'+cid).value=''
                getE('word'+cid).value=''
            }
           
        })
    }

    
}

function loadFirstPage(){
    console.log('onload')
    getDates().forEach(date=>{
        addDateToHTML(date);
    })
}

function openAllWords(){
    window.location.assign('./allWords');

}

function openRandomWords(){
    window.location.assign('./randomWords');
}



