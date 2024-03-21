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
				lightBackground: 'rgba(248, 248, 250, 1)', //#f8f8fa
				pageBackground: 'rgba(20, 21, 24, 1)', //#141518
				primaryBackground: '#212227',
				sidebarBackground: '#14151B',
				generalBackground: 'rgba(26, 26, 30, 1)', //#1a1a1e
				darkDetails: 'rgba(47, 55, 55, 0.54)', //#2f3737
				darkPureGray: 'rgba(25, 27, 31, 1)', //#191b1f
				darkPinkDetails: 'rgba(222, 48, 104, 1)', //#de3068
				orangeDetails: 'rgba(246, 120, 22, 1)', //#f67816
				pinkDetails: 'rgba(233, 50, 133, 1)', //#e93285
				yellowDetails: 'rgba(251, 229, 48, 1)', //#fbe530
				fluorescentPink: 'rgba(232, 34, 81, 1)', //#e82251
				gray100: 'rgba(242, 244, 247, 1)', //#f2f4f7
				gray200: 'rgba(234, 236, 240, 1)', //#eaecf0
				gray25: 'rgba(252, 252, 253, 1)', //#fcfcfd
				gray300: 'rgba(208, 213, 221, 1)', //#d0d5dd
				gray400: '#98A2B3', //#98A2B3
				gray50: 'rgba(249, 250, 251, 1)', //#f9fafb
				gray500: 'rgba(102, 112, 133, 1)', //#667085
				gray600: 'rgba(71, 84, 103, 1)', //#475467
				gray700: 'rgba(52, 64, 84, 1)', //#344054
				gray800: 'rgba(29, 41, 57, 1)', //#1d2939
				gray900: 'rgba(16, 24, 40, 1)', //#101828
				helpPink: 'rgba(255, 255, 255, 1)', //#ffffff
				lightPrimaryText: 'rgba(0, 0, 0, 1)', //#000000
				lightSecondaryText: 'rgba(60, 60, 67, 0.6)', //#3c3c43
				primaryDetailsColor: 'rgba(246, 120, 22, 1)', //#f67816
				greenSignal: 'rgba(14, 163, 99, 1)', //#0ea363
				greenSignal40: 'rgba(14, 163, 99, 0.4)', //#0ea363
				greenSignal8: 'rgba(14, 163, 99, 0.08)', //#0ea363
				orangeSignal: 'rgba(255, 138, 92, 1)', //#ff8a5c
				orangeSignal40: 'rgba(255, 138, 92, 0.4)', //#ff8a5c
				orangeSignal8: 'rgba(255, 138, 92, 0.08)', //#ff8a5c
				redSignal: 'rgba(251, 84, 124, 1)', //#fb547c
				redSignal40: 'rgba(251, 84, 124, 0.4)', //#fb547c
				redSignal8: 'rgba(251, 84, 124, 0.08)', //#fb547c
				white100: 'rgba(255, 255, 255, 0.2)', //#ffffff
				white300: 'rgba(255, 255, 255, 0.4)', //#ffffff
				white50: 'rgba(255, 255, 255, 0.1)', //#ffffff
				white500: 'rgba(255, 255, 255, 0.6)', //#ffffff
				white700: 'rgba(255, 255, 255, 0.8)', //#ffffff
				white800: 'rgba(255, 255, 255, 1)', //#ffffff
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
