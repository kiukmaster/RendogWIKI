import Image from 'next/image';

export default function WeaponModal({ weapon, isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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
              <div className="w-[120px] h-[120px] relative rounded-lg overflow-hidden border-2 border-gray-700 shadow-lg">
                <Image
                  src={`/무기/Epic/img/${weapon.name}.png`}
                  alt={weapon.name}
                  fill
                  className="object-contain"
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
              src={`/무기/Epic/video/${weapon.name}.mp4`}
              controls
              autoPlay
              className="w-full rounded-lg shadow-lg"
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
            <h3 className="text-xl font-semibold mb-4 text-gray-200">강화 정보</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {weapon.combatData.requiredInfo.map((info, index) => (
                      <th key={index} className="px-4 py-3 text-left border-b border-gray-700 text-gray-300">
                        {info}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weapon.combatData.value.map((values, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}>
                      {values.map((value, valueIndex) => (
                        <td key={valueIndex} className="px-4 py-3 text-gray-300">
                          {value}
                        </td>
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