import './globals.css';

export const metadata = {
  title: 'Frontline Exchange - Style Guide',
  description: 'Style guide for military gear marketplace',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
