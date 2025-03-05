// Open Popup
document.getElementById('popupButton').addEventListener('click', function() {
    document.getElementById('popup').classList.toggle('popup--active');
    document.querySelector('.popup-button').classList.toggle('active'); 
});

// Close Popup
document.querySelector('.popup__close').addEventListener('click', function() {
    document.getElementById('popup').classList.remove('popup--active');
    document.querySelector('.popup-button').classList.remove('active'); 
});

//Timer 
document.addEventListener("DOMContentLoaded", function () {
    function updateTimer() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(23, 59, 59, 999);

        const timeDiff = midnight - now;

        if (timeDiff <= 0) {
            setTimeout(updateTimer, 1000);
            return;
        }

        const hours = String(Math.floor((timeDiff / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((timeDiff / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((timeDiff / 1000) % 60)).padStart(2, "0");

        const formattedTime = `${hours}h ${minutes}m ${seconds}s`;

        document.querySelectorAll(".popup__timer p, .popup__item-timer").forEach(el => {
            el.textContent = formattedTime;
        });
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    //Balance
    const balanceElement = document.querySelector(".popup__balance-value");

    document.querySelectorAll(".popup__item").forEach(item => {
        item.addEventListener("click", function () {
            const itemBalanceElement = item.querySelector(".popup__item-button span");
            const itemBalance = itemBalanceElement ? itemBalanceElement.textContent.trim() : "2000";

            balanceElement.textContent = itemBalance; 
        });
    });
});
