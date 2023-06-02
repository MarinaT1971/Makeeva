<template>
     <Head title="Добавить урок" />

     <Main>
          <div class="bg-gray-130 pt-4 pb-[7.5rem]">
               <div class="container mx-auto px-4">
                    <div class="mt-0.5 flex gap-2 items-center">
                         <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L7.41421 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H7.41421L11.7071 17.2929C12.0976 17.6834 12.0976 18.3166 11.7071 18.7071C11.3166 19.0976 10.6834 19.0976 10.2929 18.7071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289Z"
                                        fill="#A3A7AF" />
                              </svg></div>
                         <div class="font-['Onest_Regular'] text-gray-110">К созданию курса</div>
                    </div>
                    <div class="mt-8 grid grid-cols-6 gap-4">
                         <div class="col-span-3 p-8 bg-white rounded-3xl">
                              <div class="font-['Onest_Medium'] text-[2.5rem] leading-[1.05em] text-black-400">Название курса
                              </div>

                              <div class="mt-8 flex flex-col gap-6">
                                   <div class="flex flex-col gap-3">
                                        <div class="font-['Onest_Medium'] text-xs leading-[1.05em] text-black-400">Время
                                             публикации</div>
                                       <label class="relative">
                                             <input type="datetime-local" class="absolute w-0 h-0">
                                             <span
                                                  class="inline-block w-full px-4 py-3.5 border border-gray-120 rounded-lg">
                                                  <span class="text-gray-110 font-['Onest_Regular']">DDMMYYY 00:00</span>
                                             </span>
                                        </label>
                                   </div>
                                   <div class="flex flex-col gap-3">
                                        <div class="font-['Onest_Medium'] text-xs leading-[1.05em] text-black-400">Материалы
                                        </div>
                                        <input type="text" placeholder="Название" class="p-4 border border-gray-120 rounded-lg placeholder:font-['Onest_Regular'] placeholder:text-gray-110 focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0">
                                        <label class="relative group">
                                             <input type="file" class="absolute w-0 h-0 z-0">
                                             <span
                                                  class="flex flex-col gap-2 h-[157px] items-center justify-center z-10 rounded-lg border border-dashed border-gray-120">
                                                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M20.0026 8.33334C20.9231 8.33334 21.6693 9.07954 21.6693 10V18.3333H30.0026C30.9231 18.3333 31.6693 19.0795 31.6693 20C31.6693 20.9205 30.9231 21.6667 30.0026 21.6667H21.6693V30C21.6693 30.9205 20.9231 31.6667 20.0026 31.6667C19.0821 31.6667 18.3359 30.9205 18.3359 30V21.6667H10.0026C9.08213 21.6667 8.33594 20.9205 8.33594 20C8.33594 19.0795 9.08213 18.3333 10.0026 18.3333H18.3359V10C18.3359 9.07954 19.0821 8.33334 20.0026 8.33334Z"
                                                            fill="#A3A7AF" />
                                                  </svg>

                                                  <span class="text-black-400 font-['Onest_Medium'] text-xs">Прикрепить
                                                       файлы</span>
                                             </span>
                                        </label>
                                        <button
                                             class="flex gap-2 items-center text-white font-['Onest_Medium'] text-2xs leading-[1.05em] px-3 py-2 bg-blue-160 rounded-md w-fit">
                                             <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.0026 3.33334C8.37079 3.33334 8.66927 3.63181 8.66927 4V7.33334H12.0026C12.3708 7.33334 12.6693 7.63181 12.6693 8C12.6693 8.36819 12.3708 8.66667 12.0026 8.66667H8.66927V12C8.66927 12.3682 8.37079 12.6667 8.0026 12.6667C7.63441 12.6667 7.33594 12.3682 7.33594 12V8.66667H4.0026C3.63441 8.66667 3.33594 8.36819 3.33594 8C3.33594 7.63181 3.63441 7.33334 4.0026 7.33334H7.33594V4C7.33594 3.63181 7.63441 3.33334 8.0026 3.33334Z"
                                                            fill="white" />
                                                  </svg></div>
                                             <div>Новый материал</div>
                                        </button>
                                   </div>
                                   <div class="flex flex-col gap-3">
                                        <div class="font-['Onest_Medium'] text-xs leading-[1.05em] text-black-400">Ссылки
                                        </div>
                                        <input type="text" placeholder="Название" class="p-4 border border-gray-120 rounded-lg placeholder:font-['Onest_Regular'] placeholder:text-gray-110 focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0">
                                        <input type="text" placeholder="Ссылка" class="p-4 border border-gray-120 rounded-lg placeholder:font-['Onest_Regular'] placeholder:text-gray-110 focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0">
                                        <button
                                             class="flex gap-2 items-center text-white font-['Onest_Medium'] text-2xs leading-[1.05em] px-3 py-2 bg-blue-160 rounded-md w-fit">
                                             <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                       xmlns="http://www.w3.org/2000/svg">
                                                       <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M8.0026 3.33334C8.37079 3.33334 8.66927 3.63181 8.66927 4V7.33334H12.0026C12.3708 7.33334 12.6693 7.63181 12.6693 8C12.6693 8.36819 12.3708 8.66667 12.0026 8.66667H8.66927V12C8.66927 12.3682 8.37079 12.6667 8.0026 12.6667C7.63441 12.6667 7.33594 12.3682 7.33594 12V8.66667H4.0026C3.63441 8.66667 3.33594 8.36819 3.33594 8C3.33594 7.63181 3.63441 7.33334 4.0026 7.33334H7.33594V4C7.33594 3.63181 7.63441 3.33334 8.0026 3.33334Z"
                                                            fill="white" />
                                                  </svg></div>
                                             <div>Новая ссылка</div>
                                        </button>
                                   </div>
                                   <div class="flex flex-col gap-3">
                                        <div class="font-['Onest_Medium'] text-xs leading-[1.05em] text-black-400">Практика
                                        </div>
                                        <textarea placeholder="Описание" class="py-4 pl-4 pr-52 h-28 border border-gray-120 rounded-lg resize-none placeholder: placeholder:font-['Onest_Regular'] placeholder:text-gray-110 focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0"></textarea>
                                   </div>
                                   <button
                                        class="w-full text-white font-['Onest_Medium'] bg-blue-160 py-5 text-center rounded-lg">Сохранить</button>
                              </div>
                         </div>

                         <div class="col-start-5 col-span-2 flex flex-col gap-4">
                              <label class="relative group">
                                   <input type="file" class="absolute w-0 h-0 z-0">
                                   <span
                                        class="flex flex-col gap-2 h-[234px] items-center justify-center z-10 w-full bg-white rounded-2xl border border-dashed border-gray-120">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                             <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M20.0026 8.33334C20.9231 8.33334 21.6693 9.07954 21.6693 10V18.3333H30.0026C30.9231 18.3333 31.6693 19.0795 31.6693 20C31.6693 20.9205 30.9231 21.6667 30.0026 21.6667H21.6693V30C21.6693 30.9205 20.9231 31.6667 20.0026 31.6667C19.0821 31.6667 18.3359 30.9205 18.3359 30V21.6667H10.0026C9.08213 21.6667 8.33594 20.9205 8.33594 20C8.33594 19.0795 9.08213 18.3333 10.0026 18.3333H18.3359V10C18.3359 9.07954 19.0821 8.33334 20.0026 8.33334Z"
                                                  fill="#A3A7AF" />
                                        </svg>

                                        <span class="text-black-400 font-['Onest_Medium']">Загрузить видео</span>
                                   </span>
                              </label>
                              <label class="relative group">
                                   <input type="file" class="absolute w-0 h-0 z-0">
                                   <span
                                   class="flex flex-col gap-2 h-[234px] items-center justify-center z-10 w-full bg-white rounded-2xl border border-dashed border-gray-120">
                                   <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                             d="M20.0026 8.33334C20.9231 8.33334 21.6693 9.07954 21.6693 10V18.3333H30.0026C30.9231 18.3333 31.6693 19.0795 31.6693 20C31.6693 20.9205 30.9231 21.6667 30.0026 21.6667H21.6693V30C21.6693 30.9205 20.9231 31.6667 20.0026 31.6667C19.0821 31.6667 18.3359 30.9205 18.3359 30V21.6667H10.0026C9.08213 21.6667 8.33594 20.9205 8.33594 20C8.33594 19.0795 9.08213 18.3333 10.0026 18.3333H18.3359V10C18.3359 9.07954 19.0821 8.33334 20.0026 8.33334Z"
                                             fill="#A3A7AF" />
                                   </svg>

                                   <span class="text-black-400 font-['Onest_Medium']">Обложка,<br> 1920х1080</span>
                              </span>
                         </label>
                    </div>
               </div>
          </div>
     </div>
</Main></template>

<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';



</script>