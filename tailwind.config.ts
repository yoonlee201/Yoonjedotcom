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
            fontSize: {
                h1: [
                    '2rem',
                    {
                        lineHeight: '1.2',
                        fontWeight: 600,
                    },
                ],
                h2: [
                    '1.25rem',
                    {
                        lineHeight: '1.2',
                        fontWeight: 500,
                    },
                ],
                h3: [
                    '1rem',
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
                'button-sm': [
                    '0.9375rem',
                    {
                        lineHeight: '1',
                        fontWeight: 600,
                    },
                ],
                navlink: [
                    '0.9375rem',
                    {
                        lineHeight: '1',
                        fontWeight: 500,
                    },
                ],
                sm: [
                    '0.875rem',
                    {
                        lineHeight: '1.5',
                    },
                ],
                xs: [
                    '0.625rem',
                    {
                        lineHeight: '1.5',
                    },
                ],
            },
            borderRadius: {
                xl: '2.8125rem',
                lg: '.5rem',
                md: 'calc(.5rem - 2px)',
                sm: 'calc(.5rem - 4px)',
            },
            borderWidth: {
                sm: '1px',
                md: '2px',
                lg: '3px',
                xl: '4px',
            },
            padding: {
                'root-top': '5.5rem',
                'root-top-lg': '4.7rem',
                'root-top-md': '4.3rem',
                'root-top-sm': '3.75rem',
                'root-inline': '5rem',
                'root-inline-sm': '2.5rem',
                'section-block': '4rem',
                'section-block-sm': '3rem',
                'section-block-xs': '2rem',
                'btn-block': '.75rem',
                'btn-inline': '1.5rem',
                'tag-block': '0.5rem',
                'tag-inline': '1rem',
                'tag-block-sm': '0.3rem',
                'tag-inline-sm': '0.8rem',
                'input-block': '1rem',
                'input-inline': '1.5rem',
                'card-inline': '1.5rem',
                'section-inline': '1.5rem',
            },
        },
    },
    plugins: [],
} satisfies Config;

export default config;
