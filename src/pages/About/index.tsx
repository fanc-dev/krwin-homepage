// React and External Libraries
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';

// Components
import SEO from '@/components/common/SEO';

// Icons and Images
import AboutIcon from '@/assets/icons/about.png';
import InitechBuilding from '@/assets/icons/initech_building.png';
import FanCBuilding from '@/assets/icons/fanc_building.png';
import TransIcon from '@/assets/icons/trans.svg';
import AutomationIcon from '@/assets/icons/automation.svg';
import LanguageIcon from '@/assets/icons/language.svg';
import FeeIcon from '@/assets/icons/fee.svg';
import AirplayIcon from '@/assets/icons/airplay.svg';
import CongnitionIcon from '@/assets/icons/congnition.svg';
import ShowChartIcon from '@/assets/icons/show_chart.svg';
import VisionIcon from '@/assets/icons/vision.png';

const About = () => {
  const { t, i18n } = useTranslation();

  const initechFeatures = t('about.companies.initech.features', { returnObjects: true }) as string[];
  const fancFeatures = t('about.companies.fanc.features', { returnObjects: true }) as string[];

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
      title: t('about.coreValues.features.realTimeWon.title'),
      desc: t('about.coreValues.features.realTimeWon.description'),
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
      title: t('about.coreValues.features.transparency.title'),
      desc: t('about.coreValues.features.transparency.description'),
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
      title: t('about.coreValues.features.globalTransfer.title'),
      desc: t('about.coreValues.features.globalTransfer.description'),
    },
    {
      icon: (
        <img
          src={FeeIcon}
          alt="Automation"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('about.coreValues.features.lowFees.title'),
      desc: t('about.coreValues.features.lowFees.description'),
    },
  ];

  const achievementCards = [
    {
      icon: (
        <img
          src={ShowChartIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('about.achievements.features.realTimeWon.title'),
      desc: t('about.achievements.features.realTimeWon.description'),
    },
    {
      icon: (
        <img
          src={CongnitionIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('about.achievements.features.transparency.title'),
      desc: t('about.achievements.features.transparency.description'),
    },
    {
      icon: (
        <img
          src={AirplayIcon}
          alt="Global"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('about.achievements.features.globalTransfer.title'),
      desc: t('about.achievements.features.globalTransfer.description'),
    },
  ];

  return (
    <>
      <SEO
        // title="About KRWIN - Web3 네이티브 스테이블코인"
        // description="KRWIN이 Web3 네이티브에게 꼭 선택되어야 하는 이유. 투명성, 규제준수, 실사용성, 글로벌 확장성을 바탕으로 안전하고 신뢰할 수 있는 디지털 자산 솔루션을 제공합니다."
        // keywords="KRWIN, Web3, 스테이블코인, 투명성, 규제준수, 실사용성, 글로벌확장성, Initech, fanC, 디지털자산"
        url="https://krwin.io/about"
      />
      <div className="min-h-screen bg-white">
        {/* Header Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-16 md:py-16 px-6 sm:px-8 md:px-12 relative z-10">
          <div className="flex-2 flex flex-col items-center md:items-start justify-center">
            <div className="text-sm font-semibold text-[#7595CA] mb-4 text-center md:text-left">
              {t('about.hero.subtitle')}
            </div>
            <h1 className="!text-xl sm:!text-xl md:!text-5xl lg:!text-5xl font-extrabold mb-3 md:mb-5 leading-tight text-center md:text-left text-black">
              {t('about.hero.title').replace('KRWIN', 'KR')}
              <span className="text-[#035DAD]">WIN</span>?
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-gray-600 mb-5 md:mb-7 max-w-xs sm:max-w-sm md:max-w-xl text-center md:text-left leading-relaxed">
              {t('about.hero.description')}
            </p>
          </div>
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <img
              src={AboutIcon}
              alt="About"
              className="w-full max-w-[200px] sm:max-w-[200px] md:max-w-[350px] lg:max-w-[350px] h-auto object-contain"
            />
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-16 md:py-30">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-md sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
                {i18n.language === 'ko' ? (
                  <>
                    KR
                    <span className="text-[#035DAD]">WIN</span>을 만드는 기업들
                  </>
                ) : (
                  <>
                    Companies Building KR<span className="text-[#035DAD]">WIN</span>
                  </>
                )}
              </h2>
              <p className="text-xs sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed ">
                {t('about.companies.subtitle')}
              </p>
            </div>

            <div className="space-y-20">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                      {t('about.companies.initech.name')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{t('about.companies.initech.description')}</p>
                  </div>

                  <ul className="space-y-3">
                    {initechFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start justify-center md:justify-start">
                        <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1 flex justify-center">
                  <img src={InitechBuilding} alt="Initech Building" className="w-full h-auto object-contain" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 flex justify-center order-1 md:order-1">
                  <img src={FanCBuilding} alt="FanC Building" className="w-full h-auto object-contain" />
                </div>

                <div className="flex-1 text-center md:text-left order-2 md:order-2">
                  <div className="mb-6">
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">
                      {t('about.companies.fanc.name')}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{t('about.companies.fanc.description')}</p>
                  </div>

                  <ul className="space-y-3">
                    {fancFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start justify-center md:justify-start">
                        <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-black mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto py-16 md:py-24 px-6 sm:px-8 mt-16 md:mt-20">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-xl sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
              {i18n.language === 'ko' ? (
                <>
                  KR
                  <span className="text-[#035DAD]">WIN</span>의 핵심 가치
                </>
              ) : (
                <>
                  KR<span className="text-[#035DAD]">WIN</span>'s Core Values
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg text-black max-w-4xl mx-auto leading-relaxed ">
              {t('about.coreValues.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 md:mb-20">
            {coreValueCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center md:items-start bg-[#BEDBFF]/20 border border-[#53ACFF]/40 p-6 hover:shadow-xl hover:scale-105 transition group w-full min-h-[180px]"
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
        </section>

        {/* 성과와 비전 */}
        <section
          className="mx-auto py-16 md:py-16 px-6 sm:px-8 md:px-12 mt-16 md:mt-20"
          style={{ background: 'linear-gradient(90deg, #D0E3FF 0%, #D6E0FF 100%)' }}
        >
          <div className="max-w-screen-lg mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-xl sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
                {i18n.language === 'ko' ? (
                  <>
                    KR
                    <span className="text-[#035DAD]">WIN</span>의 성과와 비전
                  </>
                ) : (
                  <>
                    KR<span className="text-[#035DAD]">WIN</span>'s Achievements and Vision
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-black max-w-4xl mx-auto leading-relaxed ">
                {t('about.achievements.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-center items-center mb-16">
              {achievementCards.map((card) => (
                <div
                  key={card.title}
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
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 md:py-16 px-6 sm:px-8 md:px-12 relative z-10">
          <div className="flex-2 flex flex-col items-center md:items-start justify-center">
            <h1 className="!text-xl sm:!text-xl md:!text-xl lg:!text-3xl font-extrabold mb-3 md:mb-5 leading-tight text-center md:text-left">
              <div className="text-black">
                {i18n.language === 'ko' ? (
                  <>
                    KR
                    <span className="text-[#035DAD]">WIN</span> VISION
                  </>
                ) : (
                  <>
                    KR<span className="text-[#035DAD]">WIN</span> VISION
                  </>
                )}
              </div>
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-600 mb-5 md:mb-7 max-w-xs sm:max-w-sm md:max-w-xl text-center md:text-left leading-relaxed ">
              {t('about.vision.description')}
            </p>
          </div>
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <img
              src={VisionIcon}
              alt="vision"
              className="w-full max-w-[200px] sm:max-w-[200px] md:max-w-[350px] lg:max-w-[350px] h-auto object-contain"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
