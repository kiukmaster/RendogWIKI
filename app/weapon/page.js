'use client';
import { useState, useEffect } from 'react';
import WeaponModal from './WeaponModal';

export default function WeaponPage() {
  const [weaponSelected, setWeaponSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const weaponName = searchParams.get('weapon');
    const weaponType = searchParams.get('type');
  
    if (weaponName && weaponType && weapons.length > 0) {
      const foundWeapon = weapons.find(
        (w) => w.name === weaponName && w.type === weaponType
      );
      if (foundWeapon) {
        setWeaponSelected(foundWeapon);
        setIsModalOpen(true);
      }
    }
  }, [weapons]);

  // 무기 데이터 로드
  useEffect(() => {
    const loadWeapons = async () => {
      try {
        const epicResponse = await fetch('/무기/Epic/Epic.json');
        const uniqueResponse = await fetch('/무기/Unique/Unique.json');
        const legendResponse = await fetch('/무기/Legend/Legend.json');
        const divineResponse = await fetch('/무기/Divine/Divine.json');
        const superiorResponse = await fetch('/무기/Superior/Superior.json');
        const classResponse = await fetch('/무기/Class/Class.json');
        
        const epicData = await epicResponse.json();
        const uniqueData = await uniqueResponse.json();
        const legendData = await legendResponse.json();
        const divineData = await divineResponse.json();
        const superiorData = await superiorResponse.json();
        const classData = await classResponse.json();
        
        // 각 무기에 등급 정보 추가
        const weaponsWithType = [
          ...epicData.map(weapon => ({ ...weapon, type: 'Epic' })),
          ...uniqueData.map(weapon => ({ ...weapon, type: 'Unique' })),
          ...legendData.map(weapon => ({ ...weapon, type: 'Legend' })),
          ...divineData.map(weapon => ({ ...weapon, type: 'Divine' })),
          ...superiorData.map(weapon => ({ ...weapon, type: 'Superior' })),
          ...classData.map(weapon => ({ ...weapon, type: 'Class' }))
        ];
        
        setWeapons(weaponsWithType);
      } catch (error) {
        console.error('무기 데이터 로드 실패:', error);
      }
    };

    loadWeapons();

    // 검색 결과에서 무기 선택 시 모달을 열기 위한 이벤트 리스너
    const handleWeaponSelected = (event) => {
      setWeaponSelected(event.detail);
      setIsModalOpen(true);
    };

    window.addEventListener('weaponSelected', handleWeaponSelected);

    return () => {
      window.removeEventListener('weaponSelected', handleWeaponSelected);
    };
  }, []);

  const handleWeaponClick = (weapon) => {
    setWeaponSelected(weapon);
    setIsModalOpen(true);
  };

  const getWeaponType = (weaponName) => {
    if (weaponName.includes('Epic')) return 'Epic';
    if (weaponName.includes('Unique')) return 'Unique';
    if (weaponName.includes('Legend')) return 'Legend';
    if (weaponName.includes('Divine')) return 'Divine';
    if (weaponName.includes('Superior')) return 'Superior';
    if (weaponName.includes('Class')) return 'Class';
    return 'Epic'; // 기본값
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">무기 도감</h1>
      
      {/* 무기 목록 */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {weapons.map((weapon) => (
          <div
            key={weapon.name}
            onClick={() => handleWeaponClick(weapon)}
            className="p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 flex flex-col items-center"
            style={{ backgroundColor: weapon.color, color: '#ffffff' }}
          >
            <div className="w-[100px] h-[100px] relative mb-2">
              <img
                src={`/무기/${weapon.type}/img/${weapon.name}.png`}
                alt={weapon.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                    e.target.style.display = 'none';
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'w-full h-full flex items-center justify-center bg-gray-700';
                    fallbackDiv.textContent = '이미지 없음';
                    e.target.parentNode.appendChild(fallbackDiv);
                }}
              />
            </div>
            <h2 className="text-xl font-bold text-center">{weapon.name}</h2>
            <div className="text-sm mt-2 text-center">
              {weapon.information.ability.join(', ')}
            </div>
          </div>
        ))}
      </div>

      {weaponSelected && (
        <WeaponModal
          weapon={weaponSelected}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}