"use client";

import React, { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPage, setSelectedPage] = useState("");
  const handleModalSubmit = () => {
    window.open("https://mine.page/server/Rendog.KR", '_blank');
    window.open("https://minelist.kr/servers/2113-rendog.kr/votes/new", '_blank');
    setShowModal(false);
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
          <div className="grid md:grid-cols-2 gap-8">
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
              <h2 className="text-2xl font-bold text-white mb-2">추천페이지 이동</h2>
              <p className="text-gray-400">
              <img className="inline-block" src="dimension.png" alt="디멘블" loading="lazy" height={40} width={40}/>
                : 추천 페이지를 열어드릴게요!
                </p>
                <p className="text-gray-700">[ TIP ] 팝업차단을 해제해주세요!</p>
            </div>
            <div className="mt-8 flex justify-center space-x-4">
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
