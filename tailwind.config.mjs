/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	'./src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	  },
	  screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	  },
  	extend: {
		  fontFamily: {
			primary: ['Inter', 'Arial', 'sans-serif'],
			second: "var(--font-montserrat)",
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			primary: '#f0efea',
			accent: {
				DEFAULT: '#7a9781',
				hover: '#d7b49e',
				sec: '#3D2C2E',
				secondWhite: '#cfd1c4',
			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  
		keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
		  },
		  animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
