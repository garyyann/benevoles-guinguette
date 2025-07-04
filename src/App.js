
import React, { useState } from 'react';

const ENDPOINT = "https://script.google.com/macros/s/AKfycbyYo-ykg-UZc5Bn5OSCatKeYYiVoeQrMa_FihCoIMIYtEOhZqpnk3FeJasQy6Ph20GrLQ/exec";

function App() {
  const [poste, setPoste] = useState('');
  const [creneau, setCreneau] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!poste || !creneau || !prenom || !nom || !telephone) {
      setMessage("Merci de remplir tous les champs.");
      return;
    }

    const data = { poste, creneau, prenom, nom, telephone };

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        setMessage("Inscription enregistrée ✅");
        setPoste('');
        setCreneau('');
        setPrenom('');
        setNom('');
        setTelephone('');
      } else {
        setMessage("Erreur lors de l'envoi. Réessayez.");
      }
    } catch (error) {
      setMessage("Erreur réseau. Vérifiez votre connexion.");
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Réservation Bénévoles Guinguette</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <input type="text" placeholder="Poste (ex : Bar à Bières)" value={poste} onChange={e => setPoste(e.target.value)} />
        <input type="text" placeholder="Créneau (ex : 19h-20h)" value={creneau} onChange={e => setCreneau(e.target.value)} />
        <input type="text" placeholder="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)} />
        <input type="text" placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} />
        <input type="text" placeholder="Téléphone" value={telephone} onChange={e => setTelephone(e.target.value)} />
        <button type="submit">S'inscrire</button>
      </form>
      {message && <p style={{ marginTop: '1rem' }}>{message}</p>}
    </div>
  );
}

export default App;
