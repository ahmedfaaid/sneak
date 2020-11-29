module.exports = {
  theme: {
    extend: {
      screens: {
        xs: { max: '639px' },
        smMax: { max: '767px' },
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
      colors: {
        primary: '#59a5d8',
        secondary: '#133c55',
        light: '#91e5f6',
        white: '#fff',
        ig: '#c13584',
        twitter: '#1da1f2',
        facebook: '#3b5998',
        youtube: '#ff0000'
      },
      fontFamily: {
        heading: ['Open-Sans', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
      spacing: {
        px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '32': '8rem',
        '40': '10rem',
        '48': '12rem',
        '56': '14rem',
        '64': '16rem'
      },
      container: {
        center: true,
        padding: '3rem'
      }
    }
  },
  purge: ['./src/**/*.js']
}
