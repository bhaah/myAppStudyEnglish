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