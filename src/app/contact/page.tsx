'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { useLanguage } from '../../contexts/LanguageContext';
// import Footer from '../../components/Footer';

  export default function Contact() {
    const { t } = useLanguage();
    
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <Image 
              src="/LogoRaph.png" 
              alt="Logo DareHive" 
              width={50} 
              height={50} 
              style={{ borderRadius: '10px' }}
            />
            <h1 className="hero-title" style={{ margin: 0 }}>
              {t('contact.title')}
            </h1>
          </div>
          <h2 className="hero-subtitle">
            Une question, une suggestion ou besoin d&apos;aide ? On est là pour toi !
          </h2>
        </div>
      </section>

      {/* Section Contact Principal */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
            
            {/* Formulaire de Contact */}
            <div className="glass" style={{ padding: '50px 40px' }}>
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                marginBottom: '30px',
                color: 'var(--text-primary)',
                textAlign: 'center'
              }}>
                💬 Envoie-nous un message
              </h3>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: 'var(--text-secondary)',
                    fontWeight: '500'
                  }}>
                    Nom complet
                  </label>
                  <input 
                    type="text" 
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '15px',
                      border: '1px solid var(--glass-border)',
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    placeholder="Ton nom complet"
                  />
                </div>
                
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: 'var(--text-secondary)',
                    fontWeight: '500'
                  }}>
                    Email
                  </label>
                  <input 
                    type="email" 
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '15px',
                      border: '1px solid var(--glass-border)',
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      backdropFilter: 'blur(10px)'
                    }}
                    placeholder="ton.email@exemple.com"
                  />
                </div>
                
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: 'var(--text-secondary)',
                    fontWeight: '500'
                  }}>
                    Sujet
                  </label>
                  <select style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '15px',
                    border: '1px solid var(--glass-border)',
                    background: 'rgba(139, 92, 246, 0.1)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    outline: 'none',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <option value="">Choisis un sujet</option>
                    <option value="bug">🐛 Signaler un bug</option>
                    <option value="feature">💡 Suggestion d&apos;amélioration</option>
                    <option value="support">🆘 Aide technique</option>
                    <option value="partnership">🤝 Partenariat</option>
                    <option value="amazon">🎁 Info récompenses Amazon</option>
                    <option value="other">💬 Autre</option>
                  </select>
                </div>
                
                <div>
                  <label style={{ 
                    display: 'block', 
                    marginBottom: '8px', 
                    color: 'var(--text-secondary)',
                    fontWeight: '500'
                  }}>
                    Message
                  </label>
                  <textarea 
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      borderRadius: '15px',
                      border: '1px solid var(--glass-border)',
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      backdropFilter: 'blur(10px)'
                    }}
                    placeholder="Raconte-nous tout ! Plus tu donnes de détails, mieux on pourra t'aider 😊"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="btn-premium"
                  style={{ 
                    marginTop: '20px',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}
                >
                  🚀 Envoyer le message
                </button>
              </form>
            </div>
            
            {/* Informations Contact */}
            <div>
              <div className="glass" style={{ padding: '40px', marginBottom: '30px' }}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  marginBottom: '25px',
                  color: 'var(--text-primary)',
                  textAlign: 'center'
                }}>
                  📧 Contacts Directs
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <a 
                    href="mailto:contact@darehive.app" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--glass-border)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>📧</span>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>Email Support</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>contact@darehive.app</div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:team@darehive.app" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--glass-border)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>👥</span>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>Équipe DareHive</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>team@darehive.app</div>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:partnerships@darehive.app" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '20px',
                      background: 'rgba(139, 92, 246, 0.1)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'var(--text-primary)',
                      border: '1px solid var(--glass-border)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>🤝</span>
                    <div>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem' }}>Partenariats</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>partnerships@darehive.app</div>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Réseaux Sociaux */}
              <div className="glass" style={{ padding: '40px' }}>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  fontWeight: '700', 
                  marginBottom: '25px',
                  color: 'var(--text-primary)',
                  textAlign: 'center'
                }}>
                  🌟 Retrouve-nous
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <a 
                    href="https://instagram.com/darehive.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '15px 20px',
                      background: 'linear-gradient(135deg, #E4405F, #C13584)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>@darehive.app sur Instagram</span>
                  </a>
                  
                  <a 
                    href="https://tiktok.com/@darehive.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '15px 20px',
                      background: 'linear-gradient(135deg, #000000, #fe2c55)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span>@darehive.app sur TikTok</span>
                  </a>
                  
                  <a 
                    href="https://twitter.com/darehive_app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px',
                      padding: '15px 20px',
                      background: 'linear-gradient(135deg, #000000, #14171a)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                    <span>@darehive_app sur X</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section FAQ Rapide */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="section-title">
            ❓ Questions Fréquentes
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: 'var(--text-primary)'
              }}>
                🕒 Temps de réponse moyen ?
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                On répond généralement dans les 24h ! Pour les urgences, utilise l&apos;email support prioritaire.
              </p>
            </div>
            
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: 'var(--text-primary)'
              }}>
                🎁 Comment recevoir des bons Amazon ?
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                Cette fonctionnalité est en cours de mise en place ! Pour l&apos;instant, les créateurs les plus actifs gagnent des badges exceptionnels qui leur permettront de gagner plus de points lors des prochains classements. Reste connecté pour ne rien manquer !
              </p>
            </div>
            
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: 'var(--text-primary)'
              }}>
                🐛 Comment signaler un bug ?
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                Utilise le formulaire ci-dessus en sélectionnant &quot;Signaler un bug&quot;. N&apos;oublie pas de décrire les étapes pour reproduire le problème !
              </p>
            </div>
            
            <div className="feature-card" style={{ textAlign: 'left' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '600', 
                marginBottom: '12px',
                color: 'var(--text-primary)'
              }}>
                💡 Proposer une nouvelle fonctionnalité ?
              </h3>
              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1rem',
                lineHeight: '1.6',
                margin: 0
              }}>
                On adore les bonnes idées ! Envoie-nous ta suggestion détaillée, on étudie chaque proposition avec attention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}