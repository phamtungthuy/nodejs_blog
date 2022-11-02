// Buy now java script
var total_man = 0;
var total_pack = 0;
var total_size = 0;
var total_extras = 0;
var totalCost = 0;
var count = 1;
var final_order = 0;
var loyalty = 0;

var ids = ["", "current_order", "pack_order", "size_field", "extra_field", "total_field"];
var headings = ["", "Manufacturer: ", "Package: ", "Size: ", "Extras: <br/>", "Total: "];

var buyForm = document.getElementById("buyNowForm");

function handleForm(event) { event.preventDefault(); }
buyForm.addEventListener('submit', handleForm);

if (localStorage["loyalty_TeaHouse"] == null || localStorage["loyalty_TeaHouse"] == NaN || localStorage["loyalty_TeaHouse"] == undefined) {
    localStorage["loyalty_TeaHouse"] = "0";
}

//Place Order Function
function calLoyalty() {
    if (localStorage["loyalty_TeaHouse"] == null || localStorage["loyalty_TeaHouse"] == NaN || localStorage["loyalty_TeaHouse"] == undefined) {
        localStorage["loyalty_TeaHouse"] = "0";
    }
    if (count > 5) {
        var confirmationMessage = confirm("You have " + (count - 1) + " item(s) in your order, do you wish to checkout?");
        if (confirmationMessage == true) {
            var currentorder_loyalty = (count - 1) * 20;
            var previousorder_loyalty = localStorage["loyalty_TeaHouse"];
            localStorage["loyalty_TeaHouse"] = currentorder_loyalty + parseInt(previousorder_loyalty);
            alert("You have earned " + currentorder_loyalty + " points for your recent order\n" + "Total Earned Points: " + localStorage["loyalty_TeaHouse"]);
            alert("Thank you for purchasing at Tea House, have a nice day :)");
            location.reload();
        }

    } else if (count > 1) {
        var confirmationMessage = confirm("You have " + (count - 1) + " item(s) in your order, do you wish to checkout?");
        if (confirmationMessage == true) {
            alert("Thank you for purchasing at Tea House, have a nice day :)");
            location.reload();
        }

    } else {
        alert("Sorry you haven't selected any orders");
        location.reload();
    }
}


//Check Loyalty Button Function
function checkLoyalty() {
    var previousorder_loyalty = localStorage["loyalty_TeaHouse"];

    if (localStorage["loyalty_TeaHouse"] == null) {
        alert("Total Loyalty Points Earned : 0 ");
    } else {
        alert("Total Loyalty Points Earned : " + previousorder_loyalty);
    }

}


//Add to favourites function
function addToFav() {
    if (document.getElementById(ids[1]).innerHTML != "" & document.getElementById(ids[2]).innerHTML != "" & document.getElementById(ids[3]).innerHTML != "") {
        var favourite_order = [];
        for (let a = 0; a < 5; a++) {
            favourite_order[a] = document.getElementById(ids[a + 1]).innerHTML;
        }
        localStorage["fav_TeaHouse"] = JSON.stringify(favourite_order);
        alert("Your Order has been added to the favourite");
    }

}


//Add the favourite to Order
function addFavToOrder() {

    if (localStorage.getItem("fav_TeaHouse") === null) {
        alert("There is no order added to favourites");
    } else {
        var getFav = JSON.parse(localStorage["fav_TeaHouse"]);

        var totalOrderTable = document.getElementById("totalOrderTable");
        var addRow = totalOrderTable.insertRow(-1);

        for (let i = 0; i <= 5; i++) {
            var tempcell = addRow.insertCell(i);

            if (i == 0) {
                tempcell.innerHTML = "Order " + count;
            } else {
                tempcell.innerHTML = headings[i] + getFav[i - 1];
            }
        }
        count++;
        clearFields();
        calTotalCost(parseInt(getFav[4]));
    }
    var rowLength = document.getElementById('totalOrderTable').rows.length;
    //rows = number of orders, cells in each row represent order attributes.
    for (var i = 0; i < rowLength; i++) {
        document.getElementById('totalOrderTable').rows[i].cells[0].className = "card";
        document.getElementById('totalOrderTable').rows[i].cells[5].className = "card";
    }
    total_man = 0;
    total_pack = 0;
    total_size = 0;
    total_extras = 0;
}

//Function that is required to add the Current Order to the Total Order Table
function addtoTotalOrder() {
    if (document.getElementById(ids[1]).innerHTML != "" & document.getElementById(ids[2]).innerHTML != "" & document.getElementById(ids[3]).innerHTML != "") {
        var totalOrderTable = document.getElementById("totalOrderTable");
        var addRow = totalOrderTable.insertRow(-1);
        for (let i = 0; i <= 5; i++) {
            var tempcell = addRow.insertCell(i);
            if (i == 0) {
                tempcell.innerHTML = "Order " + count;
            } else {
                tempcell.innerHTML = headings[i] + document.getElementById(ids[i]).innerHTML;
            }
        }
        var rowLength = document.getElementById('totalOrderTable').rows.length;
        //rows = number of orders, cells in each row represent order attributes.
        for (var i = 0; i < rowLength; i++) {
            document.getElementById('totalOrderTable').rows[i].cells[0].className = "card";
            document.getElementById('totalOrderTable').rows[i].cells[5].className = "card";
        }
        calTotalCost(parseInt(document.getElementById(ids[5]).innerHTML));
        clearFields();
        count++;
        total_man = 0;
        total_pack = 0;
        total_size = 0;
        total_extras = 0;
    }
}


//Function that is responsible to clear the fields
function clearFields() {
    for (let a = 5; a >= 1; a--) {
        document.getElementById(ids[a]).innerHTML = "";
    }
    document.getElementById("total_field").innerHTML = "0";
    document.getElementById("buyNowForm").reset();
    window.scrollTo(0, 800);
}



//Function that is required to find the Grand Total
function calTotalCost(value) {
    final_order = final_order + value;
    document.getElementById("grand_total").innerHTML = "Grand Total = " + final_order;
}


//Gets the information of the selected option in the dropdown
function cal() {
    var man_name = tea_manufacturer.options[tea_manufacturer.selectedIndex].text;
    var man_price = document.getElementById("tea_manufacturer").value;


    if (man_name == "Select Tea") {
        document.getElementById("current_order").innerHTML = "";
        total_man = 0;
    } else {

        var selectedvalueprice = tea_manufacturer.options[tea_manufacturer.selectedIndex].value;
        document.getElementById("man_select_name").innerHTML = "(Rs." + selectedvalueprice + ")";

        document.getElementById("current_order").innerHTML = man_name;
        total_man = parseInt(man_price);
    }
    total_man = parseInt(man_price);

    totalcostcal();
}


//Gets the information of the selected package
function getValue(radio) {
    var pack_price = radio.value;
    var pack_name = radio.nextElementSibling.innerText;

    document.getElementById("pack_order").innerHTML = pack_name;
    total_pack = parseInt(pack_price);
    totalcostcal();
}


//Gets the information of the selected size
function getSizeValue(radio) {
    var size_price = radio.value;
    var size_name = radio.nextElementSibling.innerText;
    document.getElementById("size_field").innerHTML = size_name;
    total_size = parseInt(size_price);
    totalcostcal();
}


//Gets the information of the selected checkboxes
function getCheckbox() {
    var xtraTotal = 0;
    var val = 0;
    var xtraname = "";

    var checkBoxes = document.getElementById("extrasContainer");
    var checkValue = checkBoxes.getElementsByTagName("input");

    for (let a = 0; a < checkValue.length; a++) {

        if (checkValue[a].checked == true) {
            val = parseInt(checkValue[a].value);
            xtraname += checkValue[a].name + '<br>';
        } else {
            val = 0;
            xtraname += "";
        }
        xtraTotal = xtraTotal + val;
    }
    total_extras = xtraTotal;
    document.getElementById("extra_field").innerHTML = xtraname;
    totalcostcal();
}



// Calculates the Total Cost for a particular order
function totalcostcal() {
    totalCost = total_man + total_pack + total_size + total_extras;
    document.getElementById("total_field").innerHTML = totalCost;
}