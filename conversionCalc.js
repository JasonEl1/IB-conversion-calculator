const url = 'https://raw.githubusercontent.com/MTN73/IB-conversion-calculator/main/conversions.json';

document.getElementById("Cbutton").addEventListener("click",calc);

function calc() {

    let subject = document.getElementById("subject").value;
    let rawPC = document.getElementById("rawPercent").value;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const conversions = data;

        let thresholds = conversions[subject];

        let level = 0;

        for(let i = 0;i<7;i++){

            if(rawPC>=thresholds[i] && rawPC<thresholds[i+1]){

                console.log(i+1);
                level = i+1;
                break;

            }
            else if(i==6 && rawPC>=thresholds[i]){

                console.log(i+1);
                level = i+1;
                break;

            }

        }

        document.getElementById("resultVal").innerHTML="Your result is : " + level;

    });

}