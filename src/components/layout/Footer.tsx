import { useTranslation } from 'react-i18next';
import krwinLogo from '@/assets/icons/krwin_logo.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-950 text-gray-300 pb-10 pt-10">
      <div className="w-full max-w-screen-lg mx-auto px-4 space-y-12">
        {/* 로고 + SNS */}
        <div className="flex flex-row w-full items-center justify-between mb-8 sm:mb-0 pb-10">
          <div className="flex items-center space-x-3">
            <img src={krwinLogo} alt="KRWIN Logo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-white">KRWIN</span>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="text-center text-xs text-gray-500 pt-6 border-t border-neutral-700">
          <div>{t('footer.copyright', { year: new Date().getFullYear() })}</div>
          <div className="mt-4 text-gray-400 max-w-2xl mx-auto">{t('footer.disclaimer')}</div>
        </div>
      </div>
    </footer>
  );
}
