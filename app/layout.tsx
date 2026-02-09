export const metadata = {
  title: "TPHL Meal ON / OFF",
  description: "TPHL Meal ON OFF Exception App",
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
