const dob = document.querySelector("#dob");
const luckyNum = document.querySelector("#luckyNumber");
const btn = document.querySelector("#btn");

const output = document.querySelector("#output");



function checkYourBdayLucky(){
    const valuedDob = dob.value.replaceAll("-","");
    const valuedLuckyNum = luckyNum.value;
    const sum = calculateSum(valuedDob);
    if(sum&&valuedDob&&valuedLuckyNum){
    finalCalculation(sum,valuedLuckyNum);}
    else{
        output.value="Dont leave fields missing";
    }
}

function calculateSum(valuedDob){
    let sum = 0;
    for(let index in valuedDob){
      sum = sum + Number(valuedDob.charAt(index)); 
    }
    return sum;
}

function finalCalculation(sum,luckyNumber){
    if(sum % luckyNumber === 0){
        output.value="Lucky";
    }
    else{
        output.value="Dont believe in Luck";
    }
}

btn.addEventListener('click', checkYourBdayLucky)