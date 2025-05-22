'use client';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function Fonctionnalites() {
  return (
    <main>
      {/* Fond dégradé animé */}
      {/* Effet glossy */}

      <Navbar />

      <section style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600 }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 16 }}>Fonctionnalités</h1>
        <ul style={{ marginTop: 16, listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: 8 }}>🎬 Défis vidéo quotidiens et hebdo</li>
          <li style={{ marginBottom: 8 }}>🏆 Classement en temps réel</li>
          <li style={{ marginBottom: 8 }}>💬 Commentaires et likes</li>
          <li style={{ marginBottom: 8 }}>🔗 Partage facile sur les réseaux</li>
          <li style={{ marginBottom: 8 }}>✨ Effets premium et filtres</li>
          <li>🔒 Respect de la vie privée</li>
        </ul>
      </section>
    </main>
  );
}