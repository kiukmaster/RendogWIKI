import React from "react";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center mobile-flex">
      <a href="/calculate">
        <div className="text-center text-white flex-none m-30 ">
          <img className="mainImg max-w-full h-auto ml-2" src="/calculate.png" alt="error... please reload to website" />
          <span className="text-black text-2xl font-bold">강화석 계산기</span>
        </div>
      </a>
      <a href="/weapon">
        <div className="text-center text-white flex-none m-30 ">
          <img className="mainImg max-w-full h-auto" src="/weapon.png" alt="error... please reload to website" />
          <span className="text-black text-2xl font-bold">무기 도감</span>
        </div>
      </a>
    </div>
  );
}
