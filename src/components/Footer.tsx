import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        alignItems: 'start'
      }}>
        
        {/* Section Logo et Description */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <span style={{ fontSize: '2rem' }}>🐝</span>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, var(--text-primary), var(--accent-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0
            }}>
              DareHive
            </h3>
          </div>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '25px'
          }}>
            La révolution des défis vidéo est en marche ! Rejoins la ruche et deviens viral.
          </p>
          
          {/* Réseaux Sociaux */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <a 
              href="https://instagram.com/darehive.app" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #E4405F, #C13584)',
                borderRadius: '12px',
                fontSize: '1.3rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(228, 64, 95, 0.3)'
              }}
            >
              📸
            </a>
            <a 
              href="https://tiktok.com/@darehive.app" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #000000, #fe2c55)',
                borderRadius: '12px',
                fontSize: '1.3rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(254, 44, 85, 0.3)'
              }}
            >
              🎵
            </a>
            <a 
              href="https://twitter.com/darehive_app" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, #1DA1F2, #0d8bd9)',
                borderRadius: '12px',
                fontSize: '1.3rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)'
              }}
            >
              🐦
            </a>
          </div>
        </div>

        {/* Section Navigation */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '20px'
          }}>
            🧭 Navigation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link 
              href="/" 
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🏠 Accueil
            </Link>
            <Link 
              href="/fonctionnalites" 
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              ⚡ Fonctionnalités
            </Link>
            <Link 
              href="/contact" 
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              📞 Contact
            </Link>
          </div>
        </div>

        {/* Section Légal */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '20px'
          }}>
            ⚖️ Légal
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link 
              href="/cgu" 
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              📋 Conditions d&apos;Utilisation
            </Link>
            <Link 
              href="/confidentialite" 
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              🔒 Politique de Confidentialité
            </Link>
          </div>
        </div>

        {/* Section Contact */}
        <div>
          <h4 style={{
            fontSize: '1.2rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '20px'
          }}>
            💌 Restons connectés
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a 
              href="mailto:contact@darehive.app"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              📧 contact@darehive.app
            </a>
            <a 
              href="mailto:team@darehive.app"
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              👥 team@darehive.app
            </a>
            <div style={{
              marginTop: '15px',
              padding: '15px',
              background: 'rgba(139, 92, 246, 0.1)',
              borderRadius: '12px',
              border: '1px solid var(--glass-border)'
            }}>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                margin: 0,
                textAlign: 'center'
              }}>
                🚀 Version iOS disponible !<br/>
                📱 Android en développement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div style={{
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)',
        margin: '40px 0 30px 0'
      }} />

      {/* Copyright */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.9rem',
          margin: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          © {new Date().getFullYear()} DareHive
          <span style={{ fontSize: '1rem' }}>🐝</span>
          Créé avec passion pour la communauté des créateurs
        </p>
      </div>
    </footer>
  );
}