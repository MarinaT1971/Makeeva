<template>
     <Head title="Оплаты" />

     <Main>
          <div class="bg-gray-130 pt-[4.5rem] pb-[7.5rem]">
               <div class="container mx-auto px-4">
                    <div class="bg-white p-8 rounded-3xl flex flex-col gap-8">
                         <div class="flex justify-between items-center">
                              <div class="font-['Onest_Medium'] text-[2.5rem] leading-[1.05em] text-black-400">Оплаты</div>
                              <div class="flex gap-2">
                                   <div style="background-image: url(/img/pink_WebP.WebP)"
                                        class="p-4 bg-center bg-cover rounded-2xl w-fit">
                                        <div class="font-['Onest_Medium'] text-2xl text-white">1 987 679</div>
                                        <div class="mt-6 font-['Onest_Regular'] text-white text-xs leading-[1.3em]">Школа
                                        </div>
                                   </div>
                                   <div style="background-image: url(/img/blue_WebP.WebP)"
                                        class="p-4 bg-center bg-cover rounded-2xl w-fit">
                                        <div class="font-['Onest_Medium'] text-2xl text-white">567 029</div>
                                        <div class="mt-6 font-['Onest_Regular'] text-white text-xs leading-[1.3em]">
                                             Разработка</div>
                                   </div>
                                   <div style="background-image: url(/img/yellow_WEbP.WebP)"
                                        class="p-4 bg-center bg-cover rounded-2xl w-fit">
                                        <div class="font-['Onest_Medium'] text-2xl text-white">30 978</div>
                                        <div class="mt-6 font-['Onest_Regular'] text-white text-xs leading-[1.3em]">Налоги
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="flex gap-6 text-black-400">
                              <div class="flex flex-col gap-2.5">
                                   <div class="font-['Onest_Medium'] text-3xl">105</div>
                                   <div class="font-['Onest_Regular'] text-xs leading-[1.3em]">Всего транзакций</div>
                              </div>
                              <div class="flex flex-col gap-2.5">
                                   <div class="font-['Onest_Medium'] text-3xl">97</div>
                                   <div class="font-['Onest_Regular'] text-xs leading-[1.3em]">Оплачено</div>
                              </div>
                              <div class="flex flex-col gap-2.5">
                                   <div class="font-['Onest_Medium'] text-3xl">2</div>
                                   <div class="font-['Onest_Regular'] text-xs leading-[1.3em]">Ошибка</div>
                              </div>
                              <div class="flex flex-col gap-2.5">
                                   <div class="font-['Onest_Medium'] text-3xl">0</div>
                                   <div class="font-['Onest_Regular'] text-xs leading-[1.3em]">Возврат</div>
                              </div>
                              <div class="flex flex-col gap-2.5">
                                   <div class="font-['Onest_Medium'] text-3xl">4</div>
                                   <div class="font-['Onest_Regular'] text-xs leading-[1.3em]">Waiting</div>
                              </div>
                         </div>
                    </div>

                    <div class="mt-10 flex gap-4">
                         <button class="bg-blue-160 rounded-lg w-14 h-14 flex justify-center items-center"><svg width="14"
                                   height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M7 0C7.55228 0 8 0.447715 8 1V6H13C13.5523 6 14 6.44772 14 7C14 7.55228 13.5523 8 13 8H8V13C8 13.5523 7.55228 14 7 14C6.44772 14 6 13.5523 6 13V8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H6V1C6 0.447715 6.44772 0 7 0Z"
                                        fill="white" />
                              </svg>
                         </button>
                         <input type="search" placeholder="Поиск"
                              class="px-4 py-3.5 h-14 w-[254px] border rounded-lg placeholder:font-['Onest_Regular'] placeholder:text-gray-110 focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0">
                         <div class="w-[254px]">
                              <ListBox />
                         </div>
                         <div class="w-[254px]">
                              <ListBox />
                         </div>
                         <label class="relative">
                              <input type="date" class="absolute w-0 h-0">
                              <span
                                   class="inline-block px-4 py-3.5 h-14 w-[254px] bg-white border border-gray-120 rounded-lg">
                                   <span class="text-gray-110 font-['Onest_Regular']">DDMMYYYY-DDMMYYYY</span>
                              </span>
                         </label>
                         <button class="flex gap-2 items-center px-6 bg-blue-160 rounded-lg">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 2C12.5523 2 13 2.44772 13 3V14.5858L16.2929 11.2929C16.6834 10.9024 17.3166 10.9024 17.7071 11.2929C18.0976 11.6834 18.0976 12.3166 17.7071 12.7071L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L6.29289 12.7071C5.90237 12.3166 5.90237 11.6834 6.29289 11.2929C6.68342 10.9024 7.31658 10.9024 7.70711 11.2929L11 14.5858V3C11 2.44772 11.4477 2 12 2ZM5 21C5 20.4477 5.44772 20 6 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21Z"
                                        fill="white" />
                              </svg>
                              <div class="text-white font-['Onest_Medium'] text-2xs">Скачать</div>

                         </button>
                    </div>

                    <div class="mt-4 flex gap-3">
                         <div
                              class="flex items-center gap-2 bg-black-400 rounded-lg p-3 text-white font-['Onest_Medium'] text-xs leading-[1.05em]">
                              <div>Руководство «Веб-дизайн без ошибок»</div>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.5312 3.52859C3.79155 3.26824 4.21366 3.26824 4.47401 3.52859L8.00262 7.0572L11.5312 3.52859C11.7916 3.26824 12.2137 3.26824 12.474 3.52859C12.7344 3.78894 12.7344 4.21105 12.474 4.4714L8.94542 8.00001L12.474 11.5286C12.7343 11.7889 12.7343 12.211 12.474 12.4714C12.2136 12.7317 11.7915 12.7317 11.5312 12.4714L8.00262 8.94282L4.47401 12.4714C4.21366 12.7318 3.79155 12.7318 3.5312 12.4714C3.27085 12.2111 3.27085 11.789 3.5312 11.5286L7.05981 8.00001L3.5312 4.4714C3.27085 4.21105 3.27085 3.78894 3.5312 3.52859Z"
                                        fill="#FB6433" />
                              </svg>
                         </div>
                         <div
                              class="flex items-center gap-2 bg-black-400 rounded-lg p-3 text-white font-['Onest_Medium'] text-xs leading-[1.05em]">
                              <div>23.10.2022-06.08.2023</div>
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M3.5312 3.52859C3.79155 3.26824 4.21366 3.26824 4.47401 3.52859L8.00262 7.0572L11.5312 3.52859C11.7916 3.26824 12.2137 3.26824 12.474 3.52859C12.7344 3.78894 12.7344 4.21105 12.474 4.4714L8.94542 8.00001L12.474 11.5286C12.7343 11.7889 12.7343 12.211 12.474 12.4714C12.2136 12.7317 11.7915 12.7317 11.5312 12.4714L8.00262 8.94282L4.47401 12.4714C4.21366 12.7318 3.79155 12.7318 3.5312 12.4714C3.27085 12.2111 3.27085 11.789 3.5312 11.5286L7.05981 8.00001L3.5312 4.4714C3.27085 4.21105 3.27085 3.78894 3.5312 3.52859Z"
                                        fill="#FB6433" />
                              </svg>
                         </div>
                    </div>

                    <div class="mt-6 bg-white rounded-3xl pb-4">
                         <table class="table-fixed border-separate border-spacing-y-px">
                              <thead>
                                   <tr class="font-['Onest_Medium'] text-xs leading-[1.3em]">
                                        <th class="w-16 pr-4 py-6 pb-6 pl-6 border-b border-b-gray-120"></th>
                                        <th class="text-left w-[106px] pr-4 py-6 pb-6 border-b border-b-gray-120">Дата</th>
                                        <th class="text-left w-[246px] pr-4 py-6 pb-6 border-b border-b-gray-120">Имя</th>
                                        <th class="text-left w-[296px] pr-4 py-6 pb-6 border-b border-b-gray-120">Почта</th>
                                        <th class="text-left w-[328px] pr-4 py-6 pb-6 border-b border-b-gray-120">Курс</th>
                                        <th class="text-left w-[136px] pr-4 py-6 pb-6 border-b border-b-gray-120">Статус</th>
                                        <th class="text-right w-[104px] pb-6 py-6 pr-6 border-b border-b-gray-120">Сумма</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr v-for="index in 9" :key="index" for="bgBlue" :style="{ color, background }"
                                        @change="toggleColor"
                                        class="font-['Onest_Regular'] text-xs leading-[1.3em] align-text-top">
                                        <td class="pr-4 pl-6 py-4">
                                             <div>
                                                  <label>
                                                       <input type="checkbox" name="filter" id="bgBlue" class="hidden peer"
                                                            wfd-invisible="true">
                                                       <svg class="hidden peer-checked:block" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M4 7.2002V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V7.19691C20 6.07899 20 5.5192 19.7822 5.0918C19.5905 4.71547 19.2837 4.40973 18.9074 4.21799C18.4796 4 17.9203 4 16.8002 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002Z"
                                                                 fill="#FB6433" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                 d="M7.16168 3H16.8388C17.3659 2.99998 17.8205 2.99997 18.1949 3.03057C18.5902 3.06289 18.9831 3.13424 19.3614 3.32698C19.9248 3.61405 20.3851 4.07224 20.6732 4.63781C20.8659 5.016 20.9372 5.40906 20.9695 5.80396C21 6.17815 21 6.6323 21 7.15839V16.8421C21 17.3682 21 17.8221 20.9695 18.1962C20.9372 18.591 20.8659 18.9838 20.6732 19.3619C20.3854 19.9269 19.9254 20.3859 19.3614 20.6732C18.9833 20.8659 18.5905 20.9372 18.1957 20.9695C17.8217 21 17.3677 21 16.8416 21H7.15839C6.6323 21 6.17815 21 5.80397 20.9695C5.40906 20.9372 5.016 20.8659 4.63781 20.6732C4.07276 20.3853 3.61431 19.9258 3.32698 19.3619C3.13421 18.9835 3.06288 18.5904 3.03057 18.1951C2.99997 17.8206 2.99998 17.3659 3 16.8388V7.16168C2.99998 6.6345 2.99997 6.17965 3.03057 5.80498C3.06286 5.40962 3.13416 5.01624 3.32698 4.63781C3.6146 4.07332 4.07332 3.6146 4.63781 3.32698C5.01625 3.13416 5.40962 3.06286 5.80499 3.03057C6.17965 2.99997 6.63451 2.99998 7.16168 3ZM5.9678 5.02393C5.69595 5.04613 5.59517 5.08383 5.54579 5.10899C5.35763 5.20487 5.20487 5.35763 5.109 5.54579C5.08383 5.59517 5.04614 5.69595 5.02393 5.9678C5.00078 6.25126 5 6.62365 5 7.2002V16.8002C5 17.3768 5.00078 17.7489 5.02393 18.0322C5.04612 18.3037 5.08378 18.4044 5.109 18.4539C5.20516 18.6426 5.35819 18.7956 5.54579 18.8912C5.59501 18.9163 5.69554 18.9539 5.96686 18.9761C6.2498 18.9992 6.62146 19 7.19691 19H16.8031C17.3786 19 17.75 18.9992 18.0327 18.9761C18.3036 18.9539 18.4041 18.9164 18.4534 18.8912C18.6421 18.7951 18.7956 18.6415 18.8912 18.4539C18.9164 18.4046 18.954 18.3041 18.9761 18.0332C18.9992 17.7505 19 17.379 19 16.8036V7.19691C19 6.62146 18.9992 6.2498 18.9761 5.96686C18.9539 5.69554 18.9163 5.595 18.8912 5.54579C18.7959 5.35871 18.6427 5.20542 18.4534 5.10899C18.4039 5.08374 18.3032 5.0461 18.0319 5.02392C17.7488 5.00078 17.3768 5 16.8002 5H7.2002C6.62365 5 6.25126 5.00078 5.9678 5.02393Z"
                                                                 fill="#FB6433" />
                                                            <path d="M8 12L11 15L16 9" stroke="white" stroke-width="2"
                                                                 stroke-linecap="round" stroke-linejoin="round" />
                                                       </svg>
                                                       <svg class="block peer-checked:hidden" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                 d="M7.16168 3H16.8388C17.3659 2.99998 17.8205 2.99997 18.1949 3.03058C18.5902 3.06289 18.9831 3.13424 19.3614 3.32698C19.9248 3.61405 20.3851 4.07224 20.6732 4.63781C20.8659 5.016 20.9372 5.40906 20.9695 5.80397C21 6.17815 21 6.6323 21 7.15839V16.8421C21 17.3682 21 17.8222 20.9695 18.1962C20.9372 18.591 20.8659 18.9838 20.6732 19.3619C20.3854 19.9269 19.9254 20.3859 19.3614 20.6732C18.9833 20.8659 18.5905 20.9372 18.1957 20.9695C17.8217 21 17.3677 21 16.8416 21H7.15839C6.6323 21 6.17815 21 5.80397 20.9695C5.40906 20.9372 5.016 20.8659 4.63781 20.6732C4.07276 20.3853 3.61431 19.9258 3.32698 19.3619C3.13421 18.9835 3.06288 18.5904 3.03057 18.1951C2.99997 17.8206 2.99998 17.3659 3 16.8388V7.16168C2.99998 6.63451 2.99997 6.17965 3.03057 5.80499C3.06286 5.40962 3.13416 5.01625 3.32698 4.63781C3.6146 4.07332 4.07332 3.6146 4.63781 3.32698C5.01625 3.13416 5.40962 3.06286 5.80499 3.03057C6.17965 2.99997 6.63451 2.99998 7.16168 3ZM5.9678 5.02393C5.69595 5.04614 5.59517 5.08383 5.54579 5.109C5.35763 5.20487 5.20487 5.35763 5.109 5.54579C5.08383 5.59517 5.04614 5.69595 5.02393 5.9678C5.00078 6.25126 5 6.62365 5 7.2002V16.8002C5 17.3768 5.00078 17.7489 5.02393 18.0322C5.04612 18.3037 5.08378 18.4044 5.109 18.4539C5.20516 18.6426 5.35819 18.7956 5.54579 18.8912C5.59501 18.9163 5.69554 18.9539 5.96686 18.9761C6.2498 18.9992 6.62146 19 7.19691 19H16.8031C17.3786 19 17.75 18.9992 18.0327 18.9761C18.3036 18.954 18.4041 18.9164 18.4534 18.8912C18.6421 18.7951 18.7956 18.6415 18.8912 18.4539C18.9164 18.4046 18.954 18.3041 18.9761 18.0332C18.9992 17.7505 19 17.379 19 16.8036V7.19691C19 6.62146 18.9992 6.2498 18.9761 5.96686C18.9539 5.69554 18.9163 5.59501 18.8912 5.54579C18.7959 5.35871 18.6427 5.20542 18.4534 5.109C18.4039 5.08375 18.3032 5.04611 18.0319 5.02393C17.7488 5.00078 17.3768 5 16.8002 5H7.2002C6.62365 5 6.25126 5.00078 5.9678 5.02393Z"
                                                                 fill="#A3A7AF" />
                                                       </svg>
                                                  </label>
                                             </div>
                                        </td>
                                        <td class="text-left pr-4 align-top py-4">23.10.2022<br>19:02</td>
                                        <td class="text-left pr-4 align-top py-4">Светлана Пономарёва</td>
                                        <td class="text-left pr-4 align-top py-4">nathan.roberts@example.com</td>
                                        <td class="text-left pr-4 align-top py-4">Руководство «Как разобраться в сетках»</td>
                                        <td class="text-left pr-4 align-top py-4"><span
                                                  class="text-green-700">Оплачено</span>
                                             521324******3455<br>1029</td>
                                        <td class="text-right pr-6 align-top py-4">300 000 ₽</td>
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

<script>
export default {
     data() {
          return {
               color: 'black',
               background: 'white'
          }
     },
     methods: {
          toggleColor() {
               this.color = this.color === 'white' ? 'black' : 'white'
               this.background = this.background === 'blue' ? 'white' : 'blue'
          },
     }
}
</script>

<style>
.black {
     color: #171717;
}

.blue {
     background-color: #0038FF;
}
</style>







