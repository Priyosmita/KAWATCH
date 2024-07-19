import React from "react";
import { Scatter } from "react-chartjs-2";
import "chart.js/auto";

const ScatterChart = ({ bulkResults }) => {
    const data = {
        datasets: [
            {
                label: "Not Money Laundering",
                data: bulkResults.filter(result => result.prediction === 0).map((result, index) => ({
                    x: result.probability[0], // Negative Probability
                    y: result.probability[1], // Positive Probability
                    id: index + 1, // Transaction ID
                    prediction: "Negative", // Prediction text
                })),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
            {
                label: "Money Laundering",
                data: bulkResults.filter(result => result.prediction === 1).map((result, index) => ({
                    x: result.probability[0], // Negative Probability
                    y: result.probability[1], // Positive Probability
                    id: index + 1, // Transaction ID
                    prediction: "Positive", // Prediction text
                })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    color: '#ACABAD',
                    text: "Negative Probability",
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
                    text: "Positive Probability",
                },
                grid: {
                    color: '#ACABAD',
                },
                ticks: {
                    color: '#ACABAD',
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const { x, y, id, prediction } = context.raw;
                        return `Transaction ID: ${id}\n${prediction}\nNegative Probability: ${x.toFixed(3)}\nPositive Probability: ${y.toFixed(3)}`;
                    },
                },
            },
            legend: {
                labels: {
                    color: '#ACABAD', // Change the color of the legend labels
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
    };

    return <Scatter data={data} options={options} />;
};

export default ScatterChart;

