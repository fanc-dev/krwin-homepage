// React and External Libraries
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { easeInOut } from 'framer-motion';
import { FaFileAlt } from 'react-icons/fa';

// Utilities
import { downloadPDF } from '@/utils/downloadUtils';

// Components
import SEO from '@/components/common/SEO';
import FinancialStatusSection from '@/components/transparency/FinancialStatusSection';
import IssuanceRedemptionSection from '@/components/transparency/IssuanceRedemptionSection';

// Icons and Images
import whipIcon from '@/assets/whipIcon.mp4';
import automationIcon from '@/assets/icons/automation.svg';
import languageIcon from '@/assets/icons/language.svg';
import arrowDownIcon from '@/assets/icons/arrow_down.png';
import innovationIcon from '@/assets/icons/innovationIcon.png';
import wbIncandescentIcon from '@/assets/icons/wb_incandescent.svg';
import checkCircleIcon from '@/assets/icons/check_circle.svg';
import transIcon from '@/assets/icons/trans.svg';
import feeIcon from '@/assets/icons/fee.svg';
import fancLogo from '@/assets/icons/fanc.png';
import celebeLogo from '@/assets/icons/celebe.png';
import barunLogo from '@/assets/icons/barun_empty.png';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
  };

  const featureCards = [
    {
      icon: (
        <img
          src={automationIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('home.newFinancialSystem.features.realTimeWon.title'),
      desc: t('home.newFinancialSystem.features.realTimeWon.description'),
    },
    {
      icon: (
        <img
          src={transIcon}
          alt="Token"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('home.newFinancialSystem.features.transparency.title'),
      desc: t('home.newFinancialSystem.features.transparency.description'),
    },
    {
      icon: (
        <img
          src={languageIcon}
          alt="Global"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('home.newFinancialSystem.features.globalTransfer.title'),
      desc: t('home.newFinancialSystem.features.globalTransfer.description'),
    },
    {
      icon: (
        <img
          src={feeIcon}
          alt="Automation"
          className="w-12 h-12 mb-4 group-hover:scale-110 transition"
          style={{ filter: 'brightness(0)' }}
        />
      ),
      title: t('home.newFinancialSystem.features.lowFees.title'),
      desc: t('home.newFinancialSystem.features.lowFees.description'),
    },
  ];

  return (
    <>
      <SEO
        // title="KRWIN - 원화 기반 디지털 자산의 새로운 표준"
        // description="일반 리테일, 소비자, 금융기관이 블록체인 네트워크 상에서 빠르고 안전하게 송금, 결제를 할 수 있도록 지원합니다. 기존의 복잡한 금융망을 하나로 연결하는 KRWIN의 혁신을 경험하세요."
        // keywords="KRWIN, 스테이블코인, 디지털자산, 블록체인, 원화, 크립토, Web3, LayerZero, OFT, 결제, 송금"
        url="https://krwin.io"
      />

      <div className="min-h-screen bg-white relative overflow-x-hidden">
        <motion.section className="" style={{ y: yParallax }}>
          <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16 md:py-32 px-6 sm:px-8 md:px-12 relative z-10">
            <motion.div
              className="flex-2 flex flex-col items-center md:items-start justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
            >
              <motion.h1
                className="!text-xl sm:!text-xl md:!text-4xl lg:!text-4xl font-extrabold mb-3 md:mb-5 leading-tight text-center md:text-left"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <span className="text-black">KR</span>
                <span className="text-[#005BAC]">WIN</span>
                <br />
                <span className="text-black">{t('home.hero.title')}</span>
              </motion.h1>
              <motion.p
                className="text-xs sm:text-sm md:text-lg lg:text-lg text-gray-600 mb-5 md:mb-7 max-w-xs sm:max-w-sm md:max-w-lg text-center md:text-left leading-relaxed "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {t('home.hero.description')}
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.7 }}
              >
                <motion.button
                  onClick={() => downloadPDF('/KRWIN_White_Paper_en.pdf', 'KRWIN_White_Paper.pdf')}
                  className="px-4 py-2.5 sm:px-5 sm:py-3 bg-[#0A2540] border border-gray-400 text-white rounded-lg font-semibold text-sm sm:text-base shadow-md flex items-center gap-2 justify-center transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  {t('home.hero.downloadEn')} <FaFileAlt className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center mb-6 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
            >
              <motion.video
                src={whipIcon}
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[200px] sm:max-w-[300px] md:max-w-[300px] lg:max-w-[300px] object-cover"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
          </div>
        </motion.section>

        {/* 스크롤 다운 인디케이터 */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 0.8 }}
        >
          <motion.button
            className="w-32 h-32 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
            animate={{ y: [0, 60, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => {
              const nextSection = document.querySelector('#next-section');
              if (nextSection) {
                const elementTop = nextSection.getBoundingClientRect().top + window.pageYOffset;
                const offset = 100;
                window.scrollTo({
                  top: elementTop - offset,
                  behavior: 'smooth',
                });
              }
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            aria-label={t('home.hero.scrollDown')}
            title={t('home.hero.scrollDown')}
          >
            <img src={arrowDownIcon} alt="Scroll down" className="w-16 h-16" />
          </motion.button>
        </motion.div>

        {/* 실시간 재무 현황 및 발행 상환 섹션 */}
        <div id="next-section" style={{ background: 'linear-gradient(180deg, #FFF 0%, #EAF5FF 100%)' }}>
          <FinancialStatusSection titleAlignment="center" />
          <IssuanceRedemptionSection titleAlignment="center" />
        </div>

        {/* 새로운 인터넷 금융 시스템 섹션 */}
        <section
          className="pt-16 md:pt-24 px-6 sm:px-8 md:px-12 mt-16 md:mt-20"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #EAF5FF 100px, #EAF5FF 100%)',
          }}
        >
          <div className="max-w-screen-lg mx-auto">
            <motion.div
              className="text-center mb-16 md:mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.6 }}
              variants={fadeUp}
            >
              <motion.h2 className="text-md sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
                {t('home.newFinancialSystem.title')}
              </motion.h2>
              <motion.p className="text-xs sm:text-lg lg:text-lg text-black max-w-4xl mx-auto leading-relaxed ">
                {t('home.newFinancialSystem.description')}
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4 justify-items-center">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col p-6 items-center md:items-start sm:p-6 hover:shadow-xl hover:scale-105 transition group w-full h-full min-h-[200px] sm:min-h-[220px]"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.40)',
                    borderRadius: '4px',
                    border: '1px solid white',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {card.icon}
                  <div className="w-full font-bold text-md text-black mb-3 text-center sm:text-left">{card.title}</div>
                  <div className="w-full text-black text-sm leading-relaxed text-center sm:text-left  flex-1">
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-[#EAF5FF] py-16 md:py-24 px-6 sm:px-8 md:px-12">
          {/* 왜 KRWIN인가? 섹션 */}
          <div className="max-w-screen-lg mx-auto ">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12  md:min-h-[400px]">
              <div className="flex-2 flex flex-col items-center md:items-start">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 md:mb-10 text-center md:text-left">
                  {i18n.language === 'ko' ? (
                    <>
                      왜 KR
                      <span className="text-[#035DAD]">WIN</span>인가?
                    </>
                  ) : (
                    <>
                      Why KR<span className="text-[#035DAD]">WIN</span>
                    </>
                  )}
                </h3>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start gap-4 bg-white/40 p-6 rounded-md pr-12">
                    <div className="w-12 h-12 mt-1 flex-shrink-0 text-[#005BAC]">
                      <img src={checkCircleIcon} alt="Check" className="w-full h-full" />
                    </div>
                    <div>
                      <div className="text-black font-bold text-lg mb-1">{t('home.whyKRWIN.reliability.title')}</div>
                      <div className="text-gray-600 text-xs md:text-md">
                        {t('home.whyKRWIN.reliability.description')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 bg-white/40 p-6 rounded-md">
                    <div className="w-12 h-12 mt-1 flex-shrink-0 text-[#005BAC]">
                      <img src={wbIncandescentIcon} alt="Innovation" className="w-full h-full" />
                    </div>
                    <div>
                      <div className="text-black font-bold text-lg mb-1">{t('home.whyKRWIN.innovation.title')}</div>
                      <div className="text-gray-600 text-xs md:text-md">
                        {t('home.whyKRWIN.innovation.description')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex flex-1 justify-center">
                <img src={innovationIcon} alt="Innovation" className="max-w-[300px]" />
              </div>
            </div>
          </div>
        </section>

        {/* KRWIN 함께하는 파트너 섹션 */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-3 flex flex-col items-center md:items-start">
                <div className="text-2xl text-[#035DAD] mb-2 font-extrabold">
                  <span className="text-black">KR</span>
                  <span className="text-[#005BAC]">WIN</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t('home.partners.title')}</h2>
                <p className="text-base md:text-lg lg:text-lg text-gray-600 mb-8 max-w-md text-center md:text-left">
                  {t('home.partners.description')}
                </p>
                <button className=" text-gray-700 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                  {t('home.partners.updateNotice')}
                </button>
              </div>

              <div className="flex-2 flex flex-col gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center justify-center">
                  <img src={barunLogo} alt="BARUN LAW" className="w-full h-12 md:h-20 px-10 object-contain" />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center justify-center">
                  <img src={fancLogo} alt="fanC" className="w-full h-12 md:h-20 px-16 object-contain" />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center justify-center">
                  <img src={celebeLogo} alt="CELEBe" className="w-full h-12 md:h-20 px-14 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 하단 비전 메시지 */}
        <section className="pt-20 py-30 text-center">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-black mb-2 md:mb-4">
            {i18n.language === 'ko' ? (
              <>
                KR
                <span className="text-[#005BAC]">WIN</span>이 만드는 미래
              </>
            ) : (
              <>
                The Future KR<span className="text-[#005BAC]">WIN</span> Creates
              </>
            )}
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg md:text-xl lg:text-lg max-w-xs sm:max-w-md md:max-w-3xl mx-auto">
            {t('home.future.description')}
          </p>
        </section>
      </div>
    </>
  );
}
