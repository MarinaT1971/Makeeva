const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    fontSize: {
      'xxs': '0.625rem', //10px
      '2xs': '0.75rem', //12px
      'xs': '0.875rem', //14px
      'xss': '1.125rem', //18px
      'xl': '1.25rem', //20 px
      '2xl': ['1.5rem', { //24px
        lineHeight: '120%',
      }],
      '2.2xl': ['1.625rem', { // 26px
        lineHeight: '120%',
      }],
      '2.5xl': ['1.75rem', {
        lineHeight: '130%',
      }],
      '2.7xl': ['1.875rem' , {
        lineHeight: '110%',
      }],
      '3xl': ['2rem', { //32px
        lineHeight: '120%',
      }],
      '4xl': ['2.25rem', { //36px
        lineHeight: '120%',
      }],
      '5xl': ['2.5rem' , { //40px
        lineHeight: '120%',
      }],
      '52xl': ['2.625rem', { //42px
        lineHeight: '120%',
      }],
      '53xl': ['3rem', { //48 px
        lineHeight: '110%',
      }],
      '55xl': '2.875rem', // 46px
      '555xl': ['3.5rem', { //56px
        lineHeight: '105%',
      }],
      '5.6xl': ['3.75rem', { //60px
        lineHeight: '105%',
      }],
      '6xl': ['4rem', { //64px
        lineHeight: '120%',
      }],
      '7xl': ['4.875rem', { // 78px
        lineHeight: '110%',
      }],
      '11xl': ['6.25rem', { // 100px
        lineHeight: '105%',
      }],
    },
    extend: {
      fontFamily: {
        sans: ['Golos', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['16px', '24px'],
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '21': '5.5rem',
        '25': '6.25rem',
        '25.5': '6.625rem',
        '27': '6.5rem',
        '38': '9.5rem',
        '50': '12.5rem',
        '70': '17.5rem',
        '82': '21.5rem',
        '116': '26.875rem',
        '122': '29rem',
        '148': '37rem',
        '168': '28.25rem',
        '288': '56.5rem',
      },
      colors: {
        'black': {
          DEFAULT: '#242424',
          '200': '#1F2328',
          '300': '#171B20',
          '400': '#171717',
          '500': '#161826',
          '600': '#20233A',
        },
        'red': {
          DEFAULT: '#D72007',
          '100': '#F1461C',
          '200': '#FF4443',
          '300': '#E33131',
          '400': '#FF413A',
          '500': '#FF3B3C'
        },
        'pink': {
          DEFAULT: '#FFE3E3',
          200: '#FFF3E8',
          300: '#DE4040',
          400: '#EF41BE',
        },
        'lilac': {
          DEFAULT: '#7051ED',
          200: '#4125B0',
          300: '#6451E1',
        },
        'purple': {
          DEFAULT: '#705AD3',
          300: '#AE5D58',
          900: '#9A8725',
        },
        'blue': {
          50: '#0088CC',
          150: '#CEC9F5',
          160: '#0038FF',
          200: '#F5F6FF',
          300: '#A2AAFF',
          400: '#1C1D70',
          500: '#E8F8FE',
          550: '#3A42FF',
          600: '#2F3579',
          650: '#1769FF',
          700: '#151946',
          800: '#4C6EEB',
          900: '#5C4ADD',
        },
        'green': {
          DEFAULT: '#34A753',
          50: '#BCFF5E',
          100: '#BCFF5E',
          200: '#EAFFE8',
          300: '#55B871',
          400: '#39A899',
          600: '#57AD6F',
        },
        'orange': {
          DEFAULT: '#FD7942',
        },
        'yellow': {
          DEFAULT: '#FFDD2D',
          200: '#F5B100',
          300: '#FEB223',
          400: '#FFD43A',
          500: '#FFB800',
        },
        'gray': {
          10: '#9699B2',
          20: '#565A7B',
          30: '#EDEDF4',
          40: '#F8F8FA',
          50: '#FCEDCF',
          55: '#F6F6F9',
          56: '#8C8BA5',
          60: '#EBE7DF',
          70: '#E5E5E5',
          80: '#FAFAFC',
          90: '#919191',
          100: '#E2E2E2',
          110: '#A3A7AF',
          120: '#E8EBF0',
          130: '#F6F6F6',
          200: '#F9F9F9',
          300: '#525252',
          400: '#F3F3F3',
          500: '#BABABA',
          600: '#F7F8FB',
          700: '#A1ACB9',
        }
      },
      borderRadius: {
        '3.5xl': '32px',
        '4xl': '40px',
        'weird': '900px',
      },
      letterSpacing: {
        'huge': '0.4em',
      },
    },
  },

  //plugins: [require('@tailwindcss/forms')],
};
