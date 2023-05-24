<template>
     <Head title="Оплаты студента" />

     <Main>
          <div class="bg-gray-130 pt-10 md:pt-14 lg:pt-8 pb-18 md:pb-24 lg:pb-[7.5rem]">
               <div class="container mx-auto px-4">
                    <div class="bg-white rounded-3xl py-6 md:py-10 px-4 md:px-8 text-black-400 w-fit">
                         <div class="font-['Onest_Medium'] text-[1.5rem] md:text-[2.5rem] leading-[1.05em]">Оплаты</div>
                         <table class="hidden sm:block mt-4 table-fixed border-separate border-spacing-y-4">
                              <thead>
                                   <tr class="font-['Onest_Medium']">
                                        <th class="text-left w-20 md:w-[124px] pr-4 lg:pr-6 pb-2">Дата</th>
                                        <th class="text-left w-[200px] md:w-[324px] pr-4 lg:pr-6 pb-2">Название</th>
                                        <th class="text-left w-24 md:w-[124px] pr-4 lg:pr-6 pb-2">Статус</th>
                                        <th class="text-right w-[104px] md:w-[204px] pr-4 lg:pr-6 lg:pl-20 pb-2">Сумма</th>
                                        <th class="text-right w-24 md:w-[124px] pr-4 lg:pr-6 pb-2">Остаток</th>
                                        <th class="text-right w-20 md:w-[6.25rem] pb-2">Действие</th>
                                   </tr>
                              </thead>
                              <tbody>
                                   <tr v-for="index in 10" :key="index"
                                        class="font-['Onest_Regular'] text-xs leading-[1.3em] align-text-top">
                                        <td class="text-left pr-4 lg:pr-6">29.09.23</td>
                                        <td class="text-left pr-4 lg:pr-6">«Веб-дизайн на практике» для новичков.<br
                                                  class="hidden lg:block"> Тариф без обратной связи</td>
                                        <td class="text-left pr-4 lg:pr-6">Оплачено 50%</td>
                                        <td class="text-right pr-4 lg:pr-6 lg:pl-20">1 235 000 ₽</td>
                                        <td class="text-right pr-4 lg:pr-6">35 000 ₽</td>
                                        <td class="text-right"><span class="underline">Оплатить</span></td>
                                   </tr>
                              </tbody>
                         </table>
                         <div v-for="index in 10" :key="index"
                              class="sm:hidden border-b border-b-gray-120 text-black-400 flex flex-col gap-3 py-6 last:pb-0 last:border-b-0">
                              <div class="text-xs">
                                   <div class="font-['Onest_Regular'] leading-[1.3em]">29.09.23</div>
                                   <div class="mt-1 font-['Onest_Medium'] leading-[1.05em]">«Веб-дизайн на практике»
                                        для новичков. Тариф без обратной связи</div>
                              </div>
                              <div>
                                   <div class="font-['Onest_Medium'] text-2xs leading-[1.05em]">Статус</div>
                                   <div class="mt-0.5 font-['Onest_Regular'] text-xs leading-[1.3em]">Оплачено 50%</div>
                              </div>
                              <div class="flex gap-4">
                                   <div class="w-1/2">
                                        <div class="font-['Onest_Medium'] text-2xs leading-[1.05em]">Сумма</div>
                                        <div class="mt-0.5 font-['Onest_Regular'] text-xs leading-[1.3em]">1 235 000 ₽</div>
                                   </div>
                                   <div class="w-1/2">
                                        <div class="font-['Onest_Medium'] text-2xs leading-[1.05em]">Оплачено</div>
                                        <div class="mt-0.5 font-['Onest_Regular'] text-xs leading-[1.3em]">35 000 ₽</div>
                                   </div>
                              </div>
                              <div class="font-['Onest_Regular'] text-xs leading-[1.3em] underline w-fit">Оплатить</div>
                         </div>
                    </div>
               </div>

          </div>
     </Main>
</template>

<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';



</script>