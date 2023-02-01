let conversions = null;

var result = 0;
var subject;

document.getElementById("Cbutton").addEventListener("click",calc);

function calc() {

    result=document.getElementById("rawPercent").value;
    document.getElementById("resultVal").innerHTML="Your result is : " + result;

    console.log(document.getElementById("rawPercent").value);
    console.log(document.getElementById("subject").value);

}


/**
 * https://www.thestudentroom.co.uk/international-baccalaureate/ib-grade-boundaries
 * 
 * Chemistry Level: HL May 2021 Timezone: 2

7: 80-100
6: 67-79
5: 50-66
4: 35-49
3: 20-34
2: 15-19
1: 0-14
 * 
 * English A: Language and Literature Level: HL May 2021 Timezone: 2

7: 74-100
6: 62-73
5: 50-61
4: 38-49
3: 25-37
2: 12-24
1: 0-11

French B: SL May 2021 Timezone: 0

7: 80-100
6: 65-79
5: 49-64
4: 33-48
3: 21-32
2: 10-20
1: 0-9

History Level: HL May 2021 Timezone: 2

7: 69-100
6: 57-68
5: 45-56
4: 32-44
3: 22-31
2: 8-21
1: 0-7

Mathematics: analysis and approaches Level: SL May 2021 Timezone: 2

7: 72-100
6: 58-71
5: 40-57
4: 23-39
3: 12-22
2: 4-11
1: 0-3

Physics Level: SL May 2021 Timezone: 2

7: 63-100
6: 50-62
5: 37-49
4: 26-36
3: 15-25
2: 10-14
1: 0-9


 */