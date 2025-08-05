// React and External Libraries
import { useTranslation } from 'react-i18next';
import { FaArrowRight } from 'react-icons/fa';

// Icons and Images
import TechnologyIcon from '@/assets/icons/technology.png';
import TransIcon from '@/assets/icons/trans.svg';
import AutomationIcon from '@/assets/icons/automation.svg';
import LanguageIcon from '@/assets/icons/language.svg';
import FeeIcon from '@/assets/icons/fee.svg';
import MultipleStop from '@/assets/icons/multiple_stop.svg';

const Technology = () => {
  const { t } = useTranslation();

  const technicalFeatureCards = [
    {
      icon: (
        <img
          src={AutomationIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: '',
      desc: t('technology.technicalFeatures.features.omnichain.description'),
    },
    {
      icon: (
        <img
          src={TransIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: '',
      desc: t('technology.technicalFeatures.features.decentralized.description'),
    },
    {
      icon: (
        <img
          src={LanguageIcon}
          alt="Global"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: '',
      desc: t('technology.technicalFeatures.features.security.description'),
    },
    {
      icon: (
        <img
          src={MultipleStop}
          alt="Automation"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: '',
      desc: t('technology.technicalFeatures.features.efficiency.description'),
    },
  ];

  const coreValueCards = [
    {
      icon: (
        <img
          src={AutomationIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('technology.coreValues.features.connectivity.title'),
      desc: t('technology.coreValues.features.connectivity.description'),
    },
    {
      icon: (
        <img
          src={TransIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('technology.coreValues.features.security.title'),
      desc: t('technology.coreValues.features.security.description'),
    },
    {
      icon: (
        <img
          src={FeeIcon}
          alt="Global"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('technology.coreValues.features.efficiency.title'),
      desc: t('technology.coreValues.features.efficiency.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 md:py-16 px-6 sm:px-8 md:px-12 relative z-10">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center">
          <div className="text-sm font-semibold text-[#7595CA] mb-4 text-center md:text-left">
            {t('technology.hero.subtitle')}
          </div>
          <h1 className="!text-xl sm:!text-xl md:!text-5xl lg:!text-5xl font-extrabold mb-3 md:mb-5 leading-tight text-center md:text-left lg: mt-10">
            <span className="text-black font-extrabold">{t('technology.hero.title')}</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-5 md:mb-7 max-w-xs sm:max-w-sm md:max-w-md text-center md:text-left leading-relaxed">
            {t('technology.hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center md:justify-start">
            <button
              className="px-4 py-2.5 sm:px-5 sm:py-3 bg-[#0A2540] text-white rounded-lg font-semibold text-sm sm:text-base shadow-md hover:shadow-lg flex items-center gap-2 justify-center transition-all duration-200"
              onClick={() => {
                window.open('https://docs.layerzero.network/v2', '_blank');
              }}
            >
              {t('technology.hero.docsButton')} <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center mb-6 md:mb-0">
          <img
            src={TechnologyIcon}
            alt="Technology"
            className="w-full max-w-[200px] sm:max-w-[200px] md:max-w-[350px] lg:max-w-[350px] h-auto object-contain"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-8 md:px-12 mt-10 md:mt-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-md sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
            {t('technology.technicalFeatures.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 mb-16 md:mb-20 justify-items-center whitespace-pre-line">
          {technicalFeatureCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start bg-[#BEDBFF]/20 border border-[#53ACFF]/40 p-6 sm:p-6 hover:shadow-xl hover:scale-105 transition group w-full h-full min-h-[150px] sm:min-h-[170px]"
              style={{
                borderRadius: '4px',
              }}
            >
              {card.icon}
              <div className="w-full font-bold text-md text-black mb-3 text-center sm:text-left">{card.title}</div>
              <div className="w-full font-semibold text-sm sm:text-base text-black leading-relaxed text-center sm:text-left  flex-1">
                {card.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className="py-16 md:py-16 px-6 sm:px-8 md:px-12 mt-16 md:mt-20"
        style={{ background: 'linear-gradient(90deg, #D0E3FF 0%, #D6E0FF 100%)' }}
      >
        <div className="max-w-screen-lg mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-md sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
              {t('technology.coreValues.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center mb-16">
            {coreValueCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center md:items-start bg-[#FFFFFF]/40 border border-[#FFFFFF] p-6 hover:shadow-xl hover:scale-105 transition group w-full min-h-[200px]"
                style={{
                  borderRadius: '4px',
                }}
              >
                {card.icon}
                <div className="w-full font-bold text-md text-black mb-3 text-center md:text-left">{card.title}</div>
                <div className="w-full text-black text-sm leading-relaxed text-center md:text-left  flex-1">
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
