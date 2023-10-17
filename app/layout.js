import "./globals.css";

export const metadata = {
  title: "Staycation",
  description:
    "We provide everything you need to enjoy your family holiday and create unforgettable moments. It's time to make more cherished memories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
