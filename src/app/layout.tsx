import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/app/_components/NavBar';
import Footer from '@/app/_components/Footer';

export const metadata: Metadata = {
    title: {
        template: '%s | Yoonje',
        default: 'Yoonje',
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
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
                    rel="stylesheet"
                />
            </head>

            <body className="flex min-h-screen flex-col bg-beige">
                <NavBar />
                <div className="flex-grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
