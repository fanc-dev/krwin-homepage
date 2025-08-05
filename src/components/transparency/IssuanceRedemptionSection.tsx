import { useTranslation } from 'react-i18next';

interface IssuanceRedemptionSectionProps {
  titleAlignment?: 'left' | 'center';
}

const IssuanceRedemptionSection = ({ titleAlignment = 'center' }: IssuanceRedemptionSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12">
        <div className={`text-${titleAlignment} mb-16`}>
          <h2 className="text-md sm:!text-3xl !md:text-3xl font-extrabold text-black mb-6 leading-tight">
            {t('transparency.issuanceRedemption.title')}
          </h2>
        </div>

        {/* TODO: 매직넘버 제거 */}
        <div className="space-y-6">
          <div className="bg-white/50 rounded-2xl p-6 shadow-sm border">
            <div className="inline-block bg-[#C1D6FF] text-[#6B7280] text-xs px-3 py-1 rounded-md mb-4">
              {t('transparency.issuanceRedemption.periods.7days')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-medium text-[#364153] mb-2">
                  {t('transparency.issuanceRedemption.labels.issuance')}
                </div>
                <div className="text-xl font-bold text-black">100,000,000</div>
              </div>
              <div>
                <div className="text-sm font-medium text-[#364153] mb-2">
                  {t('transparency.issuanceRedemption.labels.redemption')}
                </div>
                <div className="text-xl font-bold text-black">0</div>
              </div>
              <div>
                <div className="text-xl font-bold text-black mb-2">+ 100,000,000</div>
                <div className="text-sm font-medium text-[#364153] ">
                  {t('transparency.issuanceRedemption.labels.changeInKRWIN')}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-2xl p-6 shadow-sm border">
            <div className="inline-block bg-[#BFCBFF] text-[#6B7280] text-xs px-3 py-1 rounded-md mb-4">
              {t('transparency.issuanceRedemption.periods.30days')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  {t('transparency.issuanceRedemption.labels.issuance')}
                </div>
                <div className="text-xl font-bold text-black">{t('transparency.issuanceRedemption.values.soon')}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  {t('transparency.issuanceRedemption.labels.redemption')}
                </div>
                <div className="text-xl font-bold text-black">{t('transparency.issuanceRedemption.values.soon')}</div>
              </div>
              <div>
                <div className="text-xl font-bold text-black mb-2">-</div>
                <div className="text-sm font-medium text-gray-600 ">
                  {t('transparency.issuanceRedemption.labels.changeInKRWIN')}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 rounded-2xl p-6 shadow-sm border">
            <div className="inline-block bg-[#CEC0FF] text-[#6B7280] text-xs px-3 py-1 rounded-md mb-4">
              {t('transparency.issuanceRedemption.periods.365days')}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  {t('transparency.issuanceRedemption.labels.issuance')}
                </div>
                <div className="text-xl font-bold text-black">{t('transparency.issuanceRedemption.values.soon')}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  {t('transparency.issuanceRedemption.labels.redemption')}
                </div>
                <div className="text-xl font-bold text-black">{t('transparency.issuanceRedemption.values.soon')}</div>
              </div>
              <div>
                <div className="text-xl font-bold text-black  mb-2">-</div>
                <div className="text-sm font-medium text-gray-600">
                  {t('transparency.issuanceRedemption.labels.changeInKRWIN')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IssuanceRedemptionSection;
