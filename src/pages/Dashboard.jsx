import StatsChart from "../components/StatsChart";
import MapView from "../components/MapView";
import "../styles/dashboard.css";
import { useEffect, useState } from "react";

function Dashboard() {
  const [stats, setStats] = useState({
    cooperatives: 0,
    grandes: 0,
    petites: 0,
    plantations: 0,
    zaaps: 0,
    pepinieres: 0,
  });

  const loadData = async (fileName, key) => {
    try {
      const response = await fetch(`/data/${fileName}`);
      const data = await response.json();

      console.log(fileName, data);

      let total = 0;

      if (data.features) {
        total = data.features.length;
      } else if (Array.isArray(data)) {
        total = data.length;
      }

      console.log(`${fileName} => ${total}`);

      setStats((prev) => ({
        ...prev,
        [key]: total,
      }));
    } catch (error) {
      console.error(`Erreur avec ${fileName}`, error);
    }
  };

  useEffect(() => {
    loadData("cooperatives.json", "cooperatives");
    loadData("grandes_exploitations.json", "grandes");
    loadData("petites_exploitations.json", "petites");
    loadData("plantations_agricoles.json", "plantations");
    loadData("zaaps_champs.json", "zaaps");
    loadData("pepinieres_agricoles.json", "pepinieres");
  }, []);

return (
  <div className="container">
    <div className="title">
      <h1> AgriVision Togo</h1>
      <p>Tableau de bord agricole du Togo</p>
    </div>

    <div className="cards">
      <div className="card">
        <h3>Coopératives</h3>
        <p>{stats.cooperatives}</p>
      </div>

      <div className="card">
        <h3>Grandes Exploitations</h3>
        <p>{stats.grandes}</p>
      </div>

      <div className="card">
        <h3> Petites Exploitations</h3>
        <p>{stats.petites}</p>
      </div>

      <div className="card">
        <h3> Plantations</h3>
        <p>{stats.plantations}</p>
      </div>

      <div className="card">
        <h3> ZAAPs / ZAPBs</h3>
        <p>{stats.zaaps}</p>
      </div>

      <div className="card">
        <h3> Pépinières</h3>
        <p>{stats.pepinieres}</p>
      </div>
      
    </div>
    <div className="cards">
  ...
</div>

<h2 style={{ marginTop: "40px" }}>
   Carte Agricole du Togo
</h2>

<MapView />
  </div>
);
}

export default Dashboard;