import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/app/_components/NavBar';
import Footer from '@/app/_components/Footer';

export const metadata: Metadata = {
    title: {
        template: '%s | Yoonje',
        default: 'Yoonje',
    },
    icons: {
        icon: '/images/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className="h-full">
            <head>
                    <link
                        rel="shortcut icon"
                        href="/images/favicon.ico"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/images/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/images/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/images/favicon-16x16.png"
                    />
                    <link rel="shortcut icon" href="#"/>
            </head>
            <body className="flex min-h-screen flex-col bg-beige">
                <NavBar />
                <div className="flex-grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
