import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import type { AreaChartProps } from "@/features/reports/type";

const DEFAULT_MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export default function ColumnChart({
  series,
  height = 300,
  colors = ["#F6C2CA", "#8E1428", "#DA1F3D"],
  months = DEFAULT_MONTHS,
}: AreaChartProps) {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
      fontFamily: "IRANYekanXFaNum, sans-serif",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "65%",
        borderRadius: 4,
        borderRadiusApplication: "end",
      },
    },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    colors,
    fill: {
      opacity: 1,
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "14px",
      offsetY: 8,
      markers: {
        size: 8,
        shape: "circle",
        offsetX: -4,
      },
    },
    grid: {
      borderColor: "#E4E7EC",
      strokeDashArray: 0,
      xaxis: {
        lines: { show: false },
      },
      yaxis: {
        lines: { show: true },
      },
    },
    xaxis: {
      categories: months,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: {
          colors: "#667085",
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      show: true,
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          colors: "#667085",
          fontSize: "12px",
        },
        formatter: (val) => Math.round(val).toString(),
      },
      title: {
        text: "تعداد معاملات",
        rotate: -90,
        offsetX: 0,
        style: {
          color: "#667085",
          fontSize: "12px",
          fontWeight: 500,
        },
      },
    },
    tooltip: {
      shared: false,
      intersect: true,
      theme: "dark",
      style: {
        fontFamily: "IRANYekanXFaNum, sans-serif",
      },
      y: {
        formatter: (val) => `${val} سفارش`,
      },
    },
  };

  return (
    <Chart
      className="column-chart"
      options={options}
      series={series}
      type="bar"
      height={height}
    />
  );
}
