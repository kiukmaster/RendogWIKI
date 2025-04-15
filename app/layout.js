import "./globals.css";

export const metadata = {
  title: 'RDWIKI',
  description: 'by Kiuk'
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <div className="relative"> {/* 두개를 하나로 묶는 컨테이너 */}
          <div className="mt-10 text-center">
            <a href="/"><span className="text-sky-400 font-bold text-5xl">R</span><span className="text-orange-600 font-bold text-5xl">D</span> <span className="text-5xl text-white font-bold">WIKI</span></a>
          </div>
        <div className="mt-13">
        {/* 검색창 */}
          <form className="max-w-md mx-auto">   
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="디멘션블럭 : 어디로 가실래요?" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">찾아보기</button>
                </div>
          </form>
        {/* 검색창 */}
          </div>
          </div>
        {children}
      </body>
    </html>
  );
}