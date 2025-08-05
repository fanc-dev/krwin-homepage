import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

interface PopupModalProps {
  image: string;
  linkUrl: string;
  altText?: string;
}

const PopupModal = ({ image, linkUrl, altText = 'POPUP Image' }: PopupModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const hideUntil = localStorage.getItem('popupHideUntil');
    const today = new Date().toDateString();

    if (!hideUntil || hideUntil !== today) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDontShowToday = () => {
    const today = new Date().toDateString();
    localStorage.setItem('popupHideUntil', today);
    setIsVisible(false);
  };

  const handleImageClick = () => {
    window.open(linkUrl, '_blank');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/10 bg-opacity-50" onClick={handleClose} />

      <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10"
        >
          <IoClose className="w-5 h-5 text-gray-600" />
        </button>

        <div className="relative">
          <img
            src={image}
            alt={altText}
            className="w-full h-auto rounded-t-lg cursor-pointer"
            onClick={handleImageClick}
          />
        </div>

        <div className="p-2 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <button onClick={handleDontShowToday} className="text-sm text-gray-500 hover:text-gray-700 underline">
              {t('popup.dontShowToday')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
