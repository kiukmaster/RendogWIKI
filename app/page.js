"use client";

import React, { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");

  const handleModalSubmit = () => {
    if (selectedPage) {
      window.open(selectedPage, '_blank');
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* 메인 컨텐츠 */}
      <div className="container mx-auto px-4 py-12">
        {/* 슬라이드 섹션 */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="relative w-full max-w-3xl">
            <div 
              className="relative w-full h-[300px] overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
              <img
                src="slide3.png"
                alt="슬라이드"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h2 className="text-3xl font-bold text-white mb-2">렌독서버 추천하기</h2>
                <p className="text-gray-200">추천사이트 바로가기</p>
              </div>
            </div>
          </div>

          {/* 메뉴 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
            <a href="/calculate" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 border border-gray-700/50">
                <div className="calImg text-center text-white">
                  <span className="text-white font-bold text-2xl group-hover:text-purple-400 transition-colors duration-300">강화석 계산기</span>
                </div>
              </div>
            </a>
            <a href="/weapon" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 border border-gray-700/50">
                <div className="weaponImg text-center text-white">
                  <span className="text-white font-bold text-2xl group-hover:text-purple-400 transition-colors duration-300">무기 도감</span>
                </div>
              </div>
            </a>
            <a href="/quest" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 border border-gray-700/50">
                <div className="questImg text-center text-white">
                  <span className="text-white font-bold text-2xl group-hover:text-purple-400 transition-colors duration-300">NPC&퀘스트 도감</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 모달 창 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-purple-500/30">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">서버 정보 확인</h2>
              <p className="text-gray-400">어느 페이지로 이동하시겠어요?</p>
            </div>
            <div className="space-y-4">
              <label className="flex items-center space-x-3 p-4 rounded-xl bg-gray-700/50 hover:bg-gray-700/80 transition-colors duration-300 cursor-pointer">
                <input
                  type="radio"
                  name="page"
                  value="https://minelist.kr/servers/2113-rendog.kr"
                  checked={selectedPage === "https://minelist.kr/servers/2113-rendog.kr"}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="form-radio text-purple-500 border-2 border-purple-500"
                />
                <div>
                  <span className="text-white font-medium">마인리스트</span>
                  <p className="text-sm text-gray-400">마인리스트 추천 바로가기</p>
                </div>
              </label>
              <label className="flex items-center space-x-3 p-4 rounded-xl bg-gray-700/50 hover:bg-gray-700/80 transition-colors duration-300 cursor-pointer">
                <input
                  type="radio"
                  name="page"
                  value="https://mine.page/server/Rendog.KR"
                  checked={selectedPage === "https://mine.page/server/Rendog.KR"}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="form-radio text-purple-500 border-2 border-purple-500"
                />
                <div>
                  <span className="text-white font-medium">마인페이지</span>
                  <p className="text-sm text-gray-400">마인페이지 추천 바로가기</p>
                </div>
              </label>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-colors duration-300"
              >
                취소
              </button>
              <button
                onClick={handleModalSubmit}
                className="px-6 py-2 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors duration-300"
              >
                이동
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
