'use client';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function CGU() {
  return (
    <main>
      <Navbar />
      <section style={{ textAlign: 'center', margin: '0 auto', maxWidth: 1200 }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: 32 }}>Conditions Générales d’Utilisation / Terms of Service</h1>
        <div style={{ display: 'flex', gap: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: 300, background: 'rgba(255,255,255,0.15)', borderRadius: 16, padding: 24, marginBottom: 24, boxShadow: '0 4px 24px #7B2FF299' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 16 }}>🇫🇷 Version française</h2>
            <ol style={{ textAlign: 'left', margin: '0 auto', marginBottom: 0, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><b>Présentation</b><br />DareHive est éditée par Raphael Pitzini, entrepreneur individuel. En utilisant l’application, vous acceptez sans réserve les présentes CGU.</li>
              <li style={{ marginBottom: 8 }}><b>Objet</b><br />Les CGU définissent les modalités d’utilisation de DareHive.</li>
              <li style={{ marginBottom: 8 }}><b>Accès au service</b><br />L’accès est gratuit. Certaines fonctionnalités sont payantes (abonnement, achats intégrés).</li>
              <li style={{ marginBottom: 8 }}><b>Compte utilisateur</b><br />Création obligatoire pour certaines fonctions. Informations exactes requises. L’utilisateur est responsable de la confidentialité de son compte.</li>
              <li style={{ marginBottom: 8 }}><b>Règles de comportement</b><br />- Ne pas publier de contenus illicites, offensants, violents ou discriminatoires.<br />- Respecter les autres membres.<br />- Ne pas tricher, spammer ou manipuler les classements.<br />- Ne pas usurper l’identité d’autrui.</li>
              <li style={{ marginBottom: 8 }}><b>Modération & Signalement</b><br />Les contenus sont modérés. Tout abus peut entraîner la suspension ou la suppression du compte.</li>
              <li style={{ marginBottom: 8 }}><b>Propriété intellectuelle</b><br />Les contenus (vidéos, textes, images, logo) restent la propriété de leurs auteurs, mais vous accordez à DareHive une licence d’utilisation pour la diffusion sur l’app.</li>
              <li style={{ marginBottom: 8 }}><b>Responsabilité</b><br />DareHive n’est pas responsable des contenus publiés par les utilisateurs, ni des bugs techniques indépendants de sa volonté.</li>
              <li style={{ marginBottom: 8 }}><b>Sécurité</b><br />Toute tentative de piratage, d’accès non autorisé ou de perturbation du service entraînera des poursuites.</li>
              <li style={{ marginBottom: 8 }}><b>Suspension / Résiliation</b><br />DareHive peut suspendre ou supprimer un compte en cas de non-respect des CGU.</li>
              <li style={{ marginBottom: 8 }}><b>Modifications</b><br />Les CGU peuvent être modifiées à tout moment. Les utilisateurs seront informés via l’application.</li>
              <li style={{ marginBottom: 8 }}><b>Contact</b><br /></li>
            </ol>
          </div>
          <div style={{ flex: 1, minWidth: 300, background: 'rgba(255,255,255,0.15)', borderRadius: 16, padding: 24, marginBottom: 24, boxShadow: '0 4px 24px #7B2FF299' }}>
            <h2 style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: 16 }}>🇬🇧 English version</h2>
            <ol style={{ textAlign: 'left', margin: '0 auto', marginBottom: 0, paddingLeft: 24 }}>
              <li style={{ marginBottom: 8 }}><b>Overview</b><br />DareHive is published by Raphael Pitzini, sole proprietor. By using the app, you fully accept these Terms of Service.</li>
              <li style={{ marginBottom: 8 }}><b>Purpose</b><br />These Terms define the conditions for using DareHive.</li>
              <li style={{ marginBottom: 8 }}><b>Access to the service</b><br />Access is free. Some features require payment (subscription, in-app purchases).</li>
              <li style={{ marginBottom: 8 }}><b>User account</b><br />Account creation is required for some features. Accurate information is mandatory. Users are responsible for their account confidentiality.</li>
              <li style={{ marginBottom: 8 }}><b>Code of conduct</b><br />- Do not post illegal, offensive, violent, or discriminatory content.<br />- Respect other members.<br />- No cheating, spamming, or manipulating rankings.<br />- Do not impersonate others.</li>
              <li style={{ marginBottom: 8 }}><b>Moderation & Reporting</b><br />Content is moderated. Abuse may result in account suspension or deletion.</li>
              <li style={{ marginBottom: 8 }}><b>Intellectual property</b><br />Content (videos, text, images, logo) remains the property of its authors, but you grant DareHive a license to use it for app distribution.</li>
              <li style={{ marginBottom: 8 }}><b>Liability</b><br />DareHive is not responsible for user-generated content or technical bugs beyond its control.</li>
              <li style={{ marginBottom: 8 }}><b>Security</b><br />Any hacking attempt, unauthorized access, or service disruption will be prosecuted.</li>
              <li style={{ marginBottom: 8 }}><b>Suspension / Termination</b><br />DareHive may suspend or delete an account in case of ToS violation.</li>
              <li style={{ marginBottom: 8 }}><b>Changes</b><br />The ToS may be updated at any time. Users will be notified via the app.</li>
              <li style={{ marginBottom: 8 }}><b>Contact</b><br /></li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}