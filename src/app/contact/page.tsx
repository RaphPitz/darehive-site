'use client';

import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function Contact() {
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
            📞 Contacte-nous
          </h1>
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
                    <span style={{ fontSize: '1.5rem' }}>📸</span>
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
                    <span style={{ fontSize: '1.5rem' }}>🎵</span>
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
                      background: 'linear-gradient(135deg, #1DA1F2, #0d8bd9)',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>🐦</span>
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