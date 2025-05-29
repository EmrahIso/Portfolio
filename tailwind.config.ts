import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('fill-hover', '&:hover svg');
      addVariant('fill-focus', '&:focus svg');
    },
  ],
};

export default config;
