import { Chart as ChartJS, ArcElement, Tooltip, Legend, type ChartData } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnoutChart({ data }: { data: ChartData<"doughnut"> }) {
  return <Doughnut data={data} />;
}
