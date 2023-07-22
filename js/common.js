function subTotalAmount(elementId){
    const subTotal=document.getElementById(elementId);
    const subTotalString= subTotal.innerText;
    const subTotalNumber=parseInt(subTotalString);
    return subTotalNumber;
}

function totalCasePhonePrice (){
    const phonePrice=subTotalAmount('phone-total-price');

    const casePrice=subTotalAmount('price');
    const currentBalence=phonePrice+casePrice;

    const subTotal=document.getElementById('sub-Total');
    subTotal.innerText=currentBalence;
}