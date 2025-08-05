import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export default function SEO({
  title = 'KRWIN',
  description = "KRWIN is a payments network that supports retail, consumers, and financial institutions to send money and make payments quickly and safely on blockchain networks. Experience KRWIN's innovation that connects existing complex financial networks into one.",
  keywords = 'KRWIN, Stablecoin, Digital Asset, Blockchain, KRW, Crypto, Web3, LayerZero, OFT, Payment, Transfer',
  image = 'https://krwin.io/og-image.png',
  url = 'https://krwin.io',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'KRWIN',
  section,
  tags = [],
}: SEOProps) {
  useEffect(() => {
    // 제목 업데이트
    document.title = title;

    // 메타 태그 업데이트
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph 태그 업데이트
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:url', url);
    updateMetaTag('og:type', type);
    updateMetaTag('og:image', image);

    // Twitter Card 태그 업데이트
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // 추가 Open Graph 태그
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime);
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime);
    }
    if (author) {
      updateMetaTag('article:author', author);
    }
    if (section) {
      updateMetaTag('article:section', section);
    }
    if (tags.length > 0) {
      tags.forEach((tag) => {
        addMetaTag('article:tag', tag);
      });
    }

    // Canonical URL 업데이트
    updateCanonicalUrl(url);

    // 구조화된 데이터 업데이트
    updateStructuredData({
      title,
      description,
      url,
      image,
      type,
      publishedTime,
      modifiedTime,
      author,
    });

    return () => {
      // 컴포넌트 언마운트 시 기본값으로 복원
      // document.title = 'KRWIN - 원화 기반 디지털 자산의 새로운 표준';
    };
  }, [title, description, keywords, image, url, type, publishedTime, modifiedTime, author, section, tags]);

  return null;
}

function updateMetaTag(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.querySelector(`meta[property="${name}"]`) as HTMLMetaElement;
  }

  if (meta) {
    meta.setAttribute('content', content);
  } else {
    // 새 메타 태그 생성
    meta = document.createElement('meta');
    if (name.startsWith('og:') || name.startsWith('article:') || name.startsWith('twitter:')) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    meta.setAttribute('content', content);
    document.head.appendChild(meta);
  }
}

function addMetaTag(name: string, content: string) {
  const meta = document.createElement('meta');
  if (name.startsWith('og:') || name.startsWith('article:') || name.startsWith('twitter:')) {
    meta.setAttribute('property', name);
  } else {
    meta.setAttribute('name', name);
  }
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

function updateCanonicalUrl(url: string) {
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
}

function updateStructuredData(data: {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': data.type === 'article' ? 'Article' : 'WebPage',
    headline: data.title,
    description: data.description,
    url: data.url,
    image: data.image,
    author: {
      '@type': 'Organization',
      name: data.author || 'KRWIN',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KRWIN',
      logo: {
        '@type': 'ImageObject',
        url: 'https://krwin.io/logo.png',
      },
    },
    ...(data.publishedTime && { datePublished: data.publishedTime }),
    ...(data.modifiedTime && { dateModified: data.modifiedTime }),
  };

  // 기존 구조화된 데이터 제거
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // 새 구조화된 데이터 추가
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}
