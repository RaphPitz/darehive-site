'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Largeur d'une carte + gap
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <main style={{ 
      flex: 1, 
      minHeight: '100vh',
      paddingBottom: '80px',
      position: 'relative'
    }}>
      <Navbar />
      
      {/* Hero Section Ultra Moderne */}
      <section className="hero-section">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <Image 
              src="/LogoRaph.png" 
              alt="Logo DareHive" 
              width={60} 
              height={60} 
              style={{ borderRadius: '12px' }}
            />
            <h1 className="hero-title" style={{ margin: 0 }}>
              {t('home.title')}
            </h1>
          </div>
          <h2 className="hero-subtitle">
            La révolution des défis vidéo commence maintenant ! Rejoins la ruche, fais le buzz et décroche la première place !
          </h2>
          
          <div className="download-badges">
            <a href="https://apps.apple.com/fr/app/darehive/id6745623662" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt={t('common.appStore')}
                className="download-badge"
              />
            </a>
            <div style={{ position: 'relative' }}>
                            <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt={t('common.comingSoon')}
                className="download-badge"
                style={{ opacity: 0.5, filter: 'grayscale(100%)' }}
              />
      <div style={{
        position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'var(--glass-violet)',
                color: 'var(--text-primary)',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: '600',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--glass-border)'
              }}>
                {t('home.comingSoon')}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carousel Screenshots */}
      <section style={{ padding: '60px 0' }}>
        <h2 className="section-title darehive-text">
          {t('home.screenshotsTitle').toUpperCase()}
        </h2>
        <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Bouton Précédent */}
          <button
            className="carousel-nav-button"
            onClick={() => scrollCarousel('left')}
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'var(--glass-violet)',
              backdropFilter: 'blur(24px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
            }}
          >
            ←
          </button>

          {/* Bouton Suivant */}
          <button
            className="carousel-nav-button"
            onClick={() => scrollCarousel('right')}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              background: 'var(--glass-violet)',
              backdropFilter: 'blur(24px)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
            }}
          >
            →
          </button>

          <div ref={carouselRef} className="carousel">
            <div className="carousel-card">
              <Image 
                src="/capture1.png"
                alt="Capture 1"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture2.png"
                alt="Capture 2"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture3.png"
                alt="Capture 3"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture4.png"
                alt="Capture 4"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture5.png"
                alt="Capture 5"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture6.png"
                alt="Capture 6"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture7.png"
                alt="Capture 7"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture8.png"
                alt="Capture 8"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture9.png"
                alt="Capture 9"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="carousel-card">
              <Image 
                src="/capture10.png"
                alt="Capture 10"
                width={300}
                height={600}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Chèques Cadeaux Amazon - Animation */}
      <section style={{ 
        padding: '40px 20px',
        background: 'linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 152, 0, 0.1))',
        borderTop: '1px solid rgba(255, 193, 7, 0.3)',
        borderBottom: '1px solid rgba(255, 193, 7, 0.3)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px',
            background: 'rgba(255, 193, 7, 0.2)',
            padding: '20px 40px',
            borderRadius: '25px',
            border: '2px solid rgba(255, 193, 7, 0.5)',
            backdropFilter: 'blur(10px)',
            animation: 'pulse 2s infinite, glow 3s ease-in-out infinite alternate',
            boxShadow: '0 10px 30px rgba(255, 193, 7, 0.3)'
          }}>
            <div style={{
              fontSize: '3rem',
              animation: 'bounce 1.5s infinite'
            }}>
              🎁
            </div>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                margin: 0,
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                CHÈQUES CADEAUX AMAZON À GAGNER !
              </h3>
              <p style={{
                fontSize: '1.2rem',
                margin: '5px 0 0 0',
                color: 'var(--text-primary)',
                fontWeight: '600'
              }}>
                🏆 Les plus actifs remportent des récompenses exclusives
              </p>
            </div>
            <div style={{
              fontSize: '3rem',
              animation: 'bounce 1.5s infinite 0.5s'
            }}>
              💰
            </div>
          </div>
        </div>
        
        {/* Particules animées */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          fontSize: '2rem',
          animation: 'float 4s ease-in-out infinite'
        }}>✨</div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          fontSize: '1.5rem',
          animation: 'float 3s ease-in-out infinite 1s'
        }}>💎</div>
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '20%',
          fontSize: '1.8rem',
          animation: 'float 3.5s ease-in-out infinite 2s'
        }}>🎯</div>
        
        <style jsx>{`
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes glow {
            from { 
              box-shadow: 0 10px 30px rgba(255, 193, 7, 0.3);
            }
            to { 
              box-shadow: 0 15px 40px rgba(255, 193, 7, 0.6), 0 0 20px rgba(255, 193, 7, 0.4);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-20px) rotate(120deg); }
            66% { transform: translateY(-10px) rotate(240deg); }
          }
        `}</style>
      </section>

      {/* Section Fonctionnalités Premium */}
      <section style={{ padding: '80px 0' }}>
        <h2 className="section-title">
          {t('home.featuresTitle')}
        </h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              {t('home.features.videoChallenges.title')}
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              {t('home.features.videoChallenges.description')}
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Système de Classement & Récompenses
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Gagne des points XP, grimpe dans les ranks et deviens une légende ! Les plus actifs reçoivent des badges exclusifs et à terme des bons cadeaux Amazon !
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Contenu Viral
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Deviens viral ! Nos défis sont conçus pour générer du contenu authentique et engageant qui cartonne sur les réseaux.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Communauté Active
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Rejoins une communauté de créateurs passionnés ! Découvre, like et partage les meilleures vidéos de la ruche.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Défis Personnalisés (bientôt)
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Algorithme intelligent en développement qui s&apos;adaptera à tes goûts ! Bientôt des défis sur mesure qui correspondent à ta personnalité.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Récompenses Amazon
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Débloque des badges rares, des titres prestigieux et bientôt des bons cadeaux Amazon pour les meilleurs créateurs !
            </p>
          </div>
        </div>
      </section>

      {/* Section Call to Action Final */}
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
            Prêt à rejoindre la ruche ?
          </h2>
        </div>
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}>
          Télécharge <span className="darehive-text">DareHive</span> maintenant et commence ton aventure dans l&apos;univers le plus fun des défis vidéo !
        </p>
        
        <div className="download-badges">
          <a href="https://apps.apple.com/fr/app/darehive/id6745623662" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
              alt="Télécharger sur l'App Store"
              className="download-badge"
              style={{ height: '70px' }}
            />
          </a>
        </div>
        
        <div style={{
          marginTop: '40px',
          padding: '20px',
          background: 'rgba(139, 92, 246, 0.1)',
          borderRadius: '20px',
          border: '1px solid rgba(196, 132, 252, 0.2)'
        }}>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            margin: 0
          }}>
            Version Android en cours de développement
          </p>
        </div>
      </section>
    </main>
  );
}