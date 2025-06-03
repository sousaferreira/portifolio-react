
import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: 'Portfólio | Pri Dev',
  description: 'Portfólio de uma desenvolvedora apaixonada por tecnologia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">Sobre</Link>
            <Link href="/skills">Habilidades</Link>
            <Link href="/projects">Projetos</Link>
            <Link href="/contact">Contato</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2025 Pri Dev</footer>
      </body>
    </html>
  );
}