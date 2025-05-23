import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function Home() {
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
          <h1 className="hero-title">
            🐝 DAREHIVE
          </h1>
          <h2 className="hero-subtitle">
            La révolution des défis vidéo arrive ! 
            Rejoins la ruche, crée du contenu viral et grimpe au sommet du classement !
          </h2>
          
          <div className="download-badges">
            <a href="https://apps.apple.com/app/darehive/id6478155193" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Télécharger sur l'App Store"
                className="download-badge"
              />
            </a>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Bientôt sur Google Play"
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
                BIENTÔT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Carousel Screenshots */}
      <section style={{ padding: '60px 0' }}>
        <h2 className="section-title">
          📱 Découvre l&apos;Expérience DareHive
        </h2>
        <div className="carousel">
          <div className="carousel-card">
            <Image 
              src="/screenshots/1.png"
              alt="Interface DareHive - Découverte"
              width={300}
              height={600}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="carousel-card">
            <Image 
              src="/screenshots/2.png"
              alt="Interface DareHive - Création"
              width={300}
              height={600}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="carousel-card">
            <Image 
              src="/screenshots/3.png"
              alt="Interface DareHive - Classement"
              width={300}
              height={600}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="carousel-card">
            <Image 
              src="/screenshots/4.png"
              alt="Interface DareHive - Social"
              width={300}
              height={600}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités Premium */}
      <section style={{ padding: '80px 0' }}>
        <h2 className="section-title">
          ⚡ Fonctionnalités Next-Gen
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
              Défis Vidéo Immersifs
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Relève des défis créatifs, filme tes réactions les plus authentiques et partage ton talent avec la communauté DareHive !
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
              Système de Classement
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Gagne des points XP, grimpe dans les ranks et devient une légende ! Chaque défi relevé te rapproche du sommet.
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
              Défis Personnalisés
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Algorithme intelligent qui s&apos;adapte à tes goûts ! Reçois des défis sur mesure qui correspondent à ta personnalité.
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
              Récompenses Exclusives
            </h3>
            <p style={{ 
              color: 'var(--text-secondary)', 
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Débloque des badges rares, des titres prestigieux et des récompenses exclusives en relevant nos défis les plus épiques !
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
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '800',
          marginBottom: '24px',
          background: 'linear-gradient(135deg, var(--text-primary), var(--accent-light))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          🐝 Prêt à rejoindre la ruche ?
        </h2>
        <p style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          color: 'var(--text-secondary)',
          maxWidth: '600px',
          margin: '0 auto 50px',
          lineHeight: '1.6'
        }}>
          Télécharge DareHive maintenant et commence ton aventure dans l&apos;univers le plus fun des défis vidéo !
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
            ⚡ Version Android en développement - Rejoins notre liste d&apos;attente !
          </p>
        </div>
      </section>
    </main>
  );
}