import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ bulkResults }) => {
    const labels = bulkResults.map((_, index) => index + 1);
    const negativeData = bulkResults.map(result => result.probability[0].toFixed(3));
    const positiveData = bulkResults.map(result => result.probability[1].toFixed(3));

    const lineData = {
        labels,
        datasets: [
            {
                label: 'Negative Probability (Line)',
                labelColor: '#ACABAD',
                data: negativeData,
                borderColor: '#FF6384',
                fill: false,
                tension: 0.1,
                type: 'line',
            },
            {
                label: 'Positive Probability (Line)',
                labelColor: '#ACABAD',
                data: positiveData,
                borderColor: '#36A2EB',
                fill: false,
                tension: 0.1,
                type: 'line',
            },
        ],
    };

    const barData = {
        labels,
        datasets: [
            {
                label: 'Negative Probability',
                // labelColor: '#ACABAD',
                data: negativeData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                type: 'bar',
            },
            {
                label: 'Positive Probability',
                labelColor: '#ACABAD',
                data: positiveData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                type: 'bar',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    color: '#ACABAD',
                    text: "Record ID",
                },
                grid: {
                    color: '#ACABAD',
                },
                ticks: {
                    color: '#ACABAD',
                },
            },
            y: {
                title: {
                    display: true,
                    color: '#ACABAD',
                    text: "Probability",
                },
                grid: {
                    color: '#ACABAD',
                },
                ticks: {
                    color: '#ACABAD',
                },
            },
        },
    };

    return (
        <div>
            <Bar data={barData} options={options} />
        </div>
    );
};

export default BarChart;