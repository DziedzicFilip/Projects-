

function updateCurrentTime() {
    var currentTimeElement = document.getElementById("currentTime");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = "Obecny czas " + hours + ":" + minutes + ":" + seconds;
    currentTimeElement.textContent = formattedTime;
}


setInterval(updateCurrentTime, 1000);
updateCurrentTime();