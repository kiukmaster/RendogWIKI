"use client";

import { useRef, useState } from "react";

export default function MoneyCal() {
    const inputRefs = useRef([]);
    const [ShowModal, setShowModal] = useState(false);

    const onClickBtn = () => {
        setShowModal(true);
        for (let index = 0; index < 9; index++) { // 0 ~ 9까지 반복
            if (inputRefs.current[index].value >= 4) { // 각 배열의 값이 4보다 클경우 계산.
                inputRefs.current[index + 1].value = Number(inputRefs.current[index + 1].value)
                + Math.floor(inputRefs.current[index].value / 4); // Number객체를 이용하여 숫자로 변환한 뒤 계산.
                inputRefs.current[index].value = inputRefs.current[index].value % 4;
            }
        }
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const clearValueBtn = () => {
        for (let index = 0; index < 10; index++) { // 0 ~ 9까지 반복
            inputRefs.current[index].value = 0;
        }
    }

    return (
        <div>
            <div className="flex justify-center items-center flex-row flex-wrap">
            <div className="m-10">
                <img src="/강화석사진/1.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">1강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[0].value = parseInt(inputRefs.current[0].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[0] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[0].value = parseInt(inputRefs.current[0].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/2.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">2강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[1].value = parseInt(inputRefs.current[1].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[1] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[1].value = parseInt(inputRefs.current[1].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/3.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">3강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[2].value = parseInt(inputRefs.current[2].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[2] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[2].value = parseInt(inputRefs.current[2].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/4.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">4강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[3].value = parseInt(inputRefs.current[3].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[3] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[3].value = parseInt(inputRefs.current[3].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/5.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">5강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[4].value = parseInt(inputRefs.current[4].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[4] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[4].value = parseInt(inputRefs.current[4].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/6.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">6강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[5].value = parseInt(inputRefs.current[5].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[5] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[5].value = parseInt(inputRefs.current[5].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/7.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">7강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[6].value = parseInt(inputRefs.current[6].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[6] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[6].value = parseInt(inputRefs.current[6].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/8.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">8강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[7].value = parseInt(inputRefs.current[7].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[7] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[7].value = parseInt(inputRefs.current[7].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/9.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">9강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[8].value = parseInt(inputRefs.current[8].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[8] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[8].value = parseInt(inputRefs.current[8].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-10">
                <img src="/강화석사진/10.png" width={32} height={32} alt="..." loading="lazy" />
                <span className="block">10강 강화석</span>
                <div class="relative flex items-center max-w-[8rem]">
                    <button type="button" onClick={() => {
                    inputRefs.current[9].value = parseInt(inputRefs.current[9].value) - 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="number" min={0} defaultValue={0} ref={(el) => (inputRefs.current[9] = el)} class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="입력" required />
                    <button type="button" onClick={() => {
                    inputRefs.current[9].value = parseInt(inputRefs.current[9].value) + 1;
                }} class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            {ShowModal &&
                        <div className="BackModalBox" onClick={closeModal}>
                            <div className="ModalBoxDetail" onClick={(e) => e.stopPropagation()}>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/1.png" />
                                    <span className="text-purple-400">1강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[0].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/2.png" />
                                    <span className="text-purple-400">2강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[1].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/3.png" />
                                    <span className="text-purple-400">3강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[2].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/4.png" />
                                    <span className="text-purple-400">4강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[3].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/5.png" />
                                    <span className="text-purple-400">5강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[4].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/6.png" />
                                    <span className="text-purple-400">6강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[5].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/7.png" />
                                    <span className="text-purple-400">7강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[6].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/8.png" />
                                    <span className="text-purple-400">8강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[7].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block" src="/강화석사진/9.png" />
                                    <span className="text-purple-400">9강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[8].value} type="text" readOnly /><br />
                                </div>
                                <div className="mb-1 font-extrabold block px-2.5 pb-2.5 pt-3 w-full text-xl rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                                    <img className="calImg inline-block ml-2" src="/강화석사진/10.png" />
                                    <span className="text-purple-400">10강 강화석</span>
                                    <input className="text-black inline-block text-center w-50" value={inputRefs.current[9].value} type="text" readOnly /><br />
                                </div>
                            </div>
                        </div>}

            </div>
            <button onClick={onClickBtn} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">계산하기</button>
            <button onClick={clearValueBtn} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">초기화하기</button>
        </div>
    );
}

// export default function calculate() {
//     return (
//         <div className="m-20 flex flex-col justify-center items-center">
//             <div className="pb-3">
//                 <img src="/강화석사진/1.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/2.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/3.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/4.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/5.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/6.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/7.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/8.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/9.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//             <div className="pb-3">
//                 <img src="/강화석사진/10.png" width={32} height={32} alt="..." loading="lazy" />
            
//             </div>
//       </div>  
//     );
// }