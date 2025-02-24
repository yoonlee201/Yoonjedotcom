import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/app/_components/NavBar';
import Footer from '@/app/_components/Footer';
import "@/types/googleTag"

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
            className="bg-beige">
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

            <body className="relative flex min-h-screen flex-col">
                {/* <!-- Google Tag Manager (noscript) --> */}
                {/* <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PSN3LLG4"
                        height="0"
                        width="0"
                        style={{
                            display: 'none',
                            visibility: 'hidden',
                        }}></iframe>
                </noscript> */}
                {/* <!-- End Google Tag Manager (noscript) --> */}
                <NavBar />
                <main className="realtive mt-root-top md:mt-root-top-md lg:mt-root-top-lg">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
