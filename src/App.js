
import React, { useState } from 'react';

const postes = [
  "Accueil Pros / Sécu / Créateurs",
  "Accueil Artistes",
  "Entretien Lieux",
  "Bar à Bières - Tireuse 1",
  "Bar à Bières - Tireuse 2",
  "Bar à Bières - Tireuse 3",
  "Bar à Bières - Tireuse 4",
  "Bar à Spritz",
  "Bar à Soft & Gâteaux",
  "Plonge",
  "Stand Huîtres"
];

const creneaux = [
  "17h-18h",
  "18h-19h",
  "19h-20h",
  "20h-21h",
  "21h-22h",
  "22h-23h",
  "23h-00h"
];

function App() {
  const [poste, setPoste] = useState("");
  const [creneau, setCreneau] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");
  const [compteur, setCompteur] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (poste && creneau && nom && prenom && tel) {
      setCompteur(compteur + 1);
      setMessage("✅ Inscription enregistrée !");
      setTimeout(() => setMessage(""), 3000);
      setNom(""); setPrenom(""); setTel(""); setPoste(""); setCreneau("");
    } else {
      setMessage("❌ Merci de remplir tous les champs.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center', backgroundColor: '#e6f4ea', minHeight: '100vh' }}>
      <h1 style={{ color: '#3cb371' }}>Réservation Bénévoles Guinguette</h1>
      <p>Simulation d'inscription en ligne - Présentation</p>
      <p>Nombre d'inscrits simulés sur ce créneau : {compteur}/2</p>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left', background: '#fff', padding: 20, borderRadius: 8 }}>
        <label>Poste :<br />
          <select value={poste} onChange={e => setPoste(e.target.value)} required>
            <option value="">Sélectionner un poste</option>
            {postes.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </label><br /><br />
        <label>Créneau :<br />
          <select value={creneau} onChange={e => setCreneau(e.target.value)} required>
            <option value="">Sélectionner un créneau</option>
            {creneaux.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </label><br /><br />
        <label>Nom :<br />
          <input type="text" value={nom} onChange={e => setNom(e.target.value)} required />
        </label><br /><br />
        <label>Prénom :<br />
          <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)} required />
        </label><br /><br />
        <label>Téléphone :<br />
          <input type="text" value={tel} onChange={e => setTel(e.target.value)} required />
        </label><br /><br />
        <button type="submit" style={{ backgroundColor: '#3cb371', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: 4 }}>
          S'inscrire
        </button>
      </form>
      <p style={{ marginTop: 10 }}>{message}</p>
    </div>
  );
}

export default App;
