'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function InvitePage() {
  const searchParams = useSearchParams();
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    // Récupérer le code de parrainage depuis l'URL
    const ref = searchParams.get('ref');
    setReferralCode(ref);

    if (ref) {
      handleReferralRedirect(ref);
    }
  }, [searchParams]);

  const handleReferralRedirect = (refCode: string) => {
    setIsRedirecting(true);

    // Stocker le code de parrainage dans le localStorage pour l'app
    if (typeof window !== 'undefined') {
      localStorage.setItem('darehive_referral_code', refCode);
    }

    // Détecter le type d'appareil
    const userAgent = navigator.userAgent || navigator.vendor;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /android/i.test(userAgent);

    if (isIOS) {
      // Essayer d'ouvrir l'app iOS d'abord
      const appScheme = `darehive://invite?ref=${refCode}`;
      const appStoreURL = 'https://apps.apple.com/app/darehive/id6738159159'; // Remplacez par votre vrai ID

      // Tentative d'ouverture de l'app
      window.location.href = appScheme;

      // Si l'app ne s'ouvre pas, rediriger vers l'App Store après 2 secondes
      setTimeout(() => {
        window.location.href = appStoreURL;
      }, 2000);

    } else if (isAndroid) {
      // Pour Android (si vous avez une version Android plus tard)
      const playStoreURL = 'https://play.google.com/store/apps/details?id=com.pitzini.darehive3';
      window.location.href = playStoreURL;

    } else {
      // Pour desktop, rediriger vers l'App Store iOS
      const appStoreURL = 'https://apps.apple.com/app/darehive/id6738159159';
      window.location.href = appStoreURL;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-3xl">🎮</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Invitation DareHive
          </h1>
          {referralCode && (
            <p className="text-blue-200 text-sm">
              Code de parrainage : <span className="font-mono bg-white/20 px-2 py-1 rounded">{referralCode}</span>
            </p>
          )}
        </div>

        {isRedirecting ? (
          <div className="space-y-4">
            <div className="animate-spin w-8 h-8 border-4 border-white/30 border-t-white rounded-full mx-auto"></div>
            <p className="text-white">
              Redirection en cours...
            </p>
            <p className="text-blue-200 text-sm">
              Si l&apos;app ne s&apos;ouvre pas automatiquement, vous serez redirigé vers l&apos;App Store.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-white">
              Vous avez été invité à rejoindre DareHive !
            </p>
            <button
              onClick={() => referralCode && handleReferralRedirect(referralCode)}
              className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 transform hover:scale-105"
            >
              Ouvrir DareHive
            </button>
            <p className="text-blue-200 text-xs">
              L&apos;app s&apos;ouvrira automatiquement ou vous serez redirigé vers l&apos;App Store.
            </p>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-white/20">
          <h2 className="text-lg font-semibold text-white mb-3">
            Qu&apos;est-ce que DareHive ?
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            DareHive est l&apos;app de défis qui transforme votre quotidien en aventure ! 
            Relevez des défis, gagnez des points, et grimpez dans le classement avec vos amis.
          </p>
        </div>
      </div>
    </div>
  );
} 