"use client";

import { useRef, useState } from "react";

export default function MoneyCal() {
    const inputRefs = useRef([]);
    const [ShowModal, setShowModal] = useState(false);

    const onClickBtn = () => {
        setShowModal(true);
        for (let index = 0; index < 9; index++) {
            if (inputRefs.current[index].value >= 4) {
                inputRefs.current[index + 1].value = Number(inputRefs.current[index + 1].value)
                + Math.floor(inputRefs.current[index].value / 4);
                inputRefs.current[index].value = inputRefs.current[index].value % 4;
            }
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const clearValueBtn = () => {
        for (let index = 0; index < 10; index++) {
            inputRefs.current[index].value = 0;
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-white mb-8">강화석 계산기</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col items-center">
                                <img 
                                    className="w-16 h-16 mb-4" 
                                    src={`/강화석사진/강화석${index + 1}.png`} 
                                    alt={`강화석 ${index + 1}강`} 
                                    loading="lazy"
                                />
                                <span className="text-xl font-bold text-purple-400 mb-4">{index + 1}강</span>
                                <div className="flex items-center space-x-2">
                                    <button 
                                        onClick={() => inputRefs.current[index].value = parseInt(inputRefs.current[index].value) - 1}
                                        className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-2 transition-colors duration-200"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <input 
                                        type="number" 
                                        min={0} 
                                        defaultValue={0} 
                                        ref={(el) => (inputRefs.current[index] = el)} 
                                        className="w-20 text-center bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                    <button 
                                        onClick={() => inputRefs.current[index].value = parseInt(inputRefs.current[index].value) + 1}
                                        className="bg-gray-700 hover:bg-gray-600 text-white rounded-lg p-2 transition-colors duration-200"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center space-x-4 mt-8">
                    <button 
                        onClick={onClickBtn}
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                        계산하기
                    </button>
                    <button 
                        onClick={clearValueBtn}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                        초기화하기
                    </button>
                </div>
            </div>

            {ShowModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold text-white">계산 결과</h2>
                            <button 
                                onClick={closeModal}
                                className="text-gray-400 hover:text-white"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-4">
                            {[...Array(10)].map((_, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <img 
                                            className="w-8 h-8" 
                                            src={`/강화석사진/강화석${index + 1}.png`} 
                                            alt={`강화석 ${index + 1}강`}
                                        />
                                        <span className="text-white font-medium">{index + 1}강</span>
                                    </div>
                                    <span className="text-purple-400 font-bold">{inputRefs.current[index].value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}