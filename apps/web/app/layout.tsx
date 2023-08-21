import "@yolo/ui/styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-background-primary">
        {children}
      </body>
    </html>
  );
}
