const url = 'https://raw.githubusercontent.com/MTN73/IB-conversion-calculator/main/conversions.json';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const conversions = data;
        console.log(conversions);
    });

document.getElementById("Cbutton").addEventListener("click",calc);

function calc() {

    result=document.getElementById("rawPercent").value;
    document.getElementById("resultVal").innerHTML="Your result is : " + result;
    let subject = document.getElementById("subject").value;
    let rawPC = document.getElementById("rawPercent").value;

    console.log(rawPC);
    console.log(subject);

}