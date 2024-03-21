import type { Config } from 'tailwindcss'

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			width: {
				teaser_card_lg: 'calc((100vw + 2.4rem - 4rem - 2.4rem * 2) / 3)',
				teaser_card_xl: 'calc((100vw + 2.4rem - 8rem * 3) / 3)',
			},
			maxWidth: {
				hero_title: '700px',
				teacher_main_section_lp: 'calc(100% - 390px)',
			},
			fontSize: {
				tab: 'calc(9px + 0.703125vw)',
				hero: 'calc(28px + 0.703125vw)',
			},
			gridTemplateColumns: {
				desk_teaser_cards: '1fr 390px',
				laptop_teaser_cards: '1fr 320px',
				gameTeaserCard: 'repeat(auto-fit,minmax(300px,1fr))',
				tournamentCard: 'repeat(auto-fill,minmax(280px,1fr))',
				teacherCard: 'repeat(auto-fit,minmax(360px,1fr))',
			},
			screens: {
				'3xl': '1700px',
				'6xl': '1800px',
				tablet: '640px',
				laptop: '1024px',
				desktop: '1440px',
			},
			colors: {
				lightBackground: 'rgba(248, 248, 250, 1)',
				pageBackground: 'rgba(20, 21, 24, 1)',
				generalBackground: 'rgba(26, 26, 30, 1)',
				darkDetails: 'rgba(47, 55, 55, 0.54)',
				darkPureGray: 'rgba(25, 27, 31, 1)',
				darkPinkDetails: 'rgba(222, 48, 104, 1)',
				orangeDetails: 'rgba(246, 120, 22, 1)',
				pinkDetails: 'rgba(233, 50, 133, 1)',
				yellowDetails: 'rgba(251, 229, 48, 1)',
				fluorescentPink: 'rgba(232, 34, 81, 1)',
				gray100: 'rgba(242, 244, 247, 1)',
				gray200: 'rgba(234, 236, 240, 1)',
				gray25: 'rgba(252, 252, 253, 1)',
				gray300: 'rgba(208, 213, 221, 1)',
				gray400: 'rgba(255, 255, 255, 1)',
				gray50: 'rgba(249, 250, 251, 1)',
				gray500: 'rgba(102, 112, 133, 1)',
				gray600: 'rgba(71, 84, 103, 1)',
				gray700: 'rgba(52, 64, 84, 1)',
				gray800: 'rgba(29, 41, 57, 1)',
				gray900: 'rgba(16, 24, 40, 1)',
				helpPink: 'rgba(255, 255, 255, 1)',
				lightPrimaryText: 'rgba(0, 0, 0, 1)',
				lightSecondaryText: 'rgba(60, 60, 67, 0.6)',
				primaryDetailsColor: 'rgba(246, 120, 22, 1)',
				greenSignal: 'rgba(14, 163, 99, 1)',
				greenSignal40: 'rgba(14, 163, 99, 0.4)',
				greenSignal8: 'rgba(14, 163, 99, 0.08)',
				orangeSignal: 'rgba(255, 138, 92, 1)',
				orangeSignal40: 'rgba(255, 138, 92, 0.4)',
				orangeSignal8: 'rgba(255, 138, 92, 0.08)',
				redSignal: 'rgba(251, 84, 124, 1)',
				redSignal40: 'rgba(251, 84, 124, 0.4)',
				redSignal8: 'rgba(251, 84, 124, 0.08)',
				white100: 'rgba(255, 255, 255, 0.2)',
				white300: 'rgba(255, 255, 255, 0.4)',
				white50: 'rgba(255, 255, 255, 0.1)',
				white500: 'rgba(255, 255, 255, 0.6)',
				white700: 'rgba(255, 255, 255, 0.8)',
				white800: 'rgba(255, 255, 255, 1)',
				skeleton: {
					dark: '#171f29',
				},
				detail: {
					primary: 'rgb(235, 217, 0)',
				},
				typo: {
					primary: 'white',
					secondary: '',
					tertiary: '#ffffffcc',
					gray: '#ffffffa8',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
