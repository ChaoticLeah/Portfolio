/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 10s ease-in-out infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        //Fade and unblur in
        fadeIn: {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
          },
        },
      }
    },
  },
  daisyui: {
    themes: ["forest", "emerald"],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
}

