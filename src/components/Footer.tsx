import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        borderTopLeftRadius: '2rem',
        borderTopRightRadius: '2rem',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <span>
        DareHive © {new Date().getFullYear()}
      </span>
    </footer>
  );
}