import "./globals.css";
import SearchBar from "./searchBar.js"

export const metadata = {
  title: 'RDWIKI',
  description: 'by Kiuk'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <div className="relative">
          <div className="mt-10 text-center">
            <a href="/"><span className="text-sky-400 font-bold text-5xl">R</span><span className="text-orange-600 font-bold text-5xl">D</span> <span className="text-5xl text-white font-bold">WIKI</span></a>
          </div>
        <div className="mt-13">
        <SearchBar />
          </div>
          </div>
        {children}
      </body>
    </html>
  );
}