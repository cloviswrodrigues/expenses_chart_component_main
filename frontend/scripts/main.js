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

var indexLargest = 0;
function setIndexLargest() {
  let dataLargest = 0;
  dataJson.forEach((item, index) => {
    if (item.data > dataLargest) {
      dataLargest = item.data;
      indexLargest = index;
    }
  });
}

function setBackgroundColors() {
  let bgColors = Array(dataJson.length).fill("hsl(10, 79%, 65%)");
  bgColors[indexLargest] = "hsl(186, 34%, 60%)";
  return bgColors;
}

function setHoverBackgroundColors() {
  let bgColors = Array(dataJson.length).fill("hsl(10, 79%, 75%)");
  bgColors[indexLargest] = "hsl(186, 34%, 80%)";
  return bgColors;
}

setIndexLargest();
const chart = new Chart(context, {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        data: dataJson.map((item) => item.data),
        borderWidth: 1,
        backgroundColor: setBackgroundColors(),
        hoverBackgroundColor: setHoverBackgroundColors(),
        borderRadius: [5],
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        right: 0,
        left: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "hsl(28, 10%, 53%)",
          font: {
            family: "'DM Sans', 'sans-serif'",
            size: 14,
          },
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
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
      legend: {
        display: false,
      },
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
        displayColors: false,
        padding: {
          top: 10,
          right: 10,
          bottom: 8,
          left: 8,
        },
        caretSize: 0,
        caretPadding: 8,
        bodyFont: {
          family: "'DM Sans', 'sans-serif'",
          weight: "bold",
          size: 18,
        },
      },
    },
  },
});
