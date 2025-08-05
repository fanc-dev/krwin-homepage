import PopupModal from '@/components/common/PopupModal';

import popupImageEn from '@/assets/popup/popup_en.jpg';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-16 min-h-screen">
      <PopupModal image={popupImageEn} linkUrl="https://forms.gle/AdTJbPzKrC7vBC418" altText="KRWIN EVENT POPUP" />
      <div className="w-full  mx-auto px-[0.25px]">{children}</div>
    </main>
  );
}
