import React from "react";
import { Scatter } from "react-chartjs-2";
import "chart.js/auto";


const ScatterChart = ({ bulkResults }) => {
    const data = {
        datasets: [
            {
                label: "Probabilities",
                data: bulkResults.map((result, index) => ({
                    x: result.probability[0], // Negative Probability
                    y: result.probability[1], // Positive Probability
                    id: index + 1, // Transaction ID
                    prediction: result.prediction === 0 ? "Negative" : "Positive", // Prediction text
                })),
                backgroundColor: bulkResults.map((result) =>
                    result.prediction === 0 ? "#36A2EB" : "#FF6384"
                ),
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