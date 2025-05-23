import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="topbar">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '40px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Logo DareHive */}
        <Link 
          href="/" 
          style={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 20px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, var(--primary-violet), var(--accent-violet))',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.2rem',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Image 
            src="/LogoRaph.png" 
            alt="Logo DareHive" 
            width={24} 
            height={24} 
            style={{ borderRadius: '6px' }}
          />
          <span>DareHive</span>
        </Link>

        {/* Navigation Links */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px',
          background: 'rgba(139, 92, 246, 0.1)',
          padding: '8px',
          borderRadius: '50px',
          border: '1px solid var(--glass-border)',
          backdropFilter: 'blur(10px)'
        }}>
          <Link href="/fonctionnalites">
            ⚡ Fonctionnalités
          </Link>
          <Link href="/contact">
            📞 Contact
          </Link>
          <Link href="/cgu">
            📋 CGU
          </Link>
          <Link href="/confidentialite">
            🔒 Confidentialité
          </Link>
        </div>

        {/* Bouton de Téléchargement */}
        <a 
          href="https://apps.apple.com/app/darehive/id6478155193"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium"
          style={{
            padding: '12px 24px',
            fontSize: '0.95rem',
            fontWeight: '600',
            whiteSpace: 'nowrap'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>📱</span>
          Télécharger
        </a>
      </div>
    </nav>
  );
}