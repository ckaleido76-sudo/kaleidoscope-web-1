/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main brand colors
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        
        // Background colors
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        
        // Text colors
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        
        // Header gradient colors
        'header-from': 'var(--color-header-from)',
        'header-to': 'var(--color-header-to)',
        
        // Card colors
        'card-from': 'var(--color-card-from)',
        'card-to': 'var(--color-card-to)',
        'card-border': 'var(--color-card-border)',
        
        // Form colors
        'form-bg': 'var(--color-form-bg)',
        'form-border': 'var(--color-form-border)',
        'form-text': 'var(--color-form-text)',
        'form-placeholder': 'var(--color-form-placeholder)',
        'form-focus-ring': 'var(--color-form-focus-ring)',
        'form-focus-border': 'var(--color-form-focus-border)',
        
        // UI elements
        'accent-light': 'var(--color-accent-light)',
        'dark-bg': 'var(--color-dark-bg)',
        'dark-surface': 'var(--color-dark-surface)',
        
        // Status colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}