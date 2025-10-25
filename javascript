document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    const activeCamerasEl = document.getElementById('active-cameras');
    const vehicleCountEl = document.getElementById('vehicle-count');
    const congestionLevelEl = document.getElementById('congestion-level');
    const statusMessageEl = document.getElementById('status-message');

    const statusMessages = [
        'Data stream optimized for low latency.',
        'Model inference cycle completed.',
        'Checking for system anomalies.',
        'Connection heartbeat nominal.'
    ];

    const updateDashboard = () => {
        const cameras = Math.floor(Math.random() * 5) + 8;
        const vehicles = Math.floor(Math.random() * 500) + 1200;

        let congestion = 'Low';
        let congestionColor = 'text-green-500';

        const randomCongestion = Math.random();
        if (randomCongestion > 0.85) {
            congestion = 'High';
            congestionColor = 'text-red-500';
        } else if (randomCongestion > 0.4) {
            congestion = 'Moderate';
            congestionColor = 'text-yellow-500';
        }

        activeCamerasEl.textContent = cameras;
        vehicleCountEl.textContent = vehicles.toLocaleString();
        congestionLevelEl.textContent = congestion;

        congestionLevelEl.className = `text-3xl font-bold mt-1 ${congestionColor}`;

        const randomMsg = statusMessages[Math.floor(Math.random() * statusMessages.length)];
        statusMessageEl.textContent = `${randomMsg} Next update in 5 seconds...`;

        let countdown = 5;
        const countdownInterval = setInterval(() => {
            countdown--;
            if (countdown > 0) {
                statusMessageEl.textContent = `${randomMsg} Next update in ${countdown} seconds...`;
            } else {
                clearInterval(countdownInterval);
            }
        }, 1000);
    };

    setInterval(updateDashboard, 5000);

    updateDashboard();
});
