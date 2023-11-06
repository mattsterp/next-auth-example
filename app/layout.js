import Nav from "./(components)/Nav";
import "./globals.css";

export const metadata = {
  title: "Next Auth Example",
  description: "Next Auth Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Nav />
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
