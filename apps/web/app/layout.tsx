import "ui/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
