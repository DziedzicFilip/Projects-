function calculateReservation() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var checkInDate = document.getElementById("checkInDate").value;
    var checkOutDate = document.getElementById("checkOutDate").value;
    var roomType = document.getElementById("roomType").value;
    var promoCode = document.getElementById("promoCode").value; 

    var numberOfNights = calculateNumberOfNights(checkInDate, checkOutDate);
    var totalPrice = calculateTotalPrice(numberOfNights, roomType, promoCode); 

    var resultMessage = "Witaj " + firstName + " " + lastName + "! Twój pobyt potrwa " + numberOfNights + " nocy. Całkowity koszt to " + totalPrice + " zł.";
    document.getElementById("result").innerHTML = resultMessage;
}
function calculateNumberOfNights(checkInDate, checkOutDate) {
    var startDate = new Date(checkInDate);
    var endDate = new Date(checkOutDate);
    var timeDifference = endDate.getTime() - startDate.getTime();
    var numberOfNights = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return numberOfNights;
}

function calculateTotalPrice(numberOfNights, roomType, promoCode) {
    var pricePerNight = 0;

    switch (roomType) {
        case "luxury":
            pricePerNight = 300;
            break;
        case "business":
            pricePerNight = 200;
            break;
        case "comfort":
            pricePerNight = 150;
            break;
        default:
            pricePerNight = 150;
    }


    

    var totalPrice = numberOfNights * pricePerNight;
    if (promoCode === "50minusL" && roomType === "luxury") {
        totalPrice /= 2; 
    }
    return totalPrice;
}