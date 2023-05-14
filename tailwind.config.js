/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwindcss-intersect')
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'FiraCode': ['Fira Code', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'trebuchet': ['Trebuchet MS', 'sans-serif'],
        'antimatrix' : ['Antimatrix ', 'sans-serif'],
      },
      colors: {
        'darkblue': '#000033',
      },
      animation: {
        'going-up': 'going-up 15s linear infinite',
        'fade-in-down': 'fade-in-down 1s ease-in-out',
        'fade-in-up': 'fade-in-up 1s ease-in-out',
        'tilt' : 'tilt 10s infinite linear',
        tilt : 'tilt 10s infinite linear',
        'gradient-change' : 'gradientChange 3s infinite linear',
        gradientchange : 'gradientchange 10s infinite linear',
      },
      keyframes: {
        'going-up': {
          '0%': { 
            transform: 'translateY(100vh)',
          },
          '100%': {
            transform: 'translateY(-20vh)',
          },
        },
        'gradient-change': {
          '-webkit-animation': 'AnimationName 3s ease infinite',
    '-moz-animation' : 'AnimationName 3s ease infinite',
    'animation': 'AnimationName 3s ease infinite',
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        gradientchange: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(1deg)',
          },
          '75%': {
            transform: 'rotate(-1deg)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
  },
  plugins: [],
  }
}
