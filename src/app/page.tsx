'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRef, useEffect } from 'react';

const screenshots = [
  '/capture1.png',
  '/capture2.png',
  '/capture3.png',
  '/capture4.png',
  '/capture5.png',
  '/capture6.png',
];

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    let startX = 0, scrollLeft = 0;
    const onTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!startX) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      el.scrollLeft = scrollLeft - (x - startX);
    };
    el.addEventListener('touchstart', onTouchStart);
    el.addEventListener('touchmove', onTouchMove);
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflowX: 'hidden' }}>
      {/* Fond dégradé animé glossy */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -10, animation: 'gradient-move 12s ease-in-out infinite', background: 'linear-gradient(135deg, #7B2FF2 0%, #F357A8 40%, #3B8AFF 80%, #FFD600 100%)', backgroundSize: '200% 200%' }} />
      {/* Effet glossy */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -10, pointerEvents: 'none', background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(24px)' }} />

      <Navbar />

      {/* Contenu principal */}
      <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 64, marginBottom: 32, padding: '0 1rem', width: '100%', textAlign: 'center' }}>
        <Image
          src="/LogoRaph.png"
          alt="Logo DareHive"
          width={120}
          height={120}
          style={{ borderRadius: '2rem', boxShadow: '0 8px 32px #7B2FF299', border: '4px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.1)' }}
        />
        <h1 style={{ marginTop: 32, fontSize: '2.5rem', fontWeight: 800, color: '#fff', textAlign: 'center', textShadow: '0 2px 16px #7B2FF2, 0 1px 2px #FFD600' }}>
          Ose, filme, brille.<br />
          <span style={{ color: '#FFD600' }}>DareHive</span> : le défi vidéo nouvelle génération
        </h1>
        <p style={{ marginTop: 16, fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', textAlign: 'center', maxWidth: 600 }}>
          Rejoins la ruche, relève des défis fun, partage tes vidéos et grimpe dans le classement&nbsp;!
        </p>
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'row', gap: 16, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <a
            href="https://apps.apple.com/fr/app/darehive/id000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium"
          >
            <svg width="24" height="24" fill="currentColor" style={{ marginRight: 8 }} viewBox="0 0 24 24"><path d="M17.564 13.271c-.025-2.568 2.099-3.797 2.192-3.854-1.197-1.748-3.06-1.99-3.719-2.018-1.584-.161-3.09.927-3.892.927-.803 0-2.033-.904-3.349-.88-1.72.025-3.312 1.002-4.195 2.547-1.797 3.116-.459 7.728 1.29 10.257.857 1.236 1.872 2.626 3.21 2.574 1.297-.052 1.785-.832 3.353-.832 1.568 0 1.995.832 3.36.807 1.393-.025 2.267-1.262 3.117-2.5.613-.892.868-1.36 1.358-2.384-3.569-1.364-3.428-4.012-3.401-4.099zm-3.36-7.29c.715-.868 1.2-2.08 1.067-3.281-1.032.041-2.28.687-3.025 1.555-.664.779-1.247 2.021-1.027 3.211 1.163.09 2.37-.591 2.985-1.485z"/></svg>
            Télécharger sur l&apos;App Store
          </a>
          <button
            disabled
            style={{ padding: '1rem 2.5rem', borderRadius: 9999, background: '#bbb', color: '#fff', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 24px #7B2FF299', border: '2px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: 8, opacity: 0.6, cursor: 'not-allowed' }}
          >
            <svg width="24" height="24" fill="currentColor" style={{ marginRight: 8 }} viewBox="0 0 24 24"><path d="M1.326 1.991c-.82.82-.82 2.149 0 2.969l15.714 15.714c.82.82 2.149.82 2.969 0l2.969-2.969c.82-.82.82-2.149 0-2.969l-15.714-15.714c-.82-.82-2.149-.82-2.969 0l-2.969 2.969zm2.969 0l15.714 15.714-2.969 2.969-15.714-15.714 2.969-2.969z"/></svg>
            Télécharger sur Play Store <span style={{ marginLeft: 8, fontSize: 12 }}>(Bientôt)</span>
          </button>
        </div>
      </section>

      {/* Carrousel de captures d&apos;écran */}
      <section style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 64 }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', marginBottom: 16, textShadow: '0 2px 16px #7B2FF2, 0 1px 2px #FFD600' }} id="features">
          Aperçu de DareHive
        </h2>
        <div style={{ position: 'relative', width: '100%', maxWidth: 900 }}>
          <button
            aria-label="Précédent"
            onClick={() => scroll('left')}
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.3)', color: '#7B2FF2', fontWeight: 'bold', borderRadius: '50%', padding: 12, border: 'none', cursor: 'pointer', fontSize: 24 }}
          >
            ‹
          </button>
          <div
            ref={carouselRef}
            className="carousel"
          >
            {screenshots.map((src, i) => (
              <div
                key={src}
                className="carousel-card"
                style={{ minWidth: 320, maxWidth: 320, marginRight: i !== screenshots.length - 1 ? '-4px' : 0, borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', border: '4px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(24px)', scrollSnapAlign: 'center', transition: 'transform 0.3s' }}
              >
                <Image
                  src={src}
                  alt={`Capture d&apos;écran ${i + 1}`}
                  width={320}
                  height={690}
                  style={{ width: 320, height: 'auto', objectFit: 'cover', display: 'block' }}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
          <button
            aria-label="Suivant"
            onClick={() => scroll('right')}
            style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.3)', color: '#7B2FF2', fontWeight: 'bold', borderRadius: '50%', padding: 12, border: 'none', cursor: 'pointer', fontSize: 24 }}
          >
            ›
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}