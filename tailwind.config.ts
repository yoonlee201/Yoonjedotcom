import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: ['./src/app/**/*.{ts,tsx}'],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        fontFamily: {
            'krona-one': ['Krona One', 'sans-serif'],
            krub: ['Krub', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            inherit: 'inherit',
            beige: {
                DEFAULT: 'hsl(44, 65%, 95%)',
                2: 'hsl(30, 36%, 90%)',
                3: 'hsl(0, 7%, 83%)',
            },
            blue: {
                DEFAULT: 'hsl(230, 11%, 57%)',
                2: 'hsl(230, 14%, 46%)',
            },
            red: {
                DEFAULT: 'hsl(0, 51%, 57%)',
            },
        },

        extend: {
            screens: {
              xs:'360px'  
            },
            fontSize: {
                h1: [
                    '1.25rem',
                    {
                        lineHeight: '1.2',
                        fontWeight: 100,
                    },
                ],
                h2: [
                    '1rem',
                    {
                        lineHeight: '1.2',
                        fontWeight: 100,
                    },
                ],
                h3: [
                    '0.9rem',
                    {
                        lineHeight: '1.2',
                        fontWeight: 500,
                    },
                ],
                p: [
                    '1rem',
                    {
                        lineHeight: '1.5',
                        fontWeight: 300,
                    },
                ],
                button: [
                    '1.125rem',
                    {
                        lineHeight: '1',
                        fontWeight: 600,
                    },
                ],
                navlink: [
                    '0.75rem',
                    {
                        lineHeight: '1',
                        fontWeight: 100,
                    },
                ],
            },
            borderRadius: {
                xl: '2.8125rem',
                lg: '1.333rem',
                md: '0.875rem',
                sm: 'calc(.5rem - 2px)',
            },
            borderWidth: {
                sm: '1px',
                md: '2px',
                lg: '3px',
                xl: '4px',
            },
            padding: {
                'root-top': '3.75rem',
                'root-top-md': '4.3rem',
                'root-top-lg': '4.7rem',
                'root-bottom': '8.7rem',
                'root-bottom-md': '4.3rem',
                'root-bottom-lg': '4.7rem',
            },
            margin: ({ theme }) => ({
                ...theme('padding'),
            }),
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;

export default config;
