import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function StatsChart({ stats }) {
  const data = {
    labels: [
      "Grandes Exploitations",
      "Plantations",
      "ZAAPs",
      "Pépinières",
    ],
    datasets: [
      {
        label: "Nombre",
        data: [
          stats.grandes,
          stats.plantations,
          stats.zaaps,
          stats.pepinieres,
        ],
      },
    ],
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>📈 Analyse des infrastructures agricoles</h2>
      <Bar data={data} />
    </div>
  );
}

export default StatsChart;