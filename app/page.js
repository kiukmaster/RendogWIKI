import React from "react";

export default function Home() {
  return (
    <div className="flex flex-row flex-wrap mobile-flex justify-between m-20">
      <a href="/calculate" className="w-50 h-50 mobile_top">
        <div className="calImg  text-center text-white">
          <span className="text-black font-extrabold text-xl warpText">강화석 계산기</span>
        </div>
      </a>
      <a href="/weapon" className="w-50 h-50 mb-10">
        <div className="weaponImg text-center text-white">
          <span className="text-black font-extrabold text-xl warpText">무기 도감</span>
        </div>
      </a>
      <a href="/quest" className="w-50 h-50 mb-10" >
        <div className="questImg text-center text-white">
          <span className="text-black font-extrabold text-xl warpText">NPC&퀘스트 도감</span>
        </div>
      </a>
      <a href="/cycle" className="w-50 h-50 mb-10" >
        <div className="cycle Img text-center text-white">
          <span className="text-black font-extrabold text-xl warpText">사이클 도우미(Beta)</span>
        </div>
      </a>
    </div>
  );
}
