'use client';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function Confidentialite() {
  return (
    <main>
      <Navbar />
      <section style={{ textAlign: 'center', margin: '0 auto', maxWidth: 1200 }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 32 }}>Politique de confidentialité / Privacy Policy</h1>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300, background: 'rgba(255,255,255,0.15)', borderRadius: 16, padding: 24, marginBottom: 24, boxShadow: '0 4px 24px #7B2FF299' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 16 }}>🇫🇷 Version française</h2>
            <ol style={{ textAlign: 'left', margin: '0 auto', marginBottom: 0, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><b>Données collectées</b><br />- Compte : nom, pseudo, email, mot de passe (chiffré)<br />- Profil : avatar, vidéos, préférences<br />- Technique : appareil, OS, logs, géolocalisation (si autorisée)</li>
              <li style={{ marginBottom: 8 }}><b>Utilisation</b><br />- Fournir et améliorer le service<br />- Proposer des défis personnalisés<br />- Statistiques et prévention des abus</li>
              <li style={{ marginBottom: 8 }}><b>Stockage & sécurité</b><br />Données hébergées en UE, sécurisées, accès restreint.</li>
              <li style={{ marginBottom: 8 }}><b>Partage</b><br />Pas de revente. Partage possible avec des sous-traitants techniques (cloud, analytics) uniquement pour le fonctionnement de l'app.</li>
              <li style={{ marginBottom: 8 }}><b>Durée de conservation</b><br />Pendant l'utilisation + 2 ans après désinscription.</li>
              <li><b>Droits RGPD</b><br /></li>
            </ol>
          </div>
          <div style={{ flex: 1, minWidth: 300, background: 'rgba(255,255,255,0.15)', borderRadius: 16, padding: 24, marginBottom: 24, boxShadow: '0 4px 24px #7B2FF299' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 16 }}>🇬🇧 English version</h2>
            <ol style={{ textAlign: 'left', margin: '0 auto', marginBottom: 0, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><b>Data collected</b><br />- Account: name, username, email, password (encrypted)<br />- Profile: avatar, videos, preferences<br />- Technical: device, OS, logs, geolocation (if authorized)</li>
              <li style={{ marginBottom: 8 }}><b>Use</b><br />- Provide and improve the service<br />- Offer personalized challenges<br />- Statistics and abuse prevention</li>
              <li style={{ marginBottom: 8 }}><b>Storage & security</b><br />Data hosted in the EU, secured, restricted access.</li>
              <li style={{ marginBottom: 8 }}><b>Sharing</b><br />No resale. Data may be shared with technical subcontractors (cloud, analytics) only for app operation.</li>
              <li style={{ marginBottom: 8 }}><b>Retention period</b><br />During use + 2 years after account deletion.</li>
              <li><b>GDPR rights</b><br /></li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}