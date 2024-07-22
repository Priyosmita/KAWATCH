import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ bulkResults }) => {
    const labels = bulkResults.map((_, index) => index + 1);
    const negativeData = bulkResults.map(result => result.probability[0].toFixed(3));
    const positiveData = bulkResults.map(result => result.probability[1].toFixed(3));

    const data = {
        labels,
        datasets: [
            {
                label: 'Not Money Laundering',
                data: negativeData,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                type: 'bar',
            },
            {
                label: 'Money Laundering',
                data: positiveData,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
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
                    max: 1.0, // Set the maximum value for the y-axis
                    min: 0.0, // Set the minimum value for the y-axis
                    stepSize: 0.1, // Set the step size for the y-axis
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: '#ACABAD', // Change the color of the legend labels
                },
            },
        },
    };

    return (
        <div style={{ height: '300px' }}> {/* Adjust the height as needed */}
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;