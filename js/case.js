function updateCaseNumber(isIncript){
    const caseInput=document.getElementById('case-input-number');
    const caseInputString= caseInput.value;
    const caseInputNumber= parseInt(caseInputString);
    let newCaseNumber;

    if(isIncript===true){
        newCaseNumber= caseInputNumber+1;
    }
    else{
        newCaseNumber= caseInputNumber-1;
        
    }
    caseInput.value=newCaseNumber;
    
  return newCaseNumber;  
}

function updateCasePrice (caseNumber){
    const updatePrice=caseNumber*59;
    const price=document.getElementById('price');
    price.innerText=updatePrice;
}

document.getElementById('case-pluse-btn').addEventListener('click', function(){
    const caseNumber=updateCaseNumber(true);
    updateCasePrice(caseNumber);

})

document.getElementById('case-minuse-btn').addEventListener('click', function(){
    const caseNumber= updateCaseNumber(false);
    updateCasePrice(caseNumber);
})