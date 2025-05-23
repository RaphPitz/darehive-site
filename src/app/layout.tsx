import type { Metadata } from "next";
import "./globals.css";
import Footer from '../components/Footer';
import { LanguageProvider } from '../contexts/LanguageContext';

export const metadata: Metadata = {
  title: "DareHive - Défis Vidéo Nouvelle Génération",
  description: "Rejoins la ruche, relève des défis fun, partage tes vidéos et grimpe dans le classement ! L'app de défis vidéo qui révolutionne le divertissement mobile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={"antialiased"}
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <LanguageProvider>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
