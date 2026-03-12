/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.ejs",
        "./public/**/*.html",
        "./public/js/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                'health-good': '#10b981',
                'health-warning': '#f59e0b',
                'health-danger': '#ef4444',
                'bio-safe': '#059669',
                'primary': '#10b981',
                'primary-dark': '#059669',
                'secondary': '#f3f4f6',
                'accent': '#f59e0b',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'fade-in': 'fadeIn 0.6s ease-in',
                'slide-in': 'slideIn 0.5s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
                display: ['Playfair Display', 'serif'],
            },
            boxShadow: {
                'sm-lg': '0 4px 20px rgba(0, 0, 0, 0.08)',
                'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
                'hover': '0 15px 40px rgba(0, 0, 0, 0.15)',
            },
        },
    },
    plugins: [],
}
