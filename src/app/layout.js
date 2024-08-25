import { Montserrat } from "next/font/google";
import "../styles/index.css";

// Configure the Montserrat font
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = {
  title: "POKCRPLY",
  icons: {
    icon: "/icon.png", // Path to your favicon in the public directory
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <div className="relative app-wrapper text-white ">{children}</div>
      </body>
    </html>
  );
}
