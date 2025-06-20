import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="topbar">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        gap: 'clamp(8px, 2vw, 20px)',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '0 clamp(10px, 2vw, 20px)'
      }}>
        {/* Logo DareHive */}
        <Link 
          href="/" 
          style={{ 
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(6px, 1vw, 12px)',
            padding: 'clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 20px)',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, var(--primary-violet), var(--accent-violet))',
            color: 'white',
            fontWeight: '700',
            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 20px rgba(139, 92, 246, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            flexShrink: 0
          }}
        >
          <Image 
            src="/LogoRaph.png" 
            alt="Logo DareHive" 
            width={20} 
            height={20} 
            style={{ borderRadius: '4px' }}
          />
          <span className="darehive-text">DAREHIVE</span>
        </Link>

        {/* Navigation Links - Version desktop */}
        <div 
          className="navbar-links-desktop"
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            background: 'rgba(139, 92, 246, 0.1)',
            padding: '6px',
            borderRadius: '50px',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <Link 
            href="/fonctionnalites"
            style={{
              padding: '8px 12px',
              borderRadius: '25px',
              textDecoration: 'none',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}
            title={t('nav.features')}
          >
            ⚡
          </Link>
          <Link 
            href="/contact"
            style={{
              padding: '8px 12px',
              borderRadius: '25px',
              textDecoration: 'none',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}
            title={t('nav.contact')}
          >
            📞
          </Link>
          <Link 
            href="/cgu"
            style={{
              padding: '8px 12px',
              borderRadius: '25px',
              textDecoration: 'none',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}
            title={t('nav.terms')}
          >
            📋
          </Link>
          <Link 
            href="/confidentialite"
            style={{
              padding: '8px 12px',
              borderRadius: '25px',
              textDecoration: 'none',
              color: 'var(--text-secondary)',
              fontSize: 'clamp(0.7rem, 1.5vw, 0.85rem)',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }}
            title={t('nav.privacy')}
          >
            🔒
          </Link>
        </div>

        {/* Sélecteur de langue */}
        <LanguageSelector />

        {/* Bouton de Téléchargement */}
        <a 
          href="https://apps.apple.com/fr/app/darehive/id6745623662"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-premium"
          style={{
            padding: 'clamp(8px, 1.5vw, 12px) clamp(10px, 2vw, 20px)',
            fontSize: 'clamp(0.75rem, 1.5vw, 0.95rem)',
            fontWeight: '600',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(4px, 1vw, 8px)'
          }}
        >
          <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)' }}>📱</span>
          <span className="download-text">{t('nav.download')}</span>
        </a>
      </div>
    </nav>
  );
}