const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outPutBox = document.querySelector("#output-box")

function compareValues(sum,luckyNumber) {
    if(sum%luckyNumber===0) {
        outPutBox.innerText=("Hurrey, your birthday is lucky!!😍");
    }else {
        outPutBox.innerText=("oopss, your birthday is not lucky! 😲 Don't worry make your own luck yourself!!!🤗")
    }
}

function checkBirtDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob)
    compareValues(sum,luckyNumber.value)
    else
    outPutBox.innerText="Please enter both the fields😑"
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum=0;
    for(let index=0;index<dob.length;index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}
checkNumberButton.addEventListener("click",checkBirtDateIsLucky)