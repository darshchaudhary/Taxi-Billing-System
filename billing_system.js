
var cName, travelDate;
var dist;
var isMicro, isMini, isSedan, isXUV, isAC, isNonAC, isOut, isLocal;
var carType;
var total;
var flag;


function doWork() {
    cName, travelDate = "";
    dist = 0;
    isMicro, isMini, isSedan, isXUV, isAC, isNonAC, isOut, isLocal = false;
    carType = "";
    total = 0.0;
    flag = true;
    
    
    cName = document.getElementById("custName").value;
    travelDate = document.getElementById("travelDate").value;
    dist = document.getElementById("distTravelled").value;
    isMicro = document.getElementById("microCar").checked;
    isMini = document.getElementById("miniCar").checked;
    isSedan = document.getElementById("sedanCar").checked;
    isXUV = document.getElementById("xuvCar").checked;
    isAC = document.getElementById("acCar").checked;
    isNonAC = document.getElementById("nonacCar").checked;
    isOut = document.getElementById("outJourney").checked;
    isLocal = document.getElementById("localJourney").checked;
    
    if (isMicro) {
        carType = "Micro";
    } else if (isMini) {
        carType = "Mini";
    } else if (isSedan) {
        carType = 'Sedan';
    } else if (isXUV) {
        carType = "XUV";
    }
    
    function calculateBill(acRate, nonAcRate, dist10, dist20, distMore20) {
        var rate = 0.0;
        if (isAC) {
                rate += acRate;
            } else if (isNonAC) {
                rate += nonAcRate
            } else {
                alert('PLEASE SELECT ALL OPTIONS!');
                flag = false;
            }
            
        if (dist > 0 && dist <= 10) {
                rate += dist10*dist;
            } else if (dist > 10 && dist <= 20) {
                rate += dist20*dist;
            } else if (dist > 20) {
                rate += distMore20*dist;
            } else {
                alert('PLEASE ENTER VALIID VALUES!');
                flag = false;
            }
        
        return rate;
        
    }
    if (cName == "" || travelDate == "" ) {
        alert('PLEASE FILL ALL FIELDS!');
        flag = false;
    }
    if (isOut == false && isLocal == false) {
        alert('PLEASE SELECT ALL OPTIONS!');
        flag = false;
    } 
    if ((carType == "Mini" || carType == "Micro") && isOut) {
        alert('Mini and Micro cars cannot go outstaion.')
        flag = false;
    }

    
    switch (carType) {
        case "Micro":
           total += calculateBill(50.0, 30.0, 6.0, 5.0, 4.0);
            break;
        case "Mini":
            total += calculateBill(80.0, 60.0, 7.0, 6.0, 5.0);
            break;
        case "Sedan":
            total += calculateBill(150.0, 100.0, 8.5, 7.0, 6.0);
            if (isOut) {
                total += 80.0;
            }
            break;
        case "XUV":
            total += calculateBill(250.0, 150.0, 10.0, 8.0, 7.0);
            if (isOut) {
                total += 100.0;
            }
            break;
    }
    if (flag == true) {
        document.getElementById("printResult").innerHTML = "Customer Name: " + cName + "<br><br>Distance Travelled: " + dist + "km<br><br>Travel Date: " + travelDate + "<br><br>Car Type: " + carType + "<br><br>Total Amount: Rs. " + total;
    }
}
