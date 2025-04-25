import Image from 'next/image';

export default function WeaponModal({ weapon, isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getWeaponType = (weaponName) => {
    if (weaponName.includes('Epic')) return 'Epic';
    if (weaponName.includes('Unique')) return 'Unique';
    if (weaponName.includes('Legend')) return 'Legend';
    if (weaponName.includes('Divine')) return 'Divine';
    if (weaponName.includes('Superior')) return 'Superior';
    return 'Epic'; // 기본값
  };

  const weaponType = getWeaponType(weapon.name);

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700">
        <div className="p-8">
          {/* 헤더 */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-6">
              <div className="w-[200px] h-[200px] relative mb-4">
                <img
                  src={`/무기/${weapon.type}/img/${weapon.name}.png`}
                  loading="lazy" 
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
              <div>
                <h2 className="text-3xl font-bold" style={{ color: weapon.color }}>
                  {weapon.name}
                </h2>
                <div className="flex gap-2 mt-2">
                  {weapon.information.ability.map((ability, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-200"
                    >
                      {ability}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* 비디오 */}
          <div className="mb-8">
            <video
              src={`/무기/${weapon.type}/video/${weapon.name}.mp4`}
              className="w-full rounded-lg"
              controls
              autoPlay
              onError={(e) => {
                  e.target.style.display = 'none';
                  const fallbackDiv = document.createElement('div');
                  fallbackDiv.className = 'w-full h-64 flex items-center justify-center bg-gray-700 rounded-lg';
                  fallbackDiv.textContent = '비디오 없음';
                  e.target.parentNode.appendChild(fallbackDiv);
              }}
            >
              브라우저가 비디오를 지원하지 않습니다.
            </video>
          </div>

          {/* 능력 정보 */}
          <div className="mb-8 bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">능력</h3>
            <div className="space-y-4">
              {weapon.information.rightClick.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="px-2 py-1 bg-blue-500 text-white text-sm rounded">우클릭</span>
                  <p className="text-gray-300 flex-1">{info}</p>
                </div>
              ))}
              {weapon.information.leftClick[0] !== "X" &&
                weapon.information.leftClick.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="px-2 py-1 bg-red-500 text-white text-sm rounded">좌클릭</span>
                    <p className="text-gray-300 flex-1">{info}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* 전투 데이터 */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-200">데이터</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-300">
                    {weapon.combatData.requiredInfo.map((info, index) => (
                      <th key={index} className="px-4 py-2 text-left">{info}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weapon.combatData.value.map((row, rowIndex) => (
                    <tr key={rowIndex} className="text-gray-300">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 