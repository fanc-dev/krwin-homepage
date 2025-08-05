// React and External Libraries
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

// Components
import FinancialStatusSection from '@/components/transparency/FinancialStatusSection';
import IssuanceRedemptionSection from '@/components/transparency/IssuanceRedemptionSection';

// Icons and Images
import transparencyIcon from '@/assets/icons/transparency.png';

const Transparency = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #FFF 0%, #EAF5FF 100%)' }}>
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 md:py-16 px-6 sm:px-8 md:px-12 relative z-10">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <div className="text-sm font-semibold text-[#7595CA] mb-4 text-center md:text-left">
            {t('transparency.hero.subtitle')}
          </div>
          <h1 className="!text-xl sm:!text-xl md:!text-5xl lg:!text-5xl font-extrabold mb-3 md:mb-5 leading-tight text-center md:text-left">
            <span className="text-black">{t('transparency.hero.title')}</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-lg lg:text-lg text-gray-600 mb-5 md:mb-7 max-w-xs sm:max-w-sm md:max-w-md text-center md:text-left leading-relaxed">
            {t('transparency.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center md:justify-start">
            <button
              className="px-4 py-2.5 sm:px-5 sm:py-3 bg-[#0A2540] text-white rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-lg flex items-center gap-2 justify-center transition-all duration-200"
              onClick={() => {
                window.open('https://etherscan.io/address/0x99c84fd5354c082c60cd2f3839e6a57f1151d1bf', '_blank');
              }}
            >
              {t('transparency.hero.checkButton')} <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src={transparencyIcon}
            alt="Transparency"
            className="w-full max-w-[200px] sm:max-w-[200px] md:max-w-[350px] lg:max-w-[350px] h-auto object-contain"
          />
        </div>
      </section>

      <FinancialStatusSection titleAlignment="left" />

      <IssuanceRedemptionSection titleAlignment="left" />
    </div>
  );
};

export default Transparency;
