import React, { useState, useRef, useEffect } from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

import krwinLogo from '@/assets/icons/krwin_logo.png';
import englishIcon from '@/assets/icons/english.png';
import koreanIcon from '@/assets/icons/korean.png';

interface MenuItem {
  label: string;
  to: string;
  columns: number;
  dropdown?: {
    groups: Array<{
      groupName: string;
      items: Array<{
        label: string;
        to: string;
        icon: React.ReactNode;
        description: string;
      }>;
    }>;
    image: {
      src: string;
      alt: string;
    };
    imageText: {
      title: string;
      desc: string;
    };
  };
}

const menuItems: MenuItem[] = [
  {
    label: 'About',
    to: '/about',
    columns: 1,
  },
  {
    label: 'Transparency',
    to: '/transparency',
    columns: 1,
  },
  {
    label: 'Technology',
    to: '/technology',
    columns: 1,
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  // @ts-ignore
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'ko' | 'en'>((i18n.language as 'ko' | 'en') || 'ko');
  // @ts-ignore
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // i18n 언어 변경 감지
  useEffect(() => {
    setCurrentLanguage(i18n.language as 'ko' | 'en');
  }, [i18n.language]);

  // 라우터 변경 시 드롭다운 닫기
  useEffect(() => {
    setHoveredIdx(null);
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = null;
    }
  }, [location.pathname]);

  // 언어 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'ko', name: t('languages.ko'), icon: koreanIcon },
    { code: 'en', name: t('languages.en'), icon: englishIcon },
  ];

  // @ts-ignore
  const handleLanguageChange = async (languageCode: 'ko' | 'en') => {
    try {
      setCurrentLanguage(languageCode);
      setLanguageDropdownOpen(false);
      setIsChangingLanguage(true);
      await i18n.changeLanguage(languageCode);

      // 언어 변경 후 페이지 새로고침 없이 즉시 반영
      // 필요한 경우 여기에 추가적인 언어별 로직을 구현할 수 있습니다
      console.log(`Language changed to: ${languageCode}`);
    } catch (error) {
      console.error('Language change failed:', error);
      // 에러 발생 시 이전 언어로 되돌리기
      setCurrentLanguage(i18n.language as 'ko' | 'en');
    } finally {
      setIsChangingLanguage(false);
    }
  };
  // @ts-ignore
  const currentLanguageData = languages.find((lang) => lang.code === currentLanguage);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-[9999] h-16 flex items-center">
      <div className="w-full max-w-screen-lg mx-auto flex items-center px-4">
        {/* 로고와 회사명 */}
        <div className="flex items-center mr-50 cursor-pointer" onClick={() => navigate('/')}>
          <img src={krwinLogo} alt="KRWIN Logo" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold text-black">
            KR
            <span className="text-blue-700">WIN</span>
          </span>
        </div>
        {/* 모바일 햄버거 버튼 */}
        <button
          className="ml-auto md:hidden text-2xl p-2 focus:outline-none text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setMobileOpen(true)}
          aria-label={t('header.menuOpen')}
        >
          <FaBars className="w-6 h-6" />
        </button>
        {/* 메뉴 */}
        {/* 데스크탑 메뉴 */}
        <nav className="flex-1 hidden md:block">
          <ul className="flex space-x-12">
            {menuItems.map((item, idx) => (
              <li
                key={item.label}
                className="relative group"
                onMouseEnter={() => {
                  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                  setHoveredIdx(idx);
                }}
                onMouseLeave={() => {
                  hoverTimeout.current = setTimeout(() => setHoveredIdx(null), 300);
                }}
              >
                {item.dropdown ? (
                  <span
                    className={
                      `font-medium px-2 py-1 inline-block transition-colors select-none cursor-default ` +
                      (hoveredIdx === null ? 'text-black' : hoveredIdx === idx ? 'text-black' : 'text-gray-400')
                    }
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    {t(`header.${item.label.toLowerCase()}`)}
                  </span>
                ) : (
                  <Link
                    to={item.to}
                    className={
                      `font-medium px-2 py-1 inline-block transition-colors ` +
                      (hoveredIdx === null ? 'text-black' : hoveredIdx === idx ? 'text-black' : 'text-gray-400') +
                      ' hover:text-black'
                    }
                  >
                    {t(`header.${item.label.toLowerCase()}`)}
                  </Link>
                )}
                {/* About 메뉴: 그룹화 + 아이콘 + 이미지 드롭다운 */}
                {item.dropdown && hoveredIdx === idx && (
                  <div
                    onMouseEnter={() => {
                      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                      setHoveredIdx(idx);
                    }}
                    onMouseLeave={() => {
                      hoverTimeout.current = setTimeout(() => setHoveredIdx(null), 150);
                    }}
                    className={`absolute ${
                      idx === 0 ? 'left-0' : idx === menuItems.length - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2'
                    } top-full mt-2 min-w-[480px] max-w-[600px] bg-white border border-gray-200 rounded-xl shadow-2xl transition-all duration-200 z-50 p-0 flex ${
                      hoveredIdx === idx ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    {/* 세모(삼각형) 인디케이터 - 2중 삼각형 */}
                    <div
                      className={`absolute -top-2 ${
                        idx === 0 ? 'left-8' : idx === menuItems.length - 1 ? 'right-8' : 'left-1/2 -translate-x-1/2'
                      } z-50`}
                    >
                      <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-200"></div>
                      <div className="w-0 h-0 border-l-7 border-r-7 border-b-7 border-l-transparent border-r-transparent border-b-white absolute left-1/2 -translate-x-1/2 top-[1px]"></div>
                    </div>
                    <div className="flex-1 py-4 px-6 min-w-[280px]">
                      {item.dropdown.groups.map((group, gIdx) => (
                        <div key={group.groupName} className={gIdx !== 0 ? 'mt-4' : ''}>
                          <div className="font-bold text-gray-900 text-base mb-2">{group.groupName}</div>
                          <ul>
                            {group.items.map((sub) => (
                              <li key={sub.label} className="py-2 px-2 rounded-lg hover:bg-blue-50 transition">
                                <Link
                                  to={sub.to}
                                  className="flex items-center gap-3 block text-gray-950 font-medium text-sm hover:underline"
                                >
                                  <span>{sub.icon}</span>
                                  <div className="flex-1">
                                    {sub.label}
                                    <div className="text-xs text-gray-500 mt-0.5">{sub.description}</div>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="w-px h-20 bg-gray-200 mx-3 rounded-full opacity-70 self-center" />
                    <div
                      className={`flex flex-col items-center justify-center px-4 pr-6 min-w-[200px] gap-3 text-center${
                        idx === 0 ? '' : ' py-4'
                      }`}
                    >
                      <img
                        src={item.dropdown.image.src}
                        alt={item.dropdown.image.alt}
                        className="rounded-xl shadow w-48 h-28 object-cover border border-gray-100 mb-1"
                      />
                      <div className="text-sm text-gray-700 font-semibold leading-tight">
                        {item.dropdown.imageText.title.split('\\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {item.dropdown.imageText.desc.split('\\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {mobileOpen && (
          <div className="fixed inset-0 z-[999] bg-black/40 flex md:hidden">
            <div className="w-4/5 max-w-xs bg-white h-full shadow-xl p-6 flex flex-col relative animate-slidein">
              <button
                className="absolute top-4 right-4 text-2xl p-2"
                onClick={() => setMobileOpen(false)}
                aria-label={t('header.menuClose')}
              >
                <FaTimes />
              </button>
              <div
                className="mb-8 flex items-center"
                onClick={() => {
                  navigate('/');
                  setMobileOpen(false);
                }}
              >
                <img src={krwinLogo} alt="KRWIN Logo" className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold text-blue-700">
                  <span className="text-black">KR</span>WIN
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <>
                      <button
                        className={
                          `w-full flex items-center justify-between py-3 px-2 text-lg font-semibold text-gray-900 rounded focus:outline-none select-none ` +
                          (item.dropdown ? 'cursor-default' : 'hover:text-blue-600')
                        }
                        onClick={() => {
                          navigate(item.to);
                          setMobileOpen(false);
                        }}
                        aria-expanded={undefined}
                        disabled={false}
                        tabIndex={0}
                      >
                        <span>{t(`header.${item.label.toLowerCase()}`)}</span>
                        {item.dropdown && <span className={`ml-2 transition-transform`}>▼</span>}
                      </button>
                      {item.dropdown && mobileAccordion === item.label && (
                        <ul className="pl-4 pb-2">
                          {item.dropdown.groups
                            .flatMap((group) => group.items)
                            .map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  to={sub.to}
                                  className="block py-2 px-2 text-base text-gray-800 hover:text-blue-600 rounded"
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileAccordion(null);
                                  }}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <Link
                  to="#contact"
                  className="block w-full text-center px-4 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  {t('header.contactUs')}
                </Link>
              </div>
            </div>
            <div className="flex-1" onClick={() => setMobileOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
