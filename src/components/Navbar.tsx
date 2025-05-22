import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass topbar" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem 2rem', marginBottom: '1.5rem', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', fontWeight: 600, fontSize: '1.1rem', color: '#fff', paddingRight: 32 }}>
        <Link href="/" style={{ textDecoration: 'none', color: '#FFD600', fontWeight: 700, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Image src="/LogoRaph.png" alt="Logo DareHive" width={32} height={32} style={{ borderRadius: '0.5rem', marginRight: 8 }} />
          DareHive
        </Link>
        <Link href="/fonctionnalites" style={{ textDecoration: 'none', color: '#fff' }}>Fonctionnalités</Link>
        <Link href="/cgu" style={{ textDecoration: 'none', color: '#fff' }}>CGU</Link>
        <Link href="/confidentialite" style={{ textDecoration: 'none', color: '#fff' }}>Confidentialité</Link>
        <Link href="/contact" style={{ textDecoration: 'none', color: '#fff', paddingRight: 16 }}>Contact</Link>
      </div>
    </nav>
  );
}