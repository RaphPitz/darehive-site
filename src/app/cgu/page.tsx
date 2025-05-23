'use client';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function CGU() {
  return (
    <main style={{ 
      flex: 1, 
      minHeight: '100vh',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 className="hero-title">
            📋 Conditions Générales d&apos;Utilisation
          </h1>
          <h2 className="hero-subtitle">
            Les règles du jeu pour une expérience DareHive au top ! 
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1rem',
            textAlign: 'center',
            marginTop: '20px'
          }}>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </section>

      {/* Layout Bilingue */}
      <section style={{ padding: '60px 20px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(280px, 45vw, 500px), 1fr))', 
            gap: 'clamp(20px, 4vw, 40px)'
          }}>
            
            {/* Version Française */}
            <div className="glass" style={{ padding: '50px 40px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 85, 164, 0.2)',
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(0, 85, 164, 0.3)'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🇫🇷</span>
                <span style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>FRANÇAIS</span>
              </div>
              
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '30px',
                color: 'var(--text-primary)',
                marginTop: '40px'
              }}>
                📱 Conditions d&apos;Utilisation DareHive
              </h2>
              
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎯 1. Objet des CGU
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation de l&apos;application mobile DareHive, 
                  plateforme innovante de défis vidéo qui révolutionne le divertissement mobile.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  En utilisant DareHive, tu acceptes intégralement ces conditions. L&apos;app est conçue pour être fun, 
                  sécurisée et respectueuse de tous les utilisateurs.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  👤 2. Conditions d&apos;Accès
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Âge minimum :</strong> Tu dois avoir au moins 13 ans pour utiliser DareHive. 
                  Les mineurs de moins de 16 ans doivent obtenir l&apos;autorisation parentale.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Compte utilisateur :</strong> Tu es responsable de la sécurité de ton compte et de tes identifiants. 
                  Choisis un mot de passe fort et ne le partage jamais.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎬 3. Utilisation de la Plateforme
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Contenu autorisé :</strong> Publie uniquement du contenu original, créatif et respectueux. 
                  Les défis doivent être amusants sans être dangereux ou offensants.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Contenu interdit :</strong> Sont prohibés les contenus violents, discriminatoires, 
                  à caractère sexuel, ou encourageant des comportements dangereux.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Droits d&apos;auteur :</strong> Respecte les droits de propriété intellectuelle. 
                  N&apos;utilise que de la musique libre de droits ou pour laquelle tu as les autorisations.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🏆 4. Système de Points et Classements
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Les points XP et badges sont attribués selon nos algorithmes propriétaires. 
                  Toute tentative de manipulation du système est interdite et peut entraîner la suspension du compte.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🔒 5. Protection des Données
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Tes données personnelles sont protégées conformément au RGPD. Consulte notre 
                  <a href="/confidentialite" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}> Politique de Confidentialité</a> 
                  pour tous les détails.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  ⚖️ 6. Responsabilités
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  DareHive fournit la plateforme &quot;en l&apos;état&quot;. Nous nous efforçons d&apos;assurer la disponibilité 
                  du service mais ne garantissons pas une absence totale d&apos;interruptions.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Tu es responsable de tes contenus et interactions. DareHive se réserve le droit de modérer 
                  et supprimer tout contenu inapproprié.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  📞 7. Contact
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Pour toute question concernant ces CGU : 
                  <a href="mailto:legal@darehive.app" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>
                    legal@darehive.app
                  </a>
                </p>
              </div>
            </div>

            {/* Version Anglaise */}
            <div className="glass" style={{ padding: '50px 40px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(220, 53, 69, 0.2)',
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(220, 53, 69, 0.3)'
              }}>
                <span style={{ fontSize: '1.2rem' }}>🇬🇧</span>
                <span style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>ENGLISH</span>
              </div>
              
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '30px',
                color: 'var(--text-primary)',
                marginTop: '40px'
              }}>
                📱 DareHive Terms of Service
              </h2>
              
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎯 1. Purpose of Terms
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  These Terms of Service (ToS) govern the use of the DareHive mobile application, 
                  an innovative video challenge platform that revolutionizes mobile entertainment.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  By using DareHive, you fully accept these terms. The app is designed to be fun, 
                  secure and respectful of all users.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  👤 2. Access Conditions
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Minimum age:</strong> You must be at least 13 years old to use DareHive. 
                  Minors under 16 must obtain parental authorization.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>User account:</strong> You are responsible for the security of your account and credentials. 
                  Choose a strong password and never share it.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎬 3. Platform Usage
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Authorized content:</strong> Only post original, creative and respectful content. 
                  Challenges should be fun without being dangerous or offensive.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Prohibited content:</strong> Violent, discriminatory, sexual content, 
                  or content encouraging dangerous behavior is prohibited.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Copyright:</strong> Respect intellectual property rights. 
                  Only use royalty-free music or music for which you have permissions.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🏆 4. Points and Rankings System
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  XP points and badges are awarded according to our proprietary algorithms. 
                  Any attempt to manipulate the system is prohibited and may result in account suspension.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🔒 5. Data Protection
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Your personal data is protected in accordance with GDPR. Check our 
                  <a href="/confidentialite" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}> Privacy Policy</a> 
                  for all details.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  ⚖️ 6. Responsibilities
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  DareHive provides the platform &quot;as is&quot;. We strive to ensure service availability 
                  but do not guarantee a complete absence of interruptions.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  You are responsible for your content and interactions. DareHive reserves the right to moderate 
                  and remove any inappropriate content.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  📞 7. Contact
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  For any questions regarding these ToS: 
                  <a href="mailto:legal@darehive.app" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>
                    legal@darehive.app
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section style={{ 
        padding: '80px 20px',
        textAlign: 'center',
        background: 'var(--glass-violet)',
        backdropFilter: 'blur(24px)',
        margin: '0 20px',
        borderRadius: '30px',
        border: '1px solid var(--glass-border)'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
          fontWeight: '700',
          marginBottom: '20px',
          color: 'var(--text-primary)'
        }}>
          ✅ Tout compris ?
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Ces conditions sont là pour que tout le monde s&apos;amuse en toute sécurité sur DareHive !
        </p>
        
        <div className="download-badges">
          <a href="https://apps.apple.com/app/darehive/id6478155193" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Télécharger sur l'App Store"
              className="download-badge"
              style={{ height: '60px' }}
            />
          </a>
        </div>
      </section>
    </main>
  );
}