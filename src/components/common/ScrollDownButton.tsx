import { motion } from 'framer-motion';

import arrowDownIcon from '@/assets/icons/arrow_down.png';

interface ScrollDownButtonProps {
  targetId: string;
  className?: string;
  delay?: number;
}

export default function ScrollDownButton({
  targetId,
  className = 'flex justify-center mt-6',
  delay = 1.5,
}: ScrollDownButtonProps) {
  const handleScroll = () => {
    const targetSection = document.querySelector(`#${targetId}`);
    if (targetSection) {
      const elementTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offset = 100; // 살짝 위로 스크롤하기 위한 오프셋 (픽셀)
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      <motion.button
        className="w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={handleScroll}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="다음 섹션으로 스크롤"
        title="다음 섹션으로 스크롤"
      >
        <img src={arrowDownIcon} alt="Scroll down" className="w-8 h-8" />
      </motion.button>
    </motion.div>
  );
}
