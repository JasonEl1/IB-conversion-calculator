const url = 'https://raw.githubusercontent.com/JasonEl1/IB-conversion-calculator/main/conversions.json';

document.getElementById("Cbutton").addEventListener("click",calc);

document.addEventListener("keydown",(event) =>{
    if(event.key=="Enter"){
        document.getElementById("rawPercent").blur();
        calc();
    }
});


function calc() {

    const IBSO_table = ["<50%","50% - 60%","61% - 71%", "72% - 83%", "84% - 92%", "93% - 96%", "97% - 100%"];

    let subject = document.getElementById("subject").value;
    let rawPC = document.getElementById("rawPercent").value;

    if(rawPC >=0 && rawPC <= 100){

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const conversions = data;

        let thresholds = conversions[subject];

        let level = 0;

        for(let i = 0;i<7;i++){

            if(rawPC>=thresholds[i] && rawPC<thresholds[i+1]){
                level = i+1;
                break;
            }
            else if(i==6 && rawPC>=thresholds[i]){
                level = i+1;
                break;
            }

        }

        let finalPC = IBSO_table[level-1];

        document.getElementById("resultVal").innerHTML="Your result is : " + finalPC + " [Level " + level +"]";

    });
}
else{
    alert("Invalid input");
}
}
