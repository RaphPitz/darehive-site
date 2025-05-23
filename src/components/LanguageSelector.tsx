'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage, Language, languageNames } from '../contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      {/* Bouton sélecteur */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(4px, 1vw, 8px)',
          padding: 'clamp(6px, 1.5vw, 10px) clamp(10px, 2vw, 16px)',
          background: 'rgba(139, 92, 246, 0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '25px',
          color: 'var(--text-secondary)',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          outline: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(139, 92, 246, 0.25)';
          e.currentTarget.style.color = 'var(--text-primary)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
          e.currentTarget.style.color = 'var(--text-secondary)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' }}>
          {language === 'fr' ? '🇫🇷' : language === 'en' ? '🇬🇧' : '🇪🇸'}
        </span>
        <span className="language-text">
          {t('nav.language')}
        </span>
        <span style={{ 
          fontSize: 'clamp(0.6rem, 1vw, 0.8rem)',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}>
          ▼
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: '0',
            background: 'var(--glass-violet)',
            backdropFilter: 'blur(24px)',
            border: '1px solid var(--glass-border)',
            borderRadius: '15px',
            padding: '8px',
            minWidth: '160px',
            zIndex: 1000,
            boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)',
            animation: 'slideDown 0.2s ease-out'
          }}
        >
          {(Object.keys(languageNames) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
                padding: '12px 16px',
                background: language === lang ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                border: 'none',
                borderRadius: '10px',
                color: language === lang ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: language === lang ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => {
                if (language !== lang) {
                  e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }
              }}
              onMouseLeave={(e) => {
                if (language !== lang) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>
                {lang === 'fr' ? '🇫🇷' : lang === 'en' ? '🇬🇧' : '🇪🇸'}
              </span>
              <span>
                {languageNames[lang].replace(/^🇫🇷 |^🇬🇧 |^🇪🇸 /, '')}
              </span>
              {language === lang && (
                <span style={{ marginLeft: 'auto', color: 'var(--accent-light)' }}>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 