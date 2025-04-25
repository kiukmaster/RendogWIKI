"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import epicWeapons from '../public/무기/Epic/Epic.json';
import uniqueWeapons from '../public/무기/Unique/Unique.json';
import legendWeapons from '../public/무기/Legend/Legend.json';
import divineWeapons from '../public/무기/Divine/Divine.json';
import superiorWeapons from '../public/무기/Superior/Superior.json';

export default function searchBar() {
    const [query, setQuery] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const [isWeaponPage, setIsWeaponPage] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const router = useRouter();
  
    const searchList = [
      { name: '강화석 계산기', link: '/calculate' },
      { name: '무기 도감', link: '/weapon' },
      { name: 'NPC & 퀘스트', link: '/quest' },
      { name: '사이클 도우미', link: '/cycle' },
    ];

    useEffect(() => {
      const path = window.location.pathname;
      setIsWeaponPage(path === '/weapon');
    }, [router]);

    const handleInputChange = (e) => {
      const searchTerm = e.target.value;
      setQuery(searchTerm);
      setSelectedIndex(-1); // 검색어가 변경될 때마다 선택 인덱스 초기화
  
      if (searchTerm) {
        // 무기 검색 결과
        const epicResults = epicWeapons
          .filter(weapon => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(weapon => ({ ...weapon, type: 'Epic' }));

        const uniqueResults = uniqueWeapons
          .filter(weapon => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(weapon => ({ ...weapon, type: 'Unique' }));

        const legendResults = legendWeapons
          .filter(weapon => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(weapon => ({ ...weapon, type: 'Legend' }));

        const divineResults = divineWeapons
          .filter(weapon => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(weapon => ({ ...weapon, type: 'Divine' }));

        const superiorResults = superiorWeapons
          .filter(weapon => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(weapon => ({ ...weapon, type: 'Superior' }));

        // 메뉴 검색 결과
        const menuResults = searchList
          .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(item => ({ ...item, type: 'menu' }));

        // 검색 결과 통합
        const combinedResults = [...epicResults, ...uniqueResults, ...legendResults, ...divineResults, ...superiorResults, ...menuResults];
        setFilteredList(combinedResults);
      } else {
        setFilteredList([]);
      }
    };

    const handleKeyDown = (e) => {
      if (filteredList.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev < filteredList.length - 1 ? prev + 1 : prev
          );
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => 
            prev > 0 ? prev - 1 : -1
          );
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && selectedIndex < filteredList.length) {
            handleSelectItem(filteredList[selectedIndex]);
          } else if (filteredList.length > 0) {
            // 엔터키를 눌렀을 때 정확히 일치하는 항목이 있으면 선택
            const exactMatch = filteredList.find(item => 
              item.name.toLowerCase() === query.toLowerCase()
            );
            if (exactMatch) {
              handleSelectItem(exactMatch);
            }
          }
          break;
        case 'Escape':
          setQuery('');
          setFilteredList([]);
          setSelectedIndex(-1);
          break;
      }
    };
  
    const handleSelectItem = (item) => {
      if (item.type !== 'menu') {
        // 무기 선택 시 모달을 열기 위한 이벤트 발생
        const event = new CustomEvent('weaponSelected', { detail: item });
        window.dispatchEvent(event);
        // 무기 도감 페이지로 이동
        router.push(`/weapon?weapon=${encodeURIComponent(item.name)}&type=${item.type}`);
      } else {
        // 메뉴 항목 선택 시 해당 페이지로 이동
        router.push(item.link);
      }
      setQuery('');
      setFilteredList([]);
      setSelectedIndex(-1);
    };

    return(
        <form className="max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
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
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="디멘션 블럭 : 어디로 이동할까요?"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
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
                <div className="absolute w-full mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md z-50">
                    {filteredList.map((item, index) => (
                    <div
                        key={index}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 flex items-center ${
                            index === selectedIndex ? 'bg-gray-200 dark:bg-gray-600' : ''
                        }`}
                        onClick={() => handleSelectItem(item)}
                    >
                        {item.type !== 'menu' && (
                            <img 
                                src={`/무기/${item.type}/img/${item.name}.png`} 
                                alt={item.name}
                                className="w-8 h-8 mr-2 object-contain"
                            />
                        )}
                        <span className={`${item.type === 'weapon' ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>
                            {item.name}
                        </span>
                    </div>
                    ))}
                </div>
                )}
            </div>
        </form>
    );
};