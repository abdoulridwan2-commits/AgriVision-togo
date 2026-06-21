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
    <div style={{ padding: "20px" }}>
      <h1> AgriVision Togo</h1>
      <p>Tableau de bord agricole du Togo</p>

      <h2>📊 Statistiques Générales</h2>

      <p> Coopératives : {stats.cooperatives}</p>
      <p> Grandes exploitations : {stats.grandes}</p>
      <p> Petites exploitations : {stats.petites}</p>
      <p> Plantations : {stats.plantations}</p>
      <p> ZAAPs / ZAPBs : {stats.zaaps}</p>
      <p> Pépinières : {stats.pepinieres}</p>
    </div>
  );
}

export default Dashboard;