<template>
     <Head title="404" />

     <Main>
          <div class="bg-gray-130 pt-8 pb-18 md:pb-24 lg:pb-[7.5rem]">
               <div class="container mx-auto px-4 grid grid-cols-6 gap-3 md:gap-4">
                    <div
                         class="col-span-12 md:col-span-3 h-[12.5rem] md:h-[37.5rem] lg:h-[43.75rem] bg-white rounded-2xl md:rounded-3xl text-black-400 flex flex-col gap-2 items-center pt-[3.25rem] md:pt-60 lg:pt-[17rem]">
                         <div
                              class="font-['Onest_Medium'] text-[2rem] md:text-[2.5rem] leading-[1.05em] lg:text-11xl lg:tracking-[-.02em]">
                              404</div>
                         <div
                              class="font-['Onest_Regular'] text-xs md:text-xss lg:text-xl leading-[1.3em] text-center px-8 lg:w-1/2">
                              Страница когда-то была, а может и нет, но сейчас её точно нет</div>
                    </div>
                    <div
                         class="col-span-12 md:col-span-3 h-[12.5rem] md:h-[37.5rem] lg:h-[43.75rem] bg-blue-160 rounded-2xl md:rounded-3xl text-white pt-12 md:pt-[13.75rem] lg:pt-64 flex flex-col gap-5 items-center">
                         <div class="w-4 md:w-8 lg:w-9 h-3.5 md:h-7 lg:h-8"><svg viewBox="0 0 22 20" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M11.3907 1.05703C11.9114 0.536329 12.7556 0.536329 13.2763 1.05703L21.2763 9.05703C21.797 9.57773 21.797 10.4219 21.2763 10.9426L13.2763 18.9426C12.7556 19.4633 11.9114 19.4633 11.3907 18.9426C10.87 18.4219 10.87 17.5777 11.3907 17.057L17.1145 11.3332H1.66683C0.93045 11.3332 0.333496 10.7362 0.333496 9.99984C0.333496 9.26346 0.93045 8.6665 1.66683 8.6665H17.1145L11.3907 2.94265C10.87 2.42195 10.87 1.57773 11.3907 1.05703Z"
                                        fill="white" />
                              </svg>
                         </div>
                         <div
                              class="font-['Onest_Medium'] text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] leading-[1.05em] text-center">
                              Вернуться<br>на главную</div>
                    </div>
               </div>
          </div>
</Main></template>

<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';



</script>