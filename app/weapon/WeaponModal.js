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
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src={`/무기/Epic/img/${weapon.name}.png`}
                  alt={weapon.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold" style={{ color: weapon.color }}>
                {weapon.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {/* 능력 정보 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">능력</h3>
            <div className="space-y-2">
              {weapon.information.rightClick.map((info, index) => (
                <p key={index} className="text-gray-700">
                  우클릭: {info}
                </p>
              ))}
              {weapon.information.leftClick[0] !== "X" &&
                weapon.information.leftClick.map((info, index) => (
                  <p key={index} className="text-gray-700">
                    좌클릭: {info}
                  </p>
                ))}
            </div>
          </div>

          {/* 전투 데이터 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">강화 정보</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    {weapon.combatData.requiredInfo.map((info, index) => (
                      <th key={index} className="px-4 py-2 text-left border-b">
                        {info}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {weapon.combatData.value.map((values, index) => (
                    <tr key={index}>
                      {values.map((value, valueIndex) => (
                        <td key={valueIndex} className="px-4 py-2 border-b">
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