function phoneNumberUpdate(isIncreapt){
    const phoneInput=document.getElementById('phone-input-number');
    const phoneInputString=phoneInput.value;
    const phoneInputNumber= parseInt(phoneInputString);

    let phoneNumbarUpdate;
    if(isIncreapt=== true){
        phoneNumbarUpdate=phoneInputNumber+1;
    }
    else{
        phoneNumbarUpdate=phoneInputNumber-1;
    }

    phoneInput.value=phoneNumbarUpdate;

    return phoneNumbarUpdate;
}

function phonePriceUpdate(phoneNumber){
    const phoneNumberPrice=phoneNumber*1219;
    const phonePrice=document.getElementById('phone-total-price');
    phonePrice.innerText=phoneNumberPrice;
}

document.getElementById('phone-plus-btn').addEventListener('click',function(){
    const phoneNumber=phoneNumberUpdate(true);

    phonePriceUpdate(phoneNumber);
})

document.getElementById('phone-minus-btn').addEventListener('click',function(){
    const phoneNumber=phoneNumberUpdate(false);
    phonePriceUpdate(phoneNumber);
})