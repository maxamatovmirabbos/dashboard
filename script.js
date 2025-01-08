//hello world and you~
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('trendsGraph').getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, 'rgba(67, 24, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(67, 24, 255, 0)');

    const data = {
        labels: Array(12).fill(''),
        datasets: [{
            label: 'Today',
            data: [10, 15, 8, 30, 25, 38, 20, 35, 25, 38, 20, 30],
            borderColor: '#4318FF',
            backgroundColor: gradient,
            tension: 0.4,
            fill: true
        }, {
            label: 'Yesterday',
            data: [5, 20, 12, 25, 30, 25, 15, 30, 20, 25, 15, 25],
            borderColor: '#E9EDF7',
            borderWidth: 2,
            tension: 0.4,
            fill: false
        }]
    };

    new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    display: false
                },
                x: {
                    display: false
                }
            },
            elements: {
                point: {
                    radius: 0
                }
            }
        }
    });
});