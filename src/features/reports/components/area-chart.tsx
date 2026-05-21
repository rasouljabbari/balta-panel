import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import type { AreaChartProps } from "@/features/reports/type";

export default function AreaChart({ series, height = 300, width = 320, colors = ["#F79009"], months = ["دی", "بهمن", "اسفند", "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر"] }: AreaChartProps) {
  const options: ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      height: height,
      width: width,
      fontFamily: "IRANYekanXFaNum, sans-serif",
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    colors: colors,
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.1,
        opacityFrom: 0.35,
        opacityTo: 0,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        size: 8,
        shape: "circle",
      }
    },
    grid: {
      strokeDashArray: 0,
    },
    xaxis: {
      categories: months,
    },
    yaxis: {
      show: false
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={300}
    />
  );
}
