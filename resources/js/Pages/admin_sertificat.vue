<template>
     <Head title="Сертификаты" />

     <Main>
          <div class="bg-gray-130 pt-[4.5rem] pb-[7.5rem]">
               <div class="container mx-auto px-4">
                    <div class="bg-white p-8 rounded-3xl flex flex-col gap-8">
                         <div class="flex justify-between items-center">
                              <div class="font-['Onest_Medium'] text-[2.5rem] leading-[1.05em] text-black-400">Сертификаты
                              </div>
                              <div class="flex gap-2">
                                   <div style="background-image: url(/img/pink.png)"
                                        class="p-4 bg-center bg-cover rounded-2xl w-fit">
                                        <div class="font-['Onest_Medium'] text-2xl text-white">394</div>
                                        <div class="mt-5 font-['Onest_Regular'] text-white text-xs leading-[1.3em]">Студента
                                        </div>
                                   </div>
                                   <div style="background-image: url(/img/blue.png)"
                                        class="p-4 bg-center bg-cover rounded-2xl w-fit">
                                        <div class="font-['Onest_Medium'] text-2xl text-white">109</div>
                                        <div class="mt-5 font-['Onest_Regular'] text-white text-xs leading-[1.3em]">
                                             Сертификатов</div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div class="mt-10 flex gap-4">
                         <input type="search" placeholder="Поиск"
                              class="px-4 py-3.5 h-14 w-[254px] border rounded-lg placeholder:font-['Onest_Regular'] placeholder:text-gray-110 focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0">
                         <div class="w-[254px]">
                              <ListBox />
                         </div>
                    </div>

                    <div
                         class=" mt-4 w-fit flex items-center gap-2 bg-black-400 rounded-lg p-3 text-white font-['Onest_Medium'] text-xs leading-[1.05em]">
                         <div>Руководство «Веб-дизайн без ошибок»</div>
                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                   d="M3.5312 3.52859C3.79155 3.26824 4.21366 3.26824 4.47401 3.52859L8.00262 7.0572L11.5312 3.52859C11.7916 3.26824 12.2137 3.26824 12.474 3.52859C12.7344 3.78894 12.7344 4.21105 12.474 4.4714L8.94542 8.00001L12.474 11.5286C12.7343 11.7889 12.7343 12.211 12.474 12.4714C12.2136 12.7317 11.7915 12.7317 11.5312 12.4714L8.00262 8.94282L4.47401 12.4714C4.21366 12.7318 3.79155 12.7318 3.5312 12.4714C3.27085 12.2111 3.27085 11.789 3.5312 11.5286L7.05981 8.00001L3.5312 4.4714C3.27085 4.21105 3.27085 3.78894 3.5312 3.52859Z"
                                   fill="#FB6433" />
                         </svg>
                    </div>

                    <div class="mt-6 bg-white rounded-3xl">
                         <table class="table-fixed border-separate border-spacing-y-6">
                              <thead>
                                   <tr class="font-['Onest_Medium'] text-xs leading-[1.3em]">
                                        <th class="text-left w-[326px] pr-18 pt-2 pb-6 pl-6 border-b border-b-gray-120">Имя
                                        </th>
                                        <th class="text-left w-[352px] pr-18 pt-2 pb-6 border-b border-b-gray-120">Почта</th>
                                        <th class="text-left w-[384px] pr-18 pt-2 pb-6 border-b border-b-gray-120">Курс</th>
                                        <th class="text-left w-[218px] pb-6 pt-2 pr-6 border-b border-b-gray-120">Статус</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr v-for="index in 14" :key="index"
                                        class="font-['Onest_Regular'] text-xs leading-[1.3em]">
                                        <td class="text-left pr-18 pl-6 align-middle">Софья Титова</td>
                                        <td class="text-left pr-18 align-middle">leonard@gmail.com</td>
                                        <td class="text-left pr-18 align-middle">Руководство «Как разобраться в сетках»</td>
                                        <td class="text-right pr-6 align-middle">
                                             <div class="flex items-center justify-between">
                                                  <div class="text-green-700">Выдан</div>
                                                  <div class="flex gap-2">
                                                       <button
                                                            class="bg-blue-160 w-8 h-8 rounded-lg flex items-center justify-center">
                                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                 <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M5.0026 0.333145C5.37079 0.333145 5.66927 0.631622 5.66927 0.999812V4.33314H9.0026C9.37079 4.33314 9.66927 4.63162 9.66927 4.99981C9.66927 5.368 9.37079 5.66648 9.0026 5.66648H5.66927V8.99981C5.66927 9.368 5.37079 9.66648 5.0026 9.66648C4.63441 9.66648 4.33594 9.368 4.33594 8.99981V5.66648H1.0026C0.634414 5.66648 0.335938 5.368 0.335938 4.99981C0.335938 4.63162 0.634414 4.33314 1.0026 4.33314H4.33594V0.999812C4.33594 0.631622 4.63441 0.333145 5.0026 0.333145Z"
                                                                      fill="white" />
                                                            </svg>
                                                       </button>
                                                       <button
                                                            class="bg-blue-160 w-8 h-8 rounded-lg flex items-center justify-center">
                                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                                 xmlns="http://www.w3.org/2000/svg">
                                                                 <path fill-rule="evenodd" clip-rule="evenodd"
                                                                      d="M7.31202 1.33315H8.68799C8.98042 1.33314 9.23275 1.33313 9.44159 1.34738C9.66147 1.36238 9.88141 1.39539 10.0987 1.48539C10.589 1.68846 10.9781 2.07808 11.181 2.56793C11.271 2.78515 11.304 3.005 11.3191 3.2249C11.3214 3.25978 11.3234 3.29586 11.3251 3.33315H13.3333C13.7015 3.33315 14 3.63162 14 3.99981C14 4.368 13.7015 4.66648 13.3333 4.66648H12.6667V11.8942C12.6667 12.2449 12.6667 12.5476 12.6463 12.797C12.6248 13.0602 12.5773 13.3221 12.4488 13.5742C12.257 13.9507 11.9504 14.257 11.5743 14.4486C11.3222 14.5771 11.0604 14.6246 10.7971 14.6461C10.5478 14.6665 10.2451 14.6665 9.8944 14.6665H6.10559C5.75487 14.6665 5.4521 14.6665 5.20264 14.6461C4.93937 14.6246 4.67733 14.5771 4.42521 14.4486C4.0483 14.2566 3.74277 13.9499 3.55132 13.5742C3.42281 13.322 3.37525 13.0599 3.35371 12.7964C3.33331 12.5467 3.33332 12.2436 3.33333 11.8922L3.33333 4.66648H2.66667C2.29848 4.66648 2 4.368 2 3.99981C2 3.63162 2.29848 3.33315 2.66667 3.33315H4.67489C4.67654 3.29588 4.67852 3.25982 4.6809 3.22496C4.69591 3.00508 4.72891 2.7852 4.81891 2.56793C5.02177 2.07817 5.41078 1.6885 5.90113 1.48539C6.11844 1.39538 6.33844 1.36238 6.55834 1.34738C6.76721 1.33313 7.01958 1.33314 7.31202 1.33315ZM6.01001 3.33315C6.01037 3.32728 6.01075 3.32148 6.01114 3.31574C6.02151 3.16381 6.03925 3.10594 6.05075 3.07818C6.11853 2.91453 6.24831 2.78477 6.41137 2.71723C6.43909 2.70575 6.497 2.688 6.64908 2.67762C6.80711 2.66684 7.01359 2.66648 7.33333 2.66648H8.66667C8.98642 2.66648 9.19284 2.66684 9.35083 2.67762C9.50283 2.68799 9.56071 2.70574 9.58846 2.71723C9.75161 2.78481 9.88144 2.91463 9.94918 3.07818C9.9607 3.10599 9.97845 3.16389 9.98883 3.3158C9.98922 3.32152 9.9896 3.3273 9.98996 3.33315H6.01001ZM4.66667 4.66648V11.8665C4.66667 12.2509 4.66719 12.499 4.68262 12.6878C4.69741 12.8688 4.72252 12.9359 4.73933 12.9689C4.80354 13.0949 4.90567 13.197 5.03052 13.2606C5.06333 13.2773 5.13036 13.3024 5.31124 13.3172C5.49987 13.3326 5.74764 13.3331 6.13127 13.3331H9.86873C10.2524 13.3331 10.5 13.3326 10.6885 13.3172C10.8691 13.3024 10.936 13.2774 10.9689 13.2606C11.0945 13.1966 11.197 13.0942 11.2608 12.9689C11.2776 12.936 11.3026 12.869 11.3174 12.6883C11.3328 12.4998 11.3333 12.2522 11.3333 11.8685V4.66648H4.66667ZM6.66667 5.99981C7.03486 5.99981 7.33333 6.29829 7.33333 6.66648V11.3331C7.33333 11.7013 7.03486 11.9998 6.66667 11.9998C6.29848 11.9998 6 11.7013 6 11.3331V6.66648C6 6.29829 6.29848 5.99981 6.66667 5.99981ZM9.33333 5.99981C9.70152 5.99981 10 6.29829 10 6.66648V11.3331C10 11.7013 9.70152 11.9998 9.33333 11.9998C8.96514 11.9998 8.66667 11.7013 8.66667 11.3331V6.66648C8.66667 6.29829 8.96514 5.99981 9.33333 5.99981Z"
                                                                      fill="white" />
                                                            </svg>

                                                       </button>
                                                  </div>
                                             </div>
                                        </td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>

                    <div class="mt-6">
                         <RadioGroup v-model="plan">
                              <div class="flex gap-2">
                                   <RadioGroupOption v-for="index in 8" :key="index" v-slot="{ checked }" value="1">
                                        <span class="font-['Onest_Medium'] text-xs h-10 w-10 flex items-center justify-center rounded-lg"
                                             :class="checked ? 'text-white bg-blue-160' : 'text-black-400 bg-white'">1</span>
                                   </RadioGroupOption>
                                   <button
                                        class="font-['Onest_Medium'] text-xs h-10 w-10 flex items-center justify-center rounded-lg text-black-400 bg-white">...</button>
                                   <RadioGroupOption v-slot="{ checked }" value="32">
                                        <span class="font-['Onest_Medium'] text-xs h-10 w-10 flex items-center justify-center rounded-lg"
                                             :class="checked ? 'text-white bg-blue-160' : 'text-black-400 bg-white'">32</span>
                                   </RadioGroupOption>
                              </div>
                         </RadioGroup>
                    </div>

               </div>
          </div>
     </Main>
</template>

<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';
import ListBox from '@/Components/ListBox.vue';
import {
     RadioGroup,
     RadioGroupLabel,
     RadioGroupOption,
} from '@headlessui/vue';
import { ref } from 'vue';

const plan = ref('startup')

</script>