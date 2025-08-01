module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d", // blue-900
          50: "#ebf4ff", // blue-50
          100: "#dbeafe", // blue-100
          200: "#bfdbfe", // blue-200
          300: "#93c5fd", // blue-300
          400: "#60a5fa", // blue-400
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1a365d", // blue-900
        },
        secondary: {
          DEFAULT: "#2d3748", // gray-700
          50: "#f9fafb", // gray-50
          100: "#f3f4f6", // gray-100
          200: "#e5e7eb", // gray-200
          300: "#d1d5db", // gray-300
          400: "#9ca3af", // gray-400
          500: "#6b7280", // gray-500
          600: "#4b5563", // gray-600
          700: "#2d3748", // gray-700
          800: "#1f2937", // gray-800
          900: "#111827", // gray-900
        },
        accent: {
          DEFAULT: "#ed8936", // orange-500
          50: "#fffbeb", // orange-50
          100: "#fef3c7", // orange-100
          200: "#fde68a", // orange-200
          300: "#fcd34d", // orange-300
          400: "#fbbf24", // orange-400
          500: "#ed8936", // orange-500
          600: "#d97706", // orange-600
          700: "#b45309", // orange-700
          800: "#92400e", // orange-800
          900: "#78350f", // orange-900
        },
        background: "#f7fafc", // gray-50
        surface: "#edf2f7", // gray-100
        text: {
          primary: "#1a202c", // gray-900
          secondary: "#4a5568", // gray-600
        },
        success: {
          DEFAULT: "#38a169", // green-600
          50: "#f0fff4", // green-50
          100: "#c6f6d5", // green-100
          500: "#48bb78", // green-500
          600: "#38a169", // green-600
        },
        warning: {
          DEFAULT: "#d69e2e", // yellow-600
          50: "#fffff0", // yellow-50
          100: "#fefcbf", // yellow-100
          500: "#ecc94b", // yellow-500
          600: "#d69e2e", // yellow-600
        },
        error: {
          DEFAULT: "#e53e3e", // red-600
          50: "#fed7d7", // red-50
          100: "#fed7d7", // red-100
          500: "#f56565", // red-500
          600: "#e53e3e", // red-600
        },
        border: {
          light: "#e2e8f0", // gray-200
          medium: "#cbd5e0", // gray-300
        },
      },
      fontFamily: {
        headline: ['Crimson Pro', 'serif'],
        body: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}