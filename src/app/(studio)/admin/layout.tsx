export const metadata = {
  title: "Aliv Agency Sanity",
  description: "Generated by Next + Sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
