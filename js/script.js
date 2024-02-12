window.onload = function () {
    var interval;
    var msCount = 0;
    var secCount = 0;
    var minCount = 0;

    var msElement = document.getElementById("ms");
    var secElement = document.getElementById("sec");
    var minElement = document.getElementById("min");

    var startButton = document.getElementById("btn-start");
    var stopButton = document.getElementById("btn-stop");
    var resetButton = document.getElementById("btn-reset");

    startButton.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startStopReset, 10);
    }

    stopButton.onclick = function () {
        clearInterval(interval);
    }

    resetButton.onclick = function () {
        clearInterval(interval);
        msCount = 0;
        secCount = 0;
        minCount = 0;
        updateDisplay();
    }

    function startStopReset() {
        msCount++;

        if (msCount > 99) {
            msCount = 0;
            secCount++;

            if (secCount > 59) {
                secCount = 0;
                minCount++;
            }
        }

        updateDisplay();
    }

    function updateDisplay() {
        msElement.innerText = msCount < 10 ? '0' + msCount : msCount;
        secElement.innerText = secCount < 10 ? '0' + secCount : secCount;
        minElement.innerText = minCount < 10 ? '0' + minCount : minCount;
    }
}