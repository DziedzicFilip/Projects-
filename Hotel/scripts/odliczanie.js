

    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    function updateTimer() {
      
        var currentDate = new Date();
        var timeDiff = targetDate.getTime() - currentDate.getTime();

        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('h2-left').innerHTML = days + ' dni ' + hours + ' godzin ' + minutes + ' minut ' + seconds + ' sekund ';

      
       
    }

    
    var timerInterval = setInterval(updateTimer, 1000);
