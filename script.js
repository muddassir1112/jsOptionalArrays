var q1 = ["Q1", 340, 604, 38, 335, 65, 35, 336, 484, 80];
var q2 = ["Q2", 680, 583, 10, 684, 490, 38, 595, 594, 39];
var q3 = ["Q3", 535, 490, 50, 389, 385, 15, 366, 385, 20];
var quantity = [q1, q2, q3];
let maxEgg = 0;
let maxQuar = "";
let minMilk = 0;
let locationMilk = "";
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
    `;
    //function to display main table
function display() {
  for (var i = 0, l1 = quantity.length; i < l1; i++) {
    table += "<tr>";
    // This loop is for inner-arrays
    for (var j = 0, l2 = quantity[i].length; j < l2; j++) {
      // Accessing each elements of inner-array
      table += "<td>" + quantity[i][j] + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("display").innerHTML = table;
}
display();
//function to find the Quarter which has the maximum sale of Egg
function quarterMaxEgg() {
  let temp = 0;
  for (var i = 0, l1 = quantity.length; i < l1; i++) {
    for (var j = 2, l2 = quantity[i].length; j < l2; j++) {
      temp = quantity[i][2] + quantity[i][5] + quantity[i][8];
    }
    if (maxEgg < temp) {
      maxEgg = temp;
      maxQuar = quantity[i][0];
    }
  }
  return (document.getElementById(
    "quarterWithMaxSale"
  ).innerHTML = `The quarter ${maxQuar} has the maximum sale of Eggs which is ${maxEgg}`);
}
quarterMaxEgg();
//function to find the location which has the minimum consumption of Milk
function minimumConsumptionOfMilk() {
  let tempKolkata = 0;
  let tempDelhi = 0;
  let tempMumbai = 0;
  let city = "";
  for (var i = 0, l1 = quantity.length; i < l1; i++) {
    tempKolkata += quantity[i][1];
    tempDelhi += quantity[i][4];
    tempMumbai += quantity[i][7];
  }
  if (tempKolkata < tempDelhi && tempKolkata < tempMumbai) {
    city = "Kolkata";
  } else if (tempDelhi < tempMumbai) {
    city = "Delhi";
  } else {
    city = "Mumbai";
  }
  document.getElementById(
    "locationWithMinSaleOfMilk"
  ).innerHTML = `${city} has the minimum consumption of Milk.`;
}
minimumConsumptionOfMilk();
//function to find the location which has the minimum consumption of bread
function minimumConsumptionOfBread() {
  let tempKolkata = 0;
  let tempDelhi = 0;
  let tempMumbai = 0;
  let arr = [];
  let city = "";
  for (var i = 0, l1 = quantity.length; i < l1; i++) {
    tempKolkata += quantity[i][3];
    tempDelhi += quantity[i][6];
    tempMumbai += quantity[i][9];
  }
  if (tempKolkata < tempDelhi && tempKolkata < tempMumbai) {
    city = "Kolkata";
  } else if (tempDelhi < tempMumbai) {
    city = "Delhi";
  } else {
    city = "Mumbai";
  }
  document.getElementById(
    "locationWithMinSaleOfBread"
  ).innerHTML = `${city} has the minimum consumption of Bread.`;
  //function to delete the location which has the minimum consumption of Bread
  arr = quantity.map(function (val) {
    return val.splice(4, 3);
  });
  //display table after removing the location which has the minimum consumption of Bread
  let table = `<table border=1 class="inputTable">
            <tr> <th colspan="4">Location = 'Kolkata'</th>
            <th colspan="3">Location = 'Mumbai'</th>
            </tr>
            <tr> <td colspan = "4">item</td>
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
            </tr> `;
  for (var i = 0, l1 = quantity.length; i < l1; i++) {
    table += "<tr>";
    // This loop is for inner-arrays
    for (var j = 0, l2 = quantity[i].length; j < l2; j++) {
      // Accessing each elements of inner-array
      table += "<td>" + quantity[i][j] + "</td>";
    }
    table += "</tr>";
  }
  table += "</table>";
  document.getElementById("displayLatestTable").innerHTML = table;
}
minimumConsumptionOfBread();
