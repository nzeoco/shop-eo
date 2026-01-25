/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				nzeo: {
					primary: '#1B4D3E', // Deep Forest Green (unchanged)
					secondary: '#2C5E4F', // Lighter Green for hovers
					cream: '#F9F7F2',   // Lighter, cleaner cream
					gold: '#D4AF37',    // Muted Gold for accents
					dark: '#121212',    // Softer Black
					gray: '#5A5A5A',    // Elegant gray
				}
			},
			fontFamily: {
				// Elegant Serif for Headings
				serif: ['"Playfair Display"', 'serif'], 
				// Clean Sans for readability
				sans: ['Inter', 'sans-serif'], 
			},
			boxShadow: {
				'soft': '0 20px 40px -15px rgba(27, 77, 62, 0.1)',
				'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
			},
            animation: {
				'fade-in': 'fadeIn 1s ease-out',
                'subtle-float': 'float 6s ease-in-out infinite',
			},
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
		},
	},
	plugins: [],
}