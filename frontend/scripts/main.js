const context = document.getElementById("chart");

dataJson = [
  {
    label: "mon",
    data: 17.45,
  },
  {
    label: "tue",
    data: 34.91,
  },
  {
    label: "wed",
    data: 52.36,
  },
  {
    label: "thu",
    data: 31.07,
  },
  {
    label: "fri",
    data: 23.39,
  },
  {
    label: "sat",
    data: 43.28,
  },
  {
    label: "sun",
    data: 25.48,
  },
];

function setHoverBackgroundColors() {
  let bgColors = Array(dataJson.length).fill("hsl(10, 79%, 75%)");
  let indexLargest = 0;
  let dataLargest = 0;
  dataJson.forEach((item, index) => {
    if (item.data > dataLargest) {
      dataLargest = item.data;
      indexLargest = index;
    }
  });
  bgColors[indexLargest] = "hsl(186, 34%, 80%)";
  return bgColors;
}

const chart = new Chart(context, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: null,
        data: dataJson.map((item) => item.data),
        borderWidth: 1,
        backgroundColor: ["hsl(10, 79%, 65%)"],
        hoverBackgroundColor: setHoverBackgroundColors(),
        borderRadius: [5],
        borderSkipped: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          lineWidth: 0,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: "hsl(25, 47%, 15%)",
        callbacks: {
          label: (context) => {
            return "$" + context.formattedValue;
          },
          title: (context) => "",
          labelPointStyle: (context) => "",
        },
        yAlign: "bottom",
      },
    },
  },
});

console.log("chart: ", chart.data.datasets);
