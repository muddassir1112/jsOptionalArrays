var q1 = ["Q1", 340, 604, 38, 335, 65,  35, 336, 484, 80];
var q2 = ["Q2", 680, 583, 10, 684, 490, 38, 595, 594, 39];
var q3 = ["Q3", 535, 490, 50, 389, 385, 15, 366, 385, 20];
var quantity = [q1, q2, q3]
let maxEgg = 0;
let maxQuar = "";
let minMilk = 0;
let locationMilk = "";
console.log(quantity)
let table = `<table border=1 class="inputTable">
<tr> <th colspan="4">Location = 'Kolkata'</th>
<th colspan="3">Location = 'Delhi'</th>
<th colspan="3">Location = 'Mumbai'</th>
</tr>
<tr> <td colspan = "4">item</td>
<td colspan = "3">item</td>
<td colspan = "3">item</td>
</tr>
<tr>
<th>Time</th>
<th>Milk</th>
<th>Egg</th>
<th>Bread</th>
<th>Milk</th>
<th>Egg</th>
<th>Bread</th>
<th>Milk</th>
<th>Egg</th>
<th>Bread</th>
</tr>
`
document.getElementById('display').innerHTML = table
for (var i = 0, l1 = quantity.length; i < l1; i++) {
    table +="<tr>"
    // This loop is for inner-arrays
    for (var j = 0, l2 = quantity[i].length; j < l2; j++) {
        // Accessing each elements of inner-array
        table+="<td>"+quantity[i][j]+"</td>"       
        }
      table +="</tr>"  
}
table += "</table>"
document.getElementById('display').innerHTML =  table 
function quarterMaxEgg () {
    let temp=0;
    for (var i = 0,  l1 = quantity.length; i < l1; i++ ){
        for (var j = 2, l2 = quantity[i].length; j < l2; j++) {
             temp = quantity[i][2] + quantity[i][5] + quantity[i][8]       
            }
            if(maxEgg < temp) {
                maxEgg = temp;
                maxQuar = quantity[i][0]
            } 
    }
   return document.getElementById("quarterWithMaxSale").innerHTML = 
   `The quarter ${maxQuar} has the maximum sale of Eggs which is ${maxEgg}`
}
quarterMaxEgg();

function minimumConsumptionOfMilk(){
    let tempKolkata = 0;
    let tempDelhi = 0;
    let tempMumbai = 0;
    let city = "";
    for (var i = 0,  l1 = quantity.length; i < l1; i++){
            tempKolkata += quantity[i][1];
            tempDelhi += quantity[i][4];
            tempMumbai += quantity[i][7]; 
    }
    if(tempKolkata < tempDelhi){
        if(tempKolkata < tempMumbai){
            city = "Kolkata"
            console.log("Samallest is Kolkata")
        }
        else {
            city = "Mumbai"
            console.log("smallest is Mumbai")
        }
    }
    else if(tempDelhi < tempMumbai){
        city = "Delhi"
        console.log("smallest is Delhi")
    }
    else {
        city = "Mumbai"
        console.log("smallest is Mumbai")
    }
}
minimumConsumptionOfMilk();