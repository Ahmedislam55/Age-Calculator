let btnCalc = document.getElementById("btn-calculate");
let inputData = document.getElementById("birthdate");
let resultData = document.getElementById("result");
btnCalc.addEventListener("click", () => {
    const birthdayValues = inputData.value;
    if (birthdayValues==="") {
        alert("Please enter your date of birth");
    }
    else
    {
        const age = getAge(birthdayValues);
        resultData.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
})
function getAge(birthdayValue) {
const currentData = new Date();
const birthdayData = new Date(birthdayValue);
let age = currentData.getFullYear() - birthdayData.getFullYear();
const month = currentData.getMonth() - birthdayData.getMonth();
if (month <0 || (month === 0 && currentData.getDate() < birthdayData.getDate())) {
    age--;
}
return age ;
}