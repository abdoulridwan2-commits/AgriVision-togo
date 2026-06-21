import { useEffect, useState } from "react";

function Dashboard() {
  const [totalCooperatives, setTotalCooperatives] = useState(0);

  useEffect(() => {
    fetch("/data/Cooperatives.json")
      .then((response) => response.json())
      .then((data) => {
        setTotalCooperatives(data.features.length);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>AgriVision Togo</h1>
      <p>Tableau de bord agricole du Togo</p>

      <h2>Coopératives Agricoles</h2>
      <p>Total : {totalCooperatives}</p>
    </div>
  );
}

export default Dashboard;