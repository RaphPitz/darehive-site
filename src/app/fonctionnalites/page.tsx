'use client';

import Image from 'next/image';
import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';

export default function Fonctionnalites() {
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
            <h1 className="hero-title">
              ⚡ Fonctionnalités <span className="darehive-text">DAREHIVE</span>
            </h1>
          </div>
          <h2 className="hero-subtitle">
            Découvre toute la puissance de l&apos;app de défis vidéo nouvelle génération
          </h2>
        </div>
      </section>

      {/* Section Création de Contenu */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass" style={{ padding: '60px 40px', marginBottom: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <h2 style={{ 
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
                  fontWeight: '700', 
                  marginBottom: '24px',
                  color: 'var(--text-primary)'
                }}>
                  🎬 Studio de Création Intégré
                </h2>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Interface intuitive inspirée de TikTok pour filmer, éditer et partager tes défis en quelques secondes.
                </p>
                <ul style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  listStyle: 'none',
                  padding: 0
                }}>
                  <li style={{ marginBottom: '12px' }}>✨ Filtres et effets en temps réel (en cours de dev)</li>
                  <li style={{ marginBottom: '12px' }}>🎵 Bibliothèque musicale intégrée (en cours de dev)</li>
                  <li style={{ marginBottom: '12px' }}>📱 Montage simplifié en un clic</li>
                  <li style={{ marginBottom: '12px' }}>🌟 Templates de défis prêts à l&apos;emploi</li>
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '300px',
                  height: '400px',
                  background: 'linear-gradient(135deg, var(--primary-violet), var(--accent-violet))',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.4)'
                }}>
                  🎥
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Social & Communauté */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass" style={{ padding: '60px 40px', marginBottom: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '300px',
                  height: '400px',
                  background: 'linear-gradient(135deg, var(--accent-violet), var(--primary-purple))',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(168, 85, 247, 0.4)'
                }}>
                  🌐
                </div>
              </div>
              <div>
                <h2 style={{ 
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
                  fontWeight: '700', 
                  marginBottom: '24px',
                  color: 'var(--text-primary)'
                }}>
                  🚀 Feed Social Intelligent
                </h2>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Algorithme avancé qui te propose le contenu le plus engageant de la communauté DareHive.
                </p>
                <ul style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  listStyle: 'none',
                  padding: 0
                }}>
                  <li style={{ marginBottom: '12px' }}>❤️ Système de likes et commentaires</li>
                  <li style={{ marginBottom: '12px' }}>🔄 Partage vers tous les réseaux</li>
                  <li style={{ marginBottom: '12px' }}>👥 Suivre tes créateurs préférés</li>
                  <li style={{ marginBottom: '12px' }}>🔥 Découverte de tendances virales</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Gamification */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass" style={{ padding: '60px 40px', marginBottom: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div>
                <h2 style={{ 
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
                  fontWeight: '700', 
                  marginBottom: '24px',
                  color: 'var(--text-primary)'
                }}>
                  🏆 Système de Progression & Récompenses Amazon
                </h2>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Monte dans les rangs, débloque des récompenses exclusives et deviens une légende de DareHive ! Classements mensuels avec remise à zéro.
                </p>
                <ul style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  listStyle: 'none',
                  padding: 0
                }}>
                  <li style={{ marginBottom: '12px' }}>💎 Badges rares et titres prestigieux</li>
                  <li style={{ marginBottom: '12px' }}>⚡ Points XP et niveaux de progression</li>
                  <li style={{ marginBottom: '12px' }}>🎯 Défis quotidiens disponibles</li>
                  <li style={{ marginBottom: '12px' }}>📅 Défis hebdomadaires (bientôt disponibles)</li>
                  <li style={{ marginBottom: '12px' }}>🗓️ Classement mensuel avec remise à zéro</li>
                  <li style={{ marginBottom: '12px' }}>🎁 Bons cadeaux Amazon pour les plus actifs</li>
                </ul>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '300px',
                  height: '400px',
                  background: 'linear-gradient(135deg, var(--primary-purple), var(--primary-deep))',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(76, 29, 149, 0.4)'
                }}>
                  🎮
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section IA et Personnalisation */}
      <section style={{ padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="glass" style={{ padding: '60px 40px', marginBottom: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '300px',
                  height: '400px',
                  background: 'linear-gradient(135deg, var(--accent-light), var(--primary-violet))',
                  borderRadius: '30px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  margin: '0 auto',
                  boxShadow: '0 20px 40px rgba(196, 132, 252, 0.4)'
                }}>
                  🤖
                </div>
              </div>
              <div>
                <h2 style={{ 
                  fontSize: 'clamp(2rem, 3vw, 2.5rem)', 
                  fontWeight: '700', 
                  marginBottom: '24px',
                  color: 'var(--text-primary)'
                }}>
                  🧠 Intelligence Artificielle Avancée (en développement)
                </h2>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--text-secondary)', 
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  Notre IA est en cours de développement pour s&apos;adapter à tes préférences et te proposer l&apos;expérience la plus personnalisée possible.
                </p>
                <ul style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  listStyle: 'none',
                  padding: 0
                }}>
                  <li style={{ marginBottom: '12px' }}>🎯 Défis personnalisés selon tes goûts (bientôt)</li>
                  <li style={{ marginBottom: '12px' }}>📊 Analyse de performance en temps réel</li>
                  <li style={{ marginBottom: '12px' }}>🔮 Prédiction de contenu viral (en développement)</li>
                  <li style={{ marginBottom: '12px' }}>🎨 Suggestions créatives automatiques (bientôt)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid des Fonctionnalités Techniques */}
      <section style={{ padding: '80px 20px' }}>
        <h2 className="section-title">
          🔧 Fonctionnalités Techniques
        </h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Performance Ultra-Rapide
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              Architecture optimisée pour un chargement instantané et une navigation fluide. On travaille tous les jours à optimiser l&apos;expérience.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Sécurité Renforcée
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              Chiffrement end-to-end et protection avancée de tes données personnelles.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Interface Native iOS
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              Design parfaitement intégré aux standards Apple pour une expérience premium.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">☁️</div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Synchronisation Cloud
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              Tes créations sauvegardées automatiquement et accessibles partout.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Communauté Mondiale
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              Connecte-toi avec des créateurs du monde entier et découvre de nouveaux talents.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎁</div>
            <h3 style={{ 
              fontSize: '1.3rem', 
              fontWeight: '600', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Récompenses Amazon
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '0.9rem',
              lineHeight: '1.6'
            }}>
              Les créateurs les plus actifs et talentueux reçoivent des bons cadeaux Amazon !
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ 
        padding: '100px 20px',
        textAlign: 'center',
        background: 'var(--glass-violet)',
        backdropFilter: 'blur(24px)',
        margin: '0 20px',
        borderRadius: '30px',
        border: '1px solid var(--glass-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
          <Image 
            src="/LogoRaph.png" 
            alt="Logo DareHive" 
            width={50} 
            height={50} 
            style={{ borderRadius: '10px' }}
          />
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '800',
            margin: 0,
            background: 'linear-gradient(135deg, var(--text-primary), var(--accent-light))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            🚀 Prêt pour l&apos;aventure ?
          </h2>
        </div>
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}>
          Télécharge DareHive maintenant et découvre toutes ces fonctionnalités révolutionnaires ! Les plus actifs recevront bientôt des bons Amazon !
        </p>
        
        <div className="download-badges">
          <a href="https://apps.apple.com/app/darehive/id6478155193" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Télécharger sur l'App Store"
              className="download-badge"
              style={{ height: '70px' }}
            />
          </a>
        </div>
      </section>
    </main>
  );
}