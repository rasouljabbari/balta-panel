import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import type { DonutChartProps } from "@/features/reports/type"; 

export default function DonutChart({
  series,
  labels,
  colors = ["#DA1F3D", "#EB7184", "#F6C2CA"],
  height = 300,
  donutSize = "50%",
  showLegend = true,
  legendPosition = "bottom"
}: DonutChartProps) {
  const options: ApexOptions = {
    chart: {
      type: "donut", 
      fontFamily: "IRANYekanXFaNum, sans-serif",
    },
    labels,
    colors,
    states: {
      hover: {
        filter: {
          type: 'none',
        }
      },
    },
    legend: {
      show: showLegend,
      position: legendPosition,
      horizontalAlign: "center",
      fontSize: "14px",
      offsetY: 18,
      markers: {
        size: 8,
        shape: "circle",
        offsetX: -4,
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          size: donutSize,
        },
      },
    },
  };

  return (
    <Chart
      className="donut-chart"
      options={options}
      series={series}
      type="donut"
      height={height}
    />
  );
}
