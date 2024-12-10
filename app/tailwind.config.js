/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-dark': 'var(--color-primary-dark)',
        'box-shadow-dark': 'var(--color-boxShadow-dark)',
        'shadow-border-dark': 'var(--color-boxShadow-border-dark)',
      },
      fontSize: {
        'xs': '0.7rem', 
        'sm': '0.75rem',
        'base': '0.8rem',
        'lg': '0.9rem',
        'xl': '0.95rem',
        '2xl': '1rem',
        '3xl': '1.15rem',
        '4xl': '1.25rem'
      },
    },
  },
  plugins: [
  ],
}

