import '@/app/globals.css';
import { Footer } from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://use.typekit.net/yie2kmd.css' />
      </head>
      <body>
        {children}

        <Footer />
      </body>
    </html>
  );
}
