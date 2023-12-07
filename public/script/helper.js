async function callAPI(map,reqName){
    const formData = new FormData();
    Object.keys(map).forEach(key=>{
        formData.append(key,map[key]);
    });
    return await fetch('https://backend-study-english.onrender.com/api/App/'+reqName,{
        method:'POST',body:formData
    }).then(response=>{
        return response.json();
    }).then(result=>{
        return result.ReturnValue;
    }).catch(err=>console.log(err));
}

function getE(id){
    return document.getElementById(id);
}

let dates = [];

function addDate(date){
    if(!dates.includes(date)){
        dates.push(date);
    }
}

async function callAPIWithDates(map,reqName){
    const formData = new FormData();
    Object.keys(map).forEach(key=>{
        formData.append(key,map[key]);
    });
    dates.forEach((date,index)=>{
        formData.append(`datesString[${index}]`,date)
        console.log(date + ' appendedd') ;   
    });
    return await fetch('https://backend-study-english.onrender.com/api/App/'+reqName,{
        method:'POST',body:formData
    }).then(response=>{
        return response.json();
    }).then(result=>{
        return result.ReturnValue;
    }).catch(err=>console.log(err));
}

function getDates(){
    return dates;
}

function deleteDateFromList(date){
    dates = dates.filter(e=>e!==date);
}
function disableAddDateBtn(){
    getE('add_new_date_btn').removeAttribute('disabled');
}

function addNewDate(){
    addDateToList(getE('new_date_input').value);
    getE('new_date_input').value = '';
    getE('add_new_date_btn').disabled=true ;
}

function addDateToList(date){
    addDate(date);
    getE('list_of_dates_div').innerHTML = '';
    getDates().forEach(date=>{
        addDateToHTML(date);
    })
}

function addDateToHTML(date){
    const el = `
    <h6>${date}</h6>
    <button style="background-color: transparent;color: black;border: 0;" onclick="deleteDate('${date}')">delete</button>
    `
    const div = document.createElement('div');
    div.id = date;
    div.style = 'background-color: #198754;padding: 10px;border-radius: 5px;display: flex;justify-content: space-between; margin: 5px;';
    div.innerHTML=el;
    getE('list_of_dates_div').appendChild(div);
}

function deleteDate(date){
    console.log(date);
    console.log(getE(date));
    deleteDateFromList(date);
    getE(date).remove();
}

function closeEditor(){
    getE('dates_editor_id').style.display='none';
}
function openEditor(){
    getE('dates_editor_id').style.display='flex';
}