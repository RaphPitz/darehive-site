'use client';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function Confidentialite() {
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
            🛡️ Politique de Confidentialité <span className="darehive-text">DAREHIVE</span>
          </h1>
          <h2 className="hero-subtitle">
            Tes données sont précieuses, on les protège comme un trésor !
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
                🛡️ <span className="darehive-text">DAREHIVE</span> Privacy Policy
              </h2>
              
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎯 1. Engagement de Confidentialité
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Chez DareHive, ta vie privée est sacrée ! Nous nous engageons à protéger tes données personnelles 
                  avec les plus hauts standards de sécurité, conformément au RGPD européen.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  Cette politique explique comment nous collectons, utilisons et protégeons tes informations 
                  pour t&apos;offrir la meilleure expérience possible.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  📊 2. Données Collectées
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Informations de compte :</strong> Pseudonyme, email, âge, photo de profil (optionnelle).
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Contenu créé :</strong> Tes vidéos de défis, commentaires, likes et interactions sociales.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Données d&apos;usage :</strong> Statistiques d&apos;utilisation anonymisées pour améliorer l&apos;app.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Données techniques :</strong> Type d&apos;appareil, version iOS, logs d&apos;erreurs (anonymisés).
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎯 3. Utilisation des Données
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Fonctionnement de l&apos;app :</strong> Affichage de ton profil, classements, recommandations personnalisées
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Amélioration du service :</strong> Analyse des tendances, développement de nouvelles fonctionnalités
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Communication :</strong> Notifications push, emails importants (que tu peux désactiver)
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Sécurité :</strong> Détection de comportements suspects, prévention des abus
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🛡️ 4. Protection et Sécurité
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Chiffrement :</strong> Toutes tes données sont chiffrées en transit et au repos avec des algorithmes de niveau militaire.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Accès limité :</strong> Seuls nos développeurs autorisés peuvent accéder aux données, 
                  uniquement pour la maintenance technique.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Serveurs sécurisés :</strong> Hébergement sur des infrastructures cloud certifiées ISO 27001.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🤝 5. Partage des Données
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Principe de base :</strong> Nous ne vendons JAMAIS tes données personnelles !
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Partages autorisés :</strong> Uniquement avec ton consentement explicite ou pour des raisons légales.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Contenus publics :</strong> Tes vidéos et interactions publiques sont visibles par la communauté DareHive.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  ⚙️ 6. Tes Droits
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Accès :</strong> Consulter toutes tes données stockées
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Rectification :</strong> Corriger des informations incorrectes
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Suppression :</strong> Effacer ton compte et toutes tes données
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Portabilité :</strong> Récupérer tes données dans un format lisible
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  📞 7. Contact
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Questions sur tes données ? Écris-nous : 
                  <a href="mailto:privacy@darehive.app" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>
                    privacy@darehive.app
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
                🛡️ DareHive Privacy Policy
              </h2>
              
              <div style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7' }}>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎯 1. Privacy Commitment
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  At DareHive, your privacy is sacred! We are committed to protecting your personal data 
                  with the highest security standards, in compliance with European GDPR.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  This policy explains how we collect, use and protect your information 
                  to provide you with the best possible experience.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  📊 2. Data Collected
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Account information:</strong> Username, email, age, profile picture (optional).
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Created content:</strong> Your challenge videos, comments, likes and social interactions.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Usage data:</strong> Anonymized usage statistics to improve the app.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Technical data:</strong> Device type, iOS version, error logs (anonymized).
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🎯 3. Data Usage
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>App functionality:</strong> Display your profile, rankings, personalized recommendations
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Service improvement:</strong> Trend analysis, development of new features
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Communication:</strong> Push notifications, important emails (you can disable them)
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Security:</strong> Detection of suspicious behavior, abuse prevention
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🛡️ 4. Protection and Security
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Encryption:</strong> All your data is encrypted in transit and at rest with military-grade algorithms.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Limited access:</strong> Only our authorized developers can access data, 
                  only for technical maintenance.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Secure servers:</strong> Hosting on ISO 27001 certified cloud infrastructures.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  🤝 5. Data Sharing
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Basic principle:</strong> We NEVER sell your personal data!
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Authorized sharing:</strong> Only with your explicit consent or for legal reasons.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  <strong>Public content:</strong> Your videos and public interactions are visible to the DareHive community.
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  ⚙️ 6. Your Rights
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Access:</strong> View all your stored data
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Rectification:</strong> Correct incorrect information
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Deletion:</strong> Delete your account and all your data
                </p>
                <p style={{ marginBottom: '20px' }}>
                  • <strong>Portability:</strong> Retrieve your data in a readable format
                </p>

                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.3rem', marginTop: '30px', marginBottom: '15px' }}>
                  📞 7. Contact
                </h3>
                <p style={{ marginBottom: '20px' }}>
                  Questions about your data? Write to us: 
                  <a href="mailto:privacy@darehive.app" style={{ color: 'var(--accent-light)', textDecoration: 'none' }}>
                    privacy@darehive.app
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Transparence */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 className="section-title">
            🌟 Transparence Totale
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: 'var(--text-primary)'
              }}>
                Chiffrement End-to-End
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Tes messages privés et données sensibles sont chiffrés avec les mêmes technologies que les banques.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚫</div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: 'var(--text-primary)'
              }}>
                Zéro Vente de Données
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Tes données ne sont jamais vendues à des tiers. Notre modèle économique repose sur des fonctionnalités premium.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '16px',
                color: 'var(--text-primary)'
              }}>
                Suppression Instantanée
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem',
                lineHeight: '1.6'
              }}>
                Tu peux supprimer ton compte et toutes tes données en un clic. Suppression effective sous 24h maximum.
              </p>
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
          🔐 Tes données, tes règles !
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          maxWidth: '500px',
          margin: '0 auto 40px',
          lineHeight: '1.6'
        }}>
          Rejoins DareHive en toute confiance, ta vie privée est entre de bonnes mains.
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