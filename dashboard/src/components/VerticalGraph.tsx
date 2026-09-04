import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export type VerticalGraphData = ChartData<"bar", number[], string>;

type VerticalGraphProps = {
  data: VerticalGraphData;
  title?: string;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);

const options: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        maxRotation: 0,
        autoSkip: true,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => formatCurrency(Number(value)),
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
      },
    },
    tooltip: {
      callbacks: {
        label: (context) =>
          `${context.dataset.label ?? "Value"}: ${formatCurrency(context.parsed.y ?? 0)}`,
      },
    },
  },
};

export function VerticalGraph({
  data,
  title = "Current value by holding",
}: VerticalGraphProps) {
  const hasData = data.datasets.some((dataset) => dataset.data.length > 0);

  if (!hasData) {
    return (
      <div className="text-center text-muted py-4" role="status">
        No holdings data available for the chart.
      </div>
    );
  }

  const chartOptions: ChartOptions<"bar"> = {
    ...options,
    plugins: {
      ...options.plugins,
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 600,
        },
      },
    },
  };

  return (
    <div style={{ height: "min(420px, 60vh)", minHeight: "300px" }}>
      <Bar options={chartOptions} data={data} aria-label={title} role="img" />
    </div>
  );
}
