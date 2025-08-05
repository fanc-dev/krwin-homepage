module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        pretendard: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['0.875rem', { lineHeight: '1.5rem' }], // 14px (기본 크기 축소)
        lg: ['1rem', { lineHeight: '1.75rem' }], // 16px
        xl: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        '2xl': ['1.25rem', { lineHeight: '2rem' }], // 20px
        '3xl': ['1.5rem', { lineHeight: '2rem' }], // 24px
        '4xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '5xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        '6xl': ['2.5rem', { lineHeight: '1' }], // 40px
      },
      keyframes: {
        fadein: {
          '0%': { opacity: 0, transform: 'translateY(32px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fadein-slow': 'fadein 1.2s cubic-bezier(0.4,0,0.2,1) forwards',
      },
    },
  },
};
