module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        darkBg: '#12181b',
        darkBgLight: '#2a2e35',
      },
      animation: {
        slideup: 'slideup .7s ease-in-out',
        slidedown: 'slidedown 1s ease-in-out',
        slideleft: 'slideleft 1s ease-in-out',
        slideright: 'slideright 1s ease-in-out',
        slowfade: 'slowfade .8s ease-in-out',
        makeItfadeIn: 'makeItfadeIn .5s forwards',
      },
      keyframes: {
        slowfade: { from: { opacity: 0 }, to: { opacity: 1 } },
        slideup: { from: { opacity: 0, transform: 'translateY(25%)' }, to: { opacity: 1, transform: 'none' } },
        slidedown: { from: { opacity: 0, transform: 'translateY(-25%)' }, to: { opacity: 1, transform: 'none' } },
        slideleft: { from: { opacity: 0, transform: 'translateX(-20px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        slideright: { from: { opacity: 0, transform: 'translateX(20px)' }, to: { opacity: 1, transform: 'translateX(0)' } },
        makeItfadeIn: { '100%': { backgroundPosition: 'left', color: 'white' } },
      },
    },
  },
  plugins: [],
};
