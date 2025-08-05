import { useTranslation } from 'react-i18next';

interface FinancialStatusSectionProps {
  titleAlignment?: 'left' | 'center';
}

const FinancialStatusSection = ({ titleAlignment = 'left' }: FinancialStatusSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className={`text-${titleAlignment} mb-16`}>
          <h2 className="text-md sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
            {t('transparency.financialData.title')}
          </h2>
        </div>
        {/* TODO: 매직넘버 제거 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white/50 rounded-2xl p-8 shadow-sm">
            <div className="relative h-48">
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 w-12 text-right pr-2">
                <span>200M</span>
                <span>100M</span>
                <span>50M</span>
                <span>0</span>
              </div>

              <div className="absolute left-12 right-0 top-0 bottom-0">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200"></div>
                <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gray-200"></div>
                <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gray-200"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gray-200"></div>
              </div>

              <div className="absolute left-12 right-0 -bottom-7 flex items-end justify-center gap-8 h-full z-10">
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 bg-gradient-to-t from-[#6295FF] to-[#A6C3FF] rounded-t-lg"
                    style={{ height: '96px' }}
                  ></div>
                  <div className="text-sm font-medium text-gray-700 mt-2">KRW</div>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className="w-24 bg-gradient-to-t from-[#A68DFF] to-[#C1B0FF] rounded-t-lg"
                    style={{ height: '96px' }}
                  ></div>
                  <div className="text-sm font-medium text-gray-700 mt-2">KRWIN</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/50 rounded-2xl p-6 shadow-sm">
              <div className="inline-block bg-[#6A9AFF]/40 text-black text-xs px-3 py-1 rounded-md mb-4">
                {t('transparency.financialData.collateralAssets.label')}
              </div>
              <div className="text-2xl font-bold text-black">
                {t('transparency.financialData.collateralAssets.value')}{' '}
                <span className="text-[#939393] font-medium">
                  {t('transparency.financialData.collateralAssets.unit')}
                </span>
              </div>
            </div>

            <div className="bg-white/50 rounded-2xl p-6 shadow-sm">
              <div className="inline-block bg-[#A890FF]/40 text-black text-xs px-3 py-1 rounded-md mb-4">
                {t('transparency.financialData.issuedStablecoin.label')}
              </div>
              <div className="text-2xl font-bold text-black">
                {t('transparency.financialData.issuedStablecoin.value')}{' '}
                <span className="text-[#939393] font-medium">
                  {t('transparency.financialData.issuedStablecoin.unit')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialStatusSection;
