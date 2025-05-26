import Image from 'next/image';
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
            <Image 
              src="/LogoRaph.png" 
              alt="Logo DareHive" 
              width={40} 
              height={40} 
              style={{ borderRadius: '8px' }}
            />
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, var(--text-primary), var(--accent-light))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0
            }}>
              <span className="darehive-text">DAREHIVE</span>
            </h3>
          </div>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '25px'
          }}>
            La révolution des défis vidéo est en marche ! Rejoins la ruche et deviens viral pour gagner des récompenses Amazon.
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
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(228, 64, 95, 0.3)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
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
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(254, 44, 85, 0.3)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
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
                background: 'linear-gradient(135deg, #000000, #14171a)',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(20, 23, 26, 0.3)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
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
              📱 Version Android en cours de développement<br/>
              🎁 Récompenses Amazon en développement
            </p>
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
          © {new Date().getFullYear()} <span className="darehive-text">DAREHIVE</span>
          <Image 
            src="/LogoRaph.png" 
            alt="Logo DareHive" 
            width={16} 
            height={16} 
            style={{ borderRadius: '3px' }}
          />
          Créé avec passion pour la communauté des créateurs
        </p>
      </div>
    </footer>
  );
}