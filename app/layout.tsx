import "./styles.css";

export const metadata = {
  title: "MontanaSky Support Copilot",
  description: "Internal SOP/RAG help desk workflow assistant"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
