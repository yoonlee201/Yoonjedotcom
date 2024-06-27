import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/app/_components/NavBar';
import Footer from './_components/Footer';

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
            <body className="flex min-h-screen flex-col bg-beige">
                <NavBar />
                <div className="flex-grow">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
