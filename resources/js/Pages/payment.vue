<template>
     <Head title="Оплаты студента" />

     <Main>
          <div class="bg-gray-130 pt-10 md:pt-14 lg:pt-8 pb-18 md:pb-24 lg:pb-[7.5rem]">
               <div class="container mx-auto px-4">
                    <div class="bg-white rounded-3xl py-10 px-8 text-black-400">
                         <div class="font-['Onest_Medium'] text-[2rem] md:text-[2.5rem] leading-[1.05em]">Оплаты</div>
                         <table class="mt-8 border-separate border-spacing-x-6">
                              <thead>
                                   <tr class="font-['Onest_Medium']">
                                        <th class="text-left w-[6.25rem]">Дата</th>
                                        <th class="text-left w-[300px]">Название</th>
                                        <th class="text-left w-[6.25rem]">Статус</th>
                                        <th class="text-right w-[6.25rem]">Сумма</th>
                                        <th class="text-right w-[6.25rem]">Остаток</th>
                                        <th class="text-right w-[6.25rem]">Действие</th>
                                   </tr>
                              </thead> 
                              <tbody>
                                   <tr>
                                        <td class="text-left">29.09.23</td>
                                        <td class="text-left">«Веб-дизайн на практике» для новичков. Тариф без обратной связи</td>
                                        <td class="text-left">Оплачено 50%</td>
                                        <td class="text-right">1 235 000 ₽</td>
                                        <td class="text-right">35 000 ₽</td>
                                        <td class="text-right">Оплатить</td>
                                   </tr>
                              </tbody>
                         </table>
                    </div>
               </div>

          </div>
     </Main>
</template>

<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';



</script>