// React and External Libraries
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaHome, FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('notFound.subtitle')}</h2>
          <p className="text-gray-600 mb-8">{t('notFound.description')}</p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
          >
            <FaHome className="mr-2 w-4 h-4" />
            {t('notFound.homeButton')}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
          >
            <FaArrowLeft className="mr-2 w-4 h-4" />
            {t('notFound.backButton')}
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('notFound.frequentlyVisited')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/about" className="text-blue-600 hover:text-blue-800 text-sm">
              {t('notFound.about')}
            </Link>
            <Link to="/transparency" className="text-blue-600 hover:text-blue-800 text-sm">
              {t('notFound.transparency')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
