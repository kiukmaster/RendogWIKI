'use client';
import { useState } from 'react';
import WeaponModal from './WeaponModal';
import epicWeapons from '../../public/무기/Epic/Epic.json';
import Image from 'next/image';

export default function WeaponPage() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWeaponClick = (weapon) => {
    setSelectedWeapon(weapon);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">무기 도감</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {epicWeapons.map((weapon) => (
          <div
            key={weapon.name}
            onClick={() => handleWeaponClick(weapon)}
            className="p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105 flex flex-col items-center"
            style={{ backgroundColor: weapon.color, color: '#ffffff' }}
          >
            <div className="w-[100px] h-[100px] relative mb-2">
              <Image
                src={`/무기/Epic/img/${weapon.name}.png`}
                alt={weapon.name}
                fill
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-bold text-center">{weapon.name}</h2>
            <div className="text-sm mt-2 text-center">
              {weapon.information.ability.join(', ')}
            </div>
          </div>
        ))}
      </div>

      {selectedWeapon && (
        <WeaponModal
          weapon={selectedWeapon}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}