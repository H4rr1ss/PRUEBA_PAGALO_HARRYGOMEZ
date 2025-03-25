/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#081626',
          300: '#0A1E32',
          200: '#0D253F',
          100: '#163F6C',
          50: '#78ABE3',
        },
        secundary: {
          400: '#016C89',
          300: '#0190B6',
          200: '#01B4E4',
          100: '#50D9FE',
          50: '#96E8FF',
        },
        tertiary: {
          400: '#409257',
          300: '#5FB978',
          200: '#90CEA1',
          100: '#BAE0C4',
          50: '#D5EDDC',
        }
      },
      fontSize: {
        'h1-regular': '61.04px',
        'h1-medium': '61.04px',
        'h1-bold': '61.04px',

        'h1-s-regular': '48.83px',
        'h1-s-medium': '48.83px',
        'h1-s-bold': '48.83px',

        'h2-regular': '48.83px',
        'h2-medium': '48.83px',
        'h2-bold': '48.83px',

        'h2-s-regular': '39.06px',
        'h2-s-medium': '39.06px',
        'h2-s-bold': '39.06px',

        'h3-regular': '39.06px',
        'h3-medium': '39.06px',
        'h3-bold': '39.06px',

        'h3-s-regular': '31.25px',
        'h3-s-medium': '31.25px',
        'h3-s-bold': '31.25px',

        'h4-regular': '31.25px',
        'h4-medium': '31.25px',
        'h4-bold': '31.25px',

        'h4-s-regular': '25px',
        'h4-s-medium': '25px',
        'h4-s-bold': '25px',

        'h5-regular': '25px',
        'h5-medium': '25px',
        'h5-bold': '25px',

        'h5-s-regular': '20px',
        'h5-s-medium': '20px',
        'h5-s-bold': '20px',

        'h6-regular': '20px',
        'h6-medium': '20px',
        'h6-bold': '20px',

        'h6-s-regular': '16px',
        'h6-s-medium': '16px',
        'h6-s-bold': '16px',

        'paragraph-regular': '16px',
        'paragraph-medium': '16px',
        'paragraph-bold': '16px',

        'paragraph-s-regular': '14px',
        'paragraph-s-medium': '14px',
        'paragraph-s-bold': '14px',
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'bold': '700',
      },
    },
  },
  plugins: [],
}