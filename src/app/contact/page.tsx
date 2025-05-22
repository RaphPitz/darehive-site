'use client';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <main>
      <Navbar />
      <section style={{ textAlign: 'center', margin: '0 auto', maxWidth: 600 }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 16 }}>Contact</h1>
        <p>Pour toute question, écris-nous à <a href="mailto:contact@darehive.com">contact@darehive.com</a></p>
      </section>
    </main>
  );
}