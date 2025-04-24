"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function searchBar() {
    const [query, setQuery] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const router = useRouter();
  
    const searchList = [
      { name: '강화석 계산기', link: '/calculate' },
      { name: '무기 도감', link: '/weapon' },
      { name: 'NPC & 퀘스트', link: '/quest' },
      { name: '사이클 도우미', link: '/cycle' },
    ];
  
    const handleInputChange = (e) => {
      const searchTerm = e.target.value;
      setQuery(searchTerm);
  
      // query와 일치하는 항목 필터링
      if (searchTerm) {
        const filtered = searchList.filter(item =>
          item.name.includes(searchTerm) // 검색어 포함된 항목 찾기
        );
        setFilteredList(filtered);
      } else {
        setFilteredList([]);
      }
    };
  
    // 항목 클릭 시 해당 페이지로 이동
    const handleSelectItem = (link) => {
      router.push(link); // Next.js 페이지로 이동
      setQuery(''); // 입력 필드 초기화
      setFilteredList([]); // 드롭다운 초기화
    };

    return(
        <form className="max-w-md mx-auto">
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input
                type="search"
                autoComplete="off"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="디멘션블럭 : 어디로 가실래요?"
                value={query}
                onChange={handleInputChange}
                required
                />
                <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                찾아보기
                </button>

                {/* 드롭다운 결과 */}
                {filteredList.length > 0 && (
                <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md">
                    {filteredList.map((item, index) => (
                    <div
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSelectItem(item.link)}
                    >
                        {item.name}
                    </div>
                    ))}
                </div>
                )}
            </div>
        </form>
        );
};