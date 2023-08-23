import ReactApexChart from "react-apexcharts";

export const ColumnChart = () => {
  const data = {
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
      },
      xaxis: {
        categories: ["10AM", "11AM", "12AM", "01PM", "02PM", "03PM"],
      },
      yaxis: {
        tickAmount: 3,
        labels: {
          formatter: function (value, ind) {
            if (ind === 0) {
              return "";
            } else if (ind === 1) {
              return "Heavy";
            } else if (ind === 2) {
              return "Sunny";
            }
            return "Rainy";
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <ReactApexChart
      options={data.options}
      series={data.series}
      type="bar"
      height={230}
    />
  );
};
