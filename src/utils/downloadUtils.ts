// 모바일 환경 감지 함수
export const isMobile = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// iOS Safari 감지 함수
export const isIOSSafari = (): boolean => {
  const userAgent = navigator.userAgent;
  return /iPad|iPhone|iPod/.test(userAgent) && /Safari/.test(userAgent) && !/CriOS|FxiOS|OPiOS|mercury/.test(userAgent);
};

// 모바일 환경에서 PDF 다운로드 처리
export const downloadPDF = async (url: string, filename: string): Promise<void> => {
  try {
    // iOS Safari에서 특별 처리
    if (isIOSSafari()) {
      // iOS Safari에서는 blob URL을 사용하여 다운로드 강제
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('PDF 파일을 찾을 수 없습니다');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      // iOS Safari에서 다운로드 강제를 위한 특별한 처리
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      link.target = '_blank';

      // iOS Safari에서 다운로드 속성 강제 설정
      link.setAttribute('download', filename);
      link.setAttribute('type', 'application/pdf');

      // 스타일을 숨김으로 설정하여 사용자가 클릭할 수 있도록 함
      link.style.display = 'none';
      document.body.appendChild(link);

      // iOS Safari에서는 사용자 상호작용이 필요할 수 있으므로 클릭 이벤트 시뮬레이션
      link.click();

      // 약간의 지연 후 정리
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);
      }, 100);

      return;
    }

    // 일반 모바일 환경에서는 기존 방식 사용
    if (isMobile()) {
      window.open(url, '_blank');
      return;
    }

    // 데스크톱 환경에서는 기존 방식 사용
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('PDF 파일을 찾을 수 없습니다');
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('PDF 다운로드 실패:', error);
    // 폴백: 새 탭에서 열기
    window.open(url, '_blank');
  }
};

// 모바일 환경에서 파일 다운로드 처리 (일반적인 파일용)
export const downloadFile = async (url: string, filename: string): Promise<void> => {
  try {
    // 모바일 환경에서는 직접 새 탭에서 열기
    if (isMobile()) {
      window.open(url, '_blank');
      return;
    }

    // 데스크톱 환경에서는 기존 방식 사용
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('파일을 찾을 수 없습니다');
    }

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    console.error('파일 다운로드 실패:', error);
    // 폴백: 새 탭에서 열기
    window.open(url, '_blank');
  }
};
