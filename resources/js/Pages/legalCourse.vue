<template>
    <Head title="Юр. курс" />

    <Main>
        <div class="bg-gray-130 pb-18 md:pb-[7.5rem]">
            <div style="background-image: url(/img/bg_legal_WebP.WebP)"
                class="pt-4 md:pt-6 pb-12 sm:pb-14 rounded-b-4xl bg-center bg-cover">
                <div class="container mx-auto px-4">
                    <div class="h-[57px]"></div> <!--Место для шапки, потом удалить-->
                    <div class="mt-6 sm:mt-12 lg:mt-[11.75rem] grid grid-cols-6 gap-4 text-white">
                        <div class="col-span-12 lg:col-span-2">
                            <div><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12.9149 14.1928L0 1.27787L1.27787 0L14.1928 12.9149V2.79677H16V16H2.79677V14.1928H12.9149Z"
                                        fill="white" />
                                </svg>
                            </div>
                            <div class="mt-3 sm:mt-4 font-['Onest_Medium'] text-xs sm:text-base leading-[1.05em]">Онлайн
                                курс по<br class="hidden md:block"> юридической грамотности<br class="hidden md:block"> для
                                фрилансеров</div>
                        </div>
                        <div
                            class="col-span-12 lg:col-span-4 pr-0 sm:pr-12 lg:pr-0 pt-12 sm:pt-36 lg:pt-0 flex flex-col gap-4 sm:gap-6">
                            <div class="font-['Onest_Regular'] text-41xl sm:text-554xl lg:text-72xl tracking-[-.02em]">
                                Как вести дизайн-проекты и не облажаться в юридических вопросах</div>
                            <div class="font-['Onest_Regular'] sm:text-xl leading-[1.3em]">Научитесь грамотно вести
                                документацию, вовремя<br class="hidden md:block">отправлять акты и счета, вести проекты и
                                общаться<br class="hidden md:block"> с клиентами</div>
                            <button
                                class="mt-2 sm:mt-0 px-14 py-4 bg-black rounded-lg w-fit font-['Onest_Medium'] text-xs sm:text-base leading-[1.3em]">Оплатить
                                обучение</button>
                        </div>
                    </div>
                </div>
            </div>

            <section class="mt-[4.5rem] md:mt-[7.5rem] container mx-auto px-4">
                <div class="grid grid-cols-6 gap-3 md:gap-4">
                    <div class="lg:col-span-2 hidden lg:block"></div>
                    <div
                        class="col-span-6 lg:col-span-4 font-['Onest_Regular'] text-black-400 text-31xl md:text-53xl pb-5 md:pb-6">
                        На курсе вы научитесь</div>
                    <div class="col-span-3 lg:col-span-2 order-4 lg:order-1 hidden md:block"></div>
                    <div
                        class="col-span-6 md:col-span-3 lg:col-span-2 order-1 lg:order-2 border border-gray-140 rounded-2xl md:rounded-3.5xl p-4 md:p-8 flex flex-col justify-between h-[17.5rem] md:h-[25rem] lg:h-[27.5rem] font-['Onest_Regular'] text-black-400">
                        <div class="text-2xs">01</div>
                        <div class="flex flex-col gap-3 md:gap-4">
                            <div class="text-21xl md:text-31xl">Работать с документацией</div>
                            <div class="text-xs md:text-base leading-[1.3em]">Начнёте разбираться в правовых нормах,
                                научитесь работать по договору, с актами и счетами</div>
                        </div>
                    </div>
                    <div
                        class="col-span-6 md:col-span-3 lg:col-span-2 order-2 lg:order-3 border border-gray-140 rounded-2xl md:rounded-3.5xl p-4 md:p-8 flex flex-col justify-between h-[17.5rem] md:h-[25rem] lg:h-[27.5rem] font-['Onest_Regular'] text-black-400">
                        <div class="text-2xs">02</div>
                        <div class="flex flex-col gap-3 md:gap-4">
                            <div class="text-21xl md:text-31xl">Правильно общаться с клиентом</div>
                            <div class="text-xs md:text-base leading-[1.3em]">Узнаете о том, какие типы клиентов бывают и
                                как к каждому из них найти уникальный подход</div>
                        </div>
                    </div>
                    <div
                        class="col-span-6 md:col-span-3 lg:col-span-2 order-3 lg:order-4 border border-gray-140 rounded-2xl md:rounded-3.5xl p-4 md:p-8 flex flex-col justify-between h-[17.5rem] md:h-[25rem] lg:h-[27.5rem] font-['Onest_Regular'] text-black-400">
                        <div class="text-2xs">03</div>
                        <div class="flex flex-col gap-3 md:gap-4">
                            <div class="text-21xl md:text-31xl">Грамотно оценивать свою работу</div>
                            <div class="text-xs md:text-base leading-[1.3em]">Разберетесь как правильно оценивать свою
                                ставку/проект/спринт, повысите стоимость своих услуг</div>
                        </div>
                    </div>
                    <div
                        class="col-span-6 md:col-span-3 lg:col-span-2 order-7 lg:order-5 border border-gray-140 rounded-2xl md:rounded-3.5xl p-4 md:p-8 flex flex-col justify-between h-[17.5rem] md:h-[25rem] lg:h-[27.5rem] font-['Onest_Regular'] text-black-400">
                        <div class="text-2xs">04</div>
                        <div class="flex flex-col gap-3 md:gap-4">
                            <div class="text-21xl md:text-31xl">Выходить из большинства спорных ситуаций</div>
                            <div class="text-xs md:text-base leading-[1.3em]">Будете знать что делать если клиент
                                “сливается”, отказывается выходить на связь и оплачивать проект</div>
                        </div>
                    </div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 order-6 lg:order-6">
                        <button
                            class="rounded-2xl md:rounded-3.5xl bg-red-600 flex flex-col items-center justify-center h-[17.5rem] md:h-[25rem] lg:h-[27.5rem] w-full">
                            <div class="h-10 md:h-14 w-10 md:w-14"><svg viewBox="0 0 56 56" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="28" cy="28" r="27" stroke="white" stroke-width="2" />
                                    <g clip-path="url(#clip0_301_181)">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M26.9537 26.9831L26.9537 12.2465H29.0463L29.0463 26.9831H43.7829L43.7829 29.0756L29.0463 29.0756L29.0463 43.8122H26.9537L26.9537 29.0756L12.2171 29.0756L12.2171 26.9831H26.9537Z"
                                            fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_301_181">
                                            <rect width="22.4" height="22.4" fill="white"
                                                transform="translate(16.8 16.8)" />
                                        </clipPath>
                                    </defs>
                                </svg></div>
                            <div class="mt-4 md:mt-6 text-white font-['Onest_Regular'] text-21xl md:text-31xl">Хочу
                                научиться</div>
                        </button>
                    </div>
                    <div class="col-span-3 lg:col-span-2 order-5 lg:order-7 hidden md:block"></div>
                    <div
                        class="col-span-6 md:col-span-3 lg:col-span-2 order-8 lg:order-8 border border-gray-140 rounded-2xl md:rounded-3.5xl p-4 md:p-8 flex flex-col justify-between h-[17.5rem] md:h-[25rem] lg:h-[27.5rem] font-['Onest_Regular'] text-black-400">
                        <div class="text-21xl md:text-2xs">05</div>
                        <div class="flex flex-col gap-3 md:gap-4">
                            <div class="text-21xl md:text-31xl">Работать с возражениями себе в плюс</div>
                            <div class="text-xs md:text-base leading-[1.3em]">Клиент не всегда прав, поэтому важно
                                разобраться в коммуникации с заказчиками и менеджерами</div>
                        </div>
                    </div>
                    <div
                        class="col-span-6 md:col-span-3 lg:col-span-2 order-9 lg:order-9 border border-gray-140 rounded-2xl md:rounded-3.5xl p-4 md:p-8 flex flex-col justify-between h-[17.5rem] md:h-[25rem] lg:h-[27.5rem] font-['Onest_Regular'] text-black-400">
                        <div class="text-2xs">06</div>
                        <div class="flex flex-col gap-3 md:gap-4">
                            <div class="text-21xl md:text-31xl">Отстаивать свои права до судебных разбирательств</div>
                            <div class="text-xs md:text-base leading-[1.3em]">Любой спор даже с самым мерзким клиентом лучше
                                всего решать мирно и до суда. Поделимся своим судебным опытом</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="mt-[4.5rem] md:mt-[7.5rem] container mx-auto px-4">
                <div class="font-['Onest_Regular'] text-black-400 text-31xl md:text-53xl">Программа</div>
                <div
                    class="mt-10 grid grid-cols-6 gap-3 md:gap-4 pt-4 md:pt-6 pb-8 md:pb-14 bg-white rounded-2xl px-4 md:px-8 md:rounded-3xl font-['Onest_Regular']">
                    <div class="col-span-6 lg:col-span-1 text-red-600 text-2xs tracking-[-.02em]">01 модуль</div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 lg:pl-1.5 text-black-400 text-21xl md:text-31xl">
                        Начальное общение, брифование</div>
                    <div
                        class="col-span-6 md:col-span-3 mt-9 md:mt-0 lg:pl-6 text-black-400 text-xs md:text-xss leading-[1.3em]">
                        <ul>
                            <li>Тон-войс для клиентов</li>
                            <li class="mt-2.5">Список стоп-слов</li>
                            <li class="mt-2.5">Первоначальный опрос по ТЗ</li>
                            <li class="mt-2.5">Проработка первых возражений</li>
                            <li class="mt-2.5">Брифование</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="mt-3 grid grid-cols-6 gap-3 md:gap-4 pt-4 md:pt-6 pb-8 md:pb-14 bg-white rounded-2xl px-4 md:px-8 md:rounded-3xl font-['Onest_Regular']">
                    <div class="col-span-6 lg:col-span-1 text-red-600 text-2xs tracking-[-.02em]">02 модуль</div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 lg:pl-1.5 text-black-400 text-21xl md:text-31xl">
                        Стоимость</div>
                    <div
                        class="col-span-6 md:col-span-3 mt-9 md:mt-0 lg:pl-6 text-black-400 text-xs md:text-xss leading-[1.3em]">
                        <ul>
                            <li>Как не продешевить</li>
                            <li class="mt-2.5">Правильная оценка времени и сил на проект</li>
                            <li class="mt-2.5">Проектный договор</li>
                            <li class="mt-2.5">Удерживание внимания клиента, чтобы он не слился</li>
                            <li class="mt-2.5">Этичное донесение информации</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="mt-3 grid grid-cols-6 gap-3 md:gap-4 pt-4 md:pt-6 pb-8 md:pb-14 bg-white rounded-2xl px-4 md:px-8 md:rounded-3xl font-['Onest_Regular']">
                    <div class="col-span-6 lg:col-span-1 text-red-600 text-2xs tracking-[-.02em]">03 модуль</div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 lg:pl-1.5 text-black-400 text-21xl md:text-31xl">
                        Работа с возражениями</div>
                    <div
                        class="col-span-6 md:col-span-3 mt-9 md:mt-0 lg:pl-6 text-black-400 text-xs md:text-xss leading-[1.3em]">
                        <ul>
                            <li>Клиенту дорого</li>
                            <li class="mt-2.5">Как правильно «снизить» цену и получить больше</li>
                            <li class="mt-2.5">Клиент не хочет платить и против предоплаты</li>
                            <li class="mt-2.5">Секрет работы по предоплате, разные варианты</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="mt-3 grid grid-cols-6 gap-3 md:gap-4 pt-4 md:pt-6 pb-8 md:pb-14 bg-white rounded-2xl px-4 md:px-8 md:rounded-3xl font-['Onest_Regular']">
                    <div class="col-span-6 lg:col-span-1 text-red-600 text-2xs tracking-[-.02em]">04 модуль</div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 lg:pl-1.5 text-black-400 text-21xl md:text-31xl">
                        Дурные клиенты</div>
                    <div
                        class="col-span-6 md:col-span-3 mt-9 md:mt-0 lg:pl-6 text-black-400 text-xs md:text-xss leading-[1.3em]">
                        <ul>
                            <li>Типы клиентов</li>
                            <li class="mt-2.5">Вычисление первых звоночков</li>
                            <li class="mt-2.5">С какими клиентами лучше не работать</li>
                            <li class="mt-2.5">Донесение своей ценности</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="mt-3 grid grid-cols-6 gap-3 md:gap-4 pt-4 md:pt-6 pb-8 md:pb-14 bg-white rounded-2xl px-4 md:px-8 md:rounded-3xl font-['Onest_Regular']">
                    <div class="col-span-6 lg:col-span-1 text-red-600 text-2xs tracking-[-.02em]">05 модуль</div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 lg:pl-1.5 text-black-400 text-21xl md:text-31xl">
                        Договор</div>
                    <div
                        class="col-span-6 md:col-span-3 mt-9 md:mt-0 lg:pl-6 text-black-400 text-xs md:text-xss leading-[1.3em]">
                        <ul>
                            <li>Основы работы по договору</li>
                            <li class="mt-2.5">Как заполнять договор</li>
                            <li class="mt-2.5">Зачем он нужен</li>
                            <li class="mt-2.5">Что делать если начали работу без договора</li>
                            <li class="mt-2.5">Правила заполнения документации (договор, ТЗ)</li>
                            <li class="mt-2.5">Подводные камни в договорах</li>
                            <li class="mt-2.5">Правила обмена документами</li>
                        </ul>
                    </div>
                </div>
                <div
                    class="mt-3 grid grid-cols-6 gap-3 md:gap-4 pt-4 md:pt-6 pb-8 md:pb-14 bg-white rounded-2xl px-4 md:px-8 md:rounded-3xl font-['Onest_Regular']">
                    <div class="col-span-6 lg:col-span-1 text-red-600 text-2xs tracking-[-.02em]">06 модуль</div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 lg:pl-1.5 text-black-400 text-21xl md:text-31xl">
                        Согласование документации и начало работы</div>
                    <div
                        class="col-span-6 md:col-span-3 mt-9 md:mt-0 lg:pl-6 text-black-400 text-xs md:text-xss leading-[1.3em]">
                        <ul>
                            <li>Правила успешного согласования документов</li>
                            <li class="mt-2.5">Донесение важных пунктов про сроки/цену/проект/тз/правки</li>
                            <li class="mt-2.5">Созвоны с клиентом и их проблематика «а почему вы это не сделали? я вот вам
                                на созвоне говорил про это! ну и что что в договоре нет! делайте!»</li>
                        </ul>
                    </div>
                </div>
                <div style="background-image: url(/img/bg_legal-1_WebP.WebP)"
                    class="mt-3 grid grid-cols-6 gap-3 md:gap-4 pt-4 md:pt-8 pb-8 md:pb-14 rounded-2xl px-4 md:px-8 md:rounded-3xl font-['Onest_Regular'] text-white bg-center bg-cover">
                    <div class="col-span-6 lg:col-span-1 text-2xs tracking-[-.02em]">Готовые материалы</div>
                    <div class="col-span-6 md:col-span-3 lg:col-span-2 lg:pl-1.5 text-21xl md:text-31xl">Полный пакет
                        документов</div>
                    <div
                        class="col-span-6 md:col-span-3 mt-9 md:mt-0 lg:pl-6 pr-0 lg:pr-36 text-xs md:text-xss leading-[1.3em]">
                        <span>Вы получите все необходимые для грамотной работы документы:</span>
                        <ul class="list-decimal pl-5">
                            <li class="mt-2.5">Договор</li>
                            <li class="mt-2.5">Акт-сверки</li>
                            <li class="mt-2.5">Счёт</li>
                            <li class="mt-2.5">Техническое задание</li>
                            <li class="mt-2.5">Бриф</li>
                        </ul>
                        <button
                            class="mt-4 sm:mt-6 px-14 py-4 bg-black rounded-lg w-fit font-['Onest_Medium'] text-xs sm:text-base leading-[1.3em]">Оплатить
                            обучение</button>
                    </div>
                </div>
            </section>

            <section class="mt-[4.5rem] md:mt-[7.5rem] container mx-auto px-4">
                <div class="grid grid-cols-6 gap-4">
                    <div class="col-span-2 hidden lg:block"></div>
                    <div class="col-span-6 lg:col-span-4 font-['Onest_Regular'] text-black-400 text-31xl md:text-53xl">Все
                        обучение проходит <br> на собственной платформе</div>
                </div>
                <div
                    class="mt-8 md:mt-10 grid grid-cols-6 gap-4 bg-white rounded-2xl md:rounded-3.5xl pt-4 md:pt-8 px-4 md:px-8 lg:px-0">
                    <div class="col-span-2 hidden lg:block"></div>
                    <div class="col-span-6 lg:col-span-4 font-['Onest_Regular'] text-black-400 text-21xl md:text-31xl">
                        Удобный личный кабинет,<br class="hidden md:block"> внутренние сервера, приятный<br
                            class="hidden md:block"> дизайн и геймификация</div>
                    <div class="col-span-6 lg:col-span-2 mt-4 flex flex-col gap-4 lg:pl-8">
                        <div class="pt-8 md:pt-10 lg:pt-8"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M12.9149 14.1928L0 1.27787L1.27787 0L14.1928 12.9149V2.79677H16V16H2.79677V14.1928H12.9149Z"
                                    fill="#ED153E" />
                            </svg></div>
                        <div class="font-['Onest_Regular'] text-black-400 text-xs leading-[1.3em] md:pr-52 lg:pr-36">
                            <p>На некоторых курсах и интенсивах предусмотрены ачивки.</p>
                            <p class="mt-1.5">Соревнуйтесь со студентами, занимайте первые места и получайте постоянные
                                скидки.</p>
                        </div>
                    </div>
                    <div class="col-span-6 lg:col-span-4 md:mt-6 lg:mt-4">
                        <img src="img/example_WebP.WebP" class="h-64 md:h-[406px] lg:h-[392px] w-full lg:w-[632px] rounded-2xl">
                    </div>
                </div>
            </section>

            <section class="mt-[4.5rem] md:mt-[7.5rem] container mx-auto px-4">
                <!--Точно как в макете не получилось (фото, blur)-->
                <div style="background-image: url(/img/bg_legal-2_WebP.WebP)"
                    class="h-[600px] md:h-[764px] lg:h-[720px] pt-4 sm:px-3 sm:pb-1 md:p-8 rounded-3xl md:rounded-4xl lg:rounded-4.5xl bg-bottom lg:bg-left xl:bg-center bg-cover font-['Onest_Regular'] text-white flex flex-col justify-between">
                    <div class="text-31xl md:text-53xl pl-4 md:pl-0">Спикер</div>
                    <!--===========================Для экрана больше md===========================================-->
                    <div style="background-image: url(/img/bg_legal-svg.svg)"
                        class="hidden md:block w-[416px] h-[357px] rounded-b-3xl bg-center bg-cover p-1">
                        <div class="pt-3 pl-5 text-xs leading-[1.3em]">Профайл</div>
                        <div class="backdrop-blur-2xl px-5 pb-5 rounded-3xl">
                            <div class="pt-[26px] text-31xl">Катя Макеева</div>
                            <div class="mt-4 leading-[1.3em]">
                                <p>Lead дизанейр в lectr.ru Развиваю EdTech стартап Practicult.</p>
                                <p class="mt-2.5">Сотрудничаю с международными компаниями: Storytel, UniCreditBank,
                                    Topstretching.</p>
                            </div>
                            <div class="mt-12 flex flex-col gap-2.5 leading-[1.3em]">
                                <div class="flex justify-between">
                                    <div>В дизайне</div>
                                    <div>8 лет</div>
                                </div>
                                <div class="flex justify-between">
                                    <div>На фрилансе</div>
                                    <div>с 2012 года</div>
                                </div>
                                <div class="flex justify-between">
                                    <div>Награды</div>
                                    <div>2 на Behance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--==================Для экрана меньше md================================-->
                    <div style="background-image: url(/img/bg_legal-svg2.svg)"
                        class="block md:hidden w-[288px] h-[297px] rounded-b-3xl bg-center bg-cover p-0.5">
                        <div class="pt-2 pl-4 text-2xs leading-[1.3em]">Профайл</div>
                        <div class="backdrop-blur-2xl px-4 pb-5 rounded-3xl">
                            <div class="pt-6 text-21xl">Катя Макеева</div>
                            <div class="mt-2 leading-[1.3em] text-xs">
                                <p>Lead дизанейр в lectr.ru Развиваю EdTech стартап Practicult.</p>
                                <p class="mt-1.5">Сотрудничаю с международными компаниями: Storytel, UniCreditBank,
                                    Topstretching.</p>
                            </div>
                            <div class="mt-6 flex flex-col gap-2 leading-[1.3em] text-xs">
                                <div class="flex justify-between">
                                <div>В дизайне</div>
                                <div>8 лет</div>
                            </div>
                            <div class="flex justify-between">
                                <div>На фрилансе</div>
                                <div>с 2012 года</div>
                            </div>
                            <div class="flex justify-between">
                                <div>Награды</div>
                                <div>2 на Behance</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--==================finish====================================-->
            </div>
        </section>

        <section class="mt-[4.5rem] md:mt-[7.5rem] container mx-auto px-4">
            <div class="grid grid-cols-6 gap-4">
                <div style="background-image: url(/img/bg_legal-3_WebP.WebP)"
                    class="col-span-6 lg:col-span-3 p-4 md:p-8 text-white font-['Onest_Regular'] rounded-2xl md:rounded-3.5xl bg-center bg-cover">
                    <div class="flex gap-2 md:gap-3 flex-col md:flex-row">
                        <div
                            class="px-3 md:px-4 py-2 md:py-3 text-2xs md:text-xs border border-white rounded-weird w-fit">
                            Самостоятельное обучение</div>
                        <div
                            class="px-3 md:px-4 py-2 md:py-3 text-2xs md:text-xs border border-white rounded-weird w-fit">
                            Топ продаж</div>
                    </div>
                    <div class="mt-12 md:mt-[7.5rem] text-21xl md:text-555xl tracking-[-.02em]">Юридическая грамотность
                        для фрилансеров</div>
                    <ul class="mt-4 md:mt-6 leading-[1.3em] text-xs md:text-base">
                        <li>Все модули</li>
                        <li class="mt-1 md:mt-1.5">Доступ навсегда</li>
                        <li class="mt-1 md:mt-1.5">Полный пакет документов</li>
                        <li class="mt-1 md:mt-1.5">Чек-лист «Согласование договора»</li>
                        <li class="mt-1 md:mt-1.5">Чек-лист «Обмен документами»</li>
                    </ul>
                    <div class="mt-6 md:mt-10 text-41xl md:text-53xl">12 900 ₽</div>
                </div>
                <div
                    class="col-span-6 lg:col-span-3 h-fit md:h-[614px] lg:h-full bg-white rounded-2xl md:rounded-3.5xl font-['Onest_Regular'] flex items-center justify-center py-6 px-4">
                    <div class="flex flex-col gap-2 md:gap-3">
                        <div class="text-black-400 text-21xl md:text-31xl text-center">Заполните данные<br> для оплаты
                        </div>
                        <input type="text" placeholder="Имя"
                            class="mt-2 md:mt-3 px-4 py-3 sm:py-3.5 border border-gray-120 rounded-lg placeholder:font-['Onest_Regular'] placeholder:text-gray-110 placeholder:text-xs placeholder:sm:text-base  focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0">
                        <input type="email" placeholder="Почта"
                            class="px-4 py-3 sm:py-3.5 border border-gray-120 rounded-lg placeholder:font-['Onest_Regular'] placeholder:text-gray-110 placeholder:text-xs placeholder:sm:text-base focus:outline-none focus-visible:ring-gray-120 focus-visible:ring-0">
                        <button
                            class="mt-2 md:mt-3 py-4 sm:py-3.5 bg-black rounded-lg w-full font-['Onest_Medium'] text-white text-xs sm:text-base leading-[1.3em]">Купить
                            за 12 900 ₽</button>
                        <button
                            class="px-4 sm:px-14 py-2 sm:py-2.5 text-black border border-gray-120 rounded-lg w-full font-['Onest_Medium'] text-xs sm:text-base leading-[1.3em] flex gap-2.5 items-center">
                            <div><svg width="36" height="32" viewBox="0 0 36 32" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M14.2595 24.6914C14.2595 24.6914 14.687 24.5129 14.7259 24.3839L14.6676 24.2392C14.6278 24.144 14.6326 24.0408 14.7113 23.9853L15.1719 23.659L15.9425 23.8107C15.9425 23.8107 15.8026 23.6322 15.8162 23.3942L15.0815 23.2356L14.3877 23.667C14.2667 23.7586 14.1792 23.8889 14.1392 24.0372C14.0992 24.1855 14.109 24.3432 14.1671 24.4851L14.2595 24.6924L14.2595 24.6914ZM19.7078 26.7461C19.8449 26.7402 19.9984 26.7382 20.1646 26.7382C20.1646 26.7382 20.5611 25.5531 20.5834 25.5155C20.2889 25.3753 20.0016 25.22 19.7224 25.0503C19.84 25.2308 20.1257 25.4361 20.0693 25.5948L19.7078 26.7461ZM19.944 12.9208C19.3551 13.5178 18.7905 13.7389 18.2862 13.7905C18.1938 13.8007 18.1011 13.806 18.0082 13.8064H17.9956C17.8101 13.8064 17.6251 13.7864 17.4436 13.7469C17.4106 13.8808 17.3688 14.1614 17.4883 14.4272C17.5952 14.6681 17.8119 14.8476 18.1287 14.9676L18.2356 15.0103L18.2366 15.1273C18.2366 15.162 18.2619 15.9216 19.0723 16.1329C19.2045 15.994 19.325 15.8681 19.4124 15.762C19.2472 15.3643 19.3347 14.9577 19.5747 14.7584C19.565 14.801 19.4581 15.7977 20.2404 16.1686L20.3696 16.231L20.3307 16.3709C20.3181 16.4135 20.0577 17.3784 21.0051 17.7374L21.1723 17.8029L21.0974 17.9685C21.0809 18.0052 20.7097 18.8808 21.5843 19.3786H23.4802V17.8386C22.8058 17.7543 22.521 17.1999 22.4472 16.8072C22.1333 16.7527 21.8913 16.6148 21.7252 16.3897C21.3268 15.8542 21.6688 15.3633 21.6737 15.3365C21.6727 15.3405 21.6737 15.8621 21.9885 16.1854C22.145 16.3401 22.3296 16.4611 22.6105 16.4879L22.7475 16.5008L22.7591 16.6446C22.7621 16.6753 22.8369 17.3824 23.4802 17.4934L23.4792 14.3498C23.4792 13.8619 23.6182 13.372 23.7853 12.9198H19.9438L19.944 12.9208ZM14.8395 14.3617L14.7889 16.3629L15.0124 16.3986L15.5566 14.4777L15.2797 13.8867L14.8405 14.3617H14.8395ZM16.0192 21.7736C16.0042 21.7731 15.9895 21.7695 15.976 21.763C15.9625 21.7566 15.9504 21.7473 15.9404 21.7359C15.9305 21.7245 15.923 21.7111 15.9183 21.6966C15.9136 21.6821 15.9119 21.6668 15.9133 21.6516C15.9141 21.6366 15.9179 21.6219 15.9244 21.6083C15.9309 21.5948 15.94 21.5828 15.9511 21.5729C15.9623 21.563 15.9752 21.5555 15.9892 21.5508C16.0033 21.5461 16.0181 21.5443 16.0328 21.5455C16.0969 21.5485 16.1416 21.605 16.1397 21.6665C16.1374 21.6969 16.1235 21.7252 16.101 21.7453C16.0784 21.7653 16.049 21.7755 16.0192 21.7736ZM20.8408 23.5457C20.8573 23.5457 20.8767 23.5477 20.8942 23.5527C21.2344 23.6518 21.3189 24.8994 21.9126 25.0104C21.9709 25.0233 22.0254 25.0263 22.072 25.0263C22.244 25.0263 22.346 24.9519 22.4568 24.8181C22.4568 24.8181 22.1575 24.3391 21.934 24.0148C21.6376 23.5903 21.4073 23.0777 20.8544 23.0777C20.8408 23.0777 20.8252 23.0777 20.8107 23.0796C20.7054 23.084 20.6035 23.1191 20.5172 23.1808C20.3326 23.0562 20.1165 22.989 19.8952 22.9874C19.5503 22.9874 19.2801 23.1501 19.145 23.1501H19.1402L17.9061 23.0251C17.7127 23.0053 17.5601 22.8069 17.5047 22.7296L17.4834 22.6959C17.4834 22.6611 17.4834 22.6264 17.4814 22.5957C17.4396 21.5633 16.6583 21.122 16.3794 21.1141C16.3794 21.1141 16.4125 20.9178 16.3376 20.8434L16.0655 21.1806L15.1715 20.7224L15.809 21.484L15.2697 22.1038C15.2017 22.1742 15.2104 22.2694 15.2386 22.3101L15.4718 22.5203L15.7672 22.3369C15.7818 22.326 15.809 22.322 15.842 22.322C15.9237 22.322 16.0461 22.3438 16.1559 22.3438C16.2774 22.3438 16.3814 22.318 16.394 22.202C16.3571 22.5848 16.0092 23.2502 16.2376 23.7728L16.4066 24.1675L15.3154 24.0069L14.8042 24.8885C14.6468 25.1821 14.6215 25.4994 14.7731 25.6719L14.9645 25.9169C14.9645 25.9169 15.2328 25.6263 15.292 25.4349L15.2056 25.3377C15.1327 25.2554 15.1366 25.182 15.1813 25.0938L15.5019 24.5503L16.7895 24.8607L16.8575 24.7417C16.945 24.593 17.0713 24.5493 17.2093 24.5493C17.2667 24.5493 17.325 24.5563 17.3852 24.5662C17.6243 24.6148 18.0179 24.6792 18.4114 24.6792C18.8438 24.6792 19.2724 24.5999 19.5007 24.3391C19.9672 25.0461 20.9136 25.1582 20.8388 25.5182L20.5901 26.73C20.7553 26.7221 20.9137 26.7112 21.0643 26.6904L21.3014 25.4299C21.3206 25.3229 21.3375 25.2154 21.3519 25.1076C21.2606 25.0124 21.04 24.8131 20.9146 24.5701C20.7485 24.2419 20.8388 24.0703 20.6834 23.6439C20.6834 23.6439 20.732 23.5448 20.8408 23.5448L20.8408 23.5457ZM32.2696 19.4202C31.2687 18.9145 30.637 17.5757 30.4835 17.0937C30.3183 19.7494 29.0502 21.5918 27.5683 23.365C26.7986 24.2852 26.5304 25.1798 26.5304 25.1798C26.5304 25.1798 26.6791 24.1663 27.3438 23.3412C28.7266 21.6434 30.0404 19.529 30.1386 17.0835C30.2056 15.3777 29.7771 13.9943 29.1066 12.8542C29.4816 14.0412 29.4282 15.496 28.1562 16.8534C28.1562 16.8534 30.6895 13.7514 27.1485 10.5701C25.7316 9.36024 24.1807 8.61247 23.3829 8.08291C26.2661 9.04486 27.6749 7.98573 27.6749 7.98573C26.7537 8.80186 25.5613 8.788 24.8218 8.66999C25.023 8.77015 25.2319 8.87527 25.4554 8.99725C27.8877 10.3479 30.0725 12.5702 30.4457 15.6465V15.6227C31.0102 18.6443 32.2696 19.4196 32.2696 19.4196L32.2696 19.4202ZM33.0101 15.8996C33.0325 15.9016 33.0519 15.9016 33.0742 15.9016C34.4299 15.9016 34.8885 14.417 34.8885 14.417H34.8623C34.6135 14.417 32.5981 14.3575 31.1733 12.506C30.2365 11.2893 29.4679 10.2192 27.9499 9.79871L27.8002 9.77094L27.7681 9.61525C27.7264 9.37823 27.8848 9.15608 28.2462 8.91712C30.3404 7.51488 28.9167 5.72588 28.9167 5.72588C28.9167 5.72588 28.3201 7.15588 26.982 7.15588L26.8819 7.15389C26.7303 7.14596 26.5835 7.141 26.4358 7.10827L26.189 7.05869C26.189 7.05869 26.5709 5.99757 25.6497 5.02474C24.9568 4.28889 24.1124 4.16395 23.6255 4.16395C23.3797 4.16395 23.2242 4.19667 23.2242 4.19667C23.6867 4.81448 24.021 5.84089 23.4865 6.4736C23.025 7.01707 21.8977 7.04384 21.8977 7.85503C21.8977 8.19817 22.2116 8.59882 22.7752 8.95878C24.47 10.0497 26.152 11.4975 26.8516 13.438C27.7262 15.8578 26.7408 17.4643 25.3357 18.3856C25.3357 18.3856 25.7769 18.8001 26.4153 18.8537C26.5455 18.8666 26.6728 18.8725 26.7914 18.8725C28.1411 18.8725 28.8389 18.2249 28.8389 18.2249C28.8389 18.2249 28.7232 19.1194 28.0226 19.9495C27.3734 20.7151 26.5232 21.1672 25.2258 21.1861C25.2258 21.1861 25.185 21.801 25.7594 22.3345C26.1276 22.6707 26.976 22.7807 26.976 22.7807C26.976 22.7807 25.3862 23.109 25.2103 25.5098C25.1151 26.8109 24.7905 27.2621 24.7905 27.2621H24.8187C28.5076 27.2621 28.4132 24.0273 28.4132 24.0273C28.4132 24.0273 28.6697 24.9853 29.6988 25.2351C29.8232 25.2689 29.9563 25.2817 30.0827 25.2817C30.4131 25.2817 30.7017 25.2024 30.7017 25.2024C30.7017 25.2024 30.1623 24.0401 30.6968 22.4148C31.1409 21.0651 31.069 20.0655 31.069 20.0655C31.069 20.0655 31.5655 20.834 32.7987 20.841H32.8114C33.1027 20.8456 33.3904 20.7751 33.6479 20.6361C33.9054 20.4971 34.1244 20.294 34.2846 20.0457C31.8251 19.0014 32.068 15.6325 32.068 15.6325C32.068 15.6325 32.3867 15.8765 33.0096 15.9003L33.0101 15.8996ZM8.43518 23.3652C6.95326 21.592 5.68509 19.7496 5.51796 17.0939C5.36539 17.5769 4.73474 18.9156 3.73481 19.4205C3.73481 19.4205 4.99228 18.6449 5.55684 15.6235V15.6473C5.93096 12.5711 8.11548 10.3488 10.5478 8.99915C10.7713 8.87519 10.9812 8.77107 11.1804 8.67189C10.4419 8.78891 9.24857 8.80279 8.32832 7.98763C8.32832 7.98763 9.73735 9.04576 12.6193 8.08382C11.8225 8.61338 10.2715 9.36111 8.85546 10.571C5.31355 13.7523 7.84679 16.8543 7.84679 16.8543C6.57377 15.4957 6.5213 14.0429 6.8964 12.8551C6.22589 13.9955 5.79637 15.3789 5.86633 17.0858C5.96254 19.5303 7.27536 21.6444 8.6553 23.3435C9.32386 24.1667 9.47448 25.1802 9.47448 25.1802C9.47448 25.1802 9.20238 24.2867 8.43469 23.3663L8.43518 23.3652ZM9.02796 22.7801C9.02796 22.7801 9.87633 22.671 10.2446 22.3338C10.8179 21.8013 10.7781 21.1865 10.7781 21.1865C9.47984 21.1676 8.63053 20.7154 7.97845 19.9498C7.28073 19.1198 7.16412 18.2253 7.16412 18.2253C7.16412 18.2253 7.86184 18.8729 9.20969 18.8729C9.33116 18.8729 9.45748 18.8669 9.58673 18.854C9.98554 18.8128 10.3629 18.6497 10.6693 18.3859C9.26216 17.4647 8.27683 15.8581 9.15042 13.4373C9.85009 11.4986 11.5312 10.0498 13.2282 8.95808C13.7908 8.59907 14.1037 8.19844 14.1037 7.85533C14.1037 7.04413 12.9784 7.01736 12.5169 6.47389C11.9824 5.84119 12.3177 4.81481 12.7793 4.19696C12.7793 4.19696 12.6247 4.16424 12.3779 4.16424C11.892 4.16424 11.0476 4.28919 10.3537 5.02503C9.43057 5.99889 9.81441 7.05997 9.81441 7.05997L9.56758 7.10956C9.42085 7.1403 9.27217 7.14625 9.12057 7.15518L9.0234 7.15617C7.68238 7.15617 7.08667 5.72717 7.08667 5.72717C7.08667 5.72717 5.66499 7.51518 7.7591 8.91741C8.11862 9.1564 8.27704 9.37956 8.23523 9.61554L8.20317 9.77024L8.0506 9.79801C6.53562 10.2195 5.76696 11.2895 4.82838 12.5063C3.40378 14.3578 1.39044 14.4173 1.14049 14.4173H1.11328C1.11328 14.4173 1.5729 15.9019 2.9295 15.9019C2.95087 15.9019 2.97031 15.9019 2.99363 15.8999C3.61652 15.8771 3.93625 15.6331 3.93625 15.6331C3.93625 15.6331 4.17724 19.0018 1.71871 20.0463C1.71871 20.0463 2.16669 20.8426 3.19289 20.8426H3.20455C4.43868 20.8346 4.93429 20.0661 4.93429 20.0661C4.93429 20.0661 4.86238 21.0667 5.30451 22.4154C5.83896 24.0417 5.30256 25.202 5.30256 25.202C5.30256 25.202 5.58922 25.2814 5.9206 25.2814C6.04887 25.2814 6.18005 25.2695 6.30346 25.2357C7.33158 24.9858 7.58908 24.0279 7.58908 24.0279C7.58908 24.0279 7.49482 27.2628 11.1843 27.2628H11.2115C11.2115 27.2628 10.8879 26.8115 10.7937 25.5104C10.6187 23.1106 9.02699 22.7803 9.02699 22.7803L9.02796 22.7801ZM17.1685 10.8598H18.908V11.4697C18.7039 11.2138 18.3055 11.2664 18.3055 11.2664V12.146C18.3055 12.146 18.3191 12.5784 18.4687 12.7658H17.6077C17.7584 12.5784 17.771 12.146 17.771 12.146V11.2664C17.771 11.2664 17.3745 11.2138 17.1685 11.4697L17.1685 10.8598ZM15.2736 10.951C15.3338 11.0175 15.3931 11.0899 15.4504 11.1623C15.464 11.1791 15.4767 11.194 15.4903 11.2138C15.5437 11.2852 15.5972 11.3626 15.6487 11.4399L15.6837 11.4925C15.7449 11.5877 15.8032 11.6859 15.8615 11.788C16.394 12.7271 17.2453 13.2884 18.0003 13.2894C18.7574 13.2884 19.6076 12.7271 20.1411 11.788C20.2004 11.6839 20.2597 11.5827 20.3219 11.4875C20.3928 11.3766 20.4687 11.2691 20.5493 11.1652C20.6085 11.0899 20.6698 11.0165 20.732 10.949C20.7426 10.9391 20.7514 10.9282 20.7621 10.9193C21.0342 10.6357 21.3558 10.4195 21.7795 10.2995L21.591 10.1874H21.5813L20.8311 9.74313L20.0624 9.29189L18.0062 10.4363L18.0003 10.4314L17.9974 10.4363L15.9412 9.29189L15.1716 9.74313L14.4214 10.1874H14.4126L14.2231 10.2995C14.6459 10.4185 14.9685 10.6327 15.2406 10.9173C15.2522 10.9272 15.26 10.9411 15.2736 10.951ZM18.0003 3.79906C16.7273 3.80005 15.7721 4.22647 15.5641 4.72926L18.0003 5.71105L20.4375 4.72926C20.2315 4.22647 19.2762 3.80005 18.0003 3.79906ZM18.0266 29.8199H17.978C17.2064 29.8249 16.1423 29.6632 15.6312 29.5095L15.0151 31.2142C15.4213 31.362 16.7973 31.6456 18.0032 31.6456C19.2072 31.6456 20.5842 31.362 20.9895 31.2142L20.3744 29.5105C19.8603 29.6632 18.7981 29.8249 18.0266 29.8199ZM22.6879 28.1241C22.2292 28.3899 21.206 28.7885 20.6103 28.973L21.1098 30.3811C22.031 30.1233 22.7919 29.8228 23.4196 29.5005L22.3818 29.1484L22.6879 28.1241ZM13.3154 28.1241L13.6225 29.1485L12.5837 29.5006C13.2104 29.8229 13.9742 30.1234 14.8926 30.3802L15.393 28.972C14.7983 28.7876 13.7731 28.3899 13.3154 28.1241ZM18.0001 2.16973C18.9612 2.16973 19.9018 2.40476 20.6267 2.81631C20.6928 2.5902 20.7851 2.31452 20.9105 2.02595L20.6364 2.05967L20.3498 2.08941L20.2283 1.82265L19.861 1.03229L19.1944 1.38733L18.9339 1.5222L18.726 1.31394L18.0001 0.580078L17.2761 1.31394L17.0691 1.5222L16.8097 1.38733L16.1392 1.03229L15.7767 1.82265L15.6533 2.09041L15.3657 2.05967L15.0936 2.02595C15.2189 2.31453 15.3103 2.59025 15.3773 2.81631C16.1042 2.40476 17.0449 2.16973 18.0011 2.16973H18.0001ZM32.659 11.3103C32.7843 11.3539 32.9107 11.3738 33.036 11.3738C33.5802 11.3738 34.105 11.0138 34.2848 10.6032C34.2848 10.6032 33.2887 10.5417 32.2178 9.43004C31.8777 9.07104 31.5162 8.96295 31.2072 8.96295C30.7262 8.96295 30.3647 9.22178 30.3647 9.22178C31.6591 9.92588 31.9224 11.0564 32.659 11.3103ZM2.96699 11.3728C3.09332 11.3728 3.21965 11.3539 3.34111 11.3093C4.07966 11.0554 4.34592 9.92589 5.63736 9.22279C5.63736 9.22279 5.27589 8.96296 4.79777 8.96296C4.48681 8.96296 4.12628 9.07007 3.78421 9.43105C2.71432 10.5417 1.7192 10.6042 1.7192 10.6042C1.89801 11.0138 2.42372 11.3738 2.96695 11.3738L2.96699 11.3728ZM17.3461 6.98277V7.55794L17.2383 7.50637C17.2334 7.50241 17.074 7.46671 16.799 7.24258C16.3432 6.88159 16.3345 6.5484 16.3345 6.5484L17.3451 6.98278L17.3461 6.98277ZM17.8223 9.67719V6.10494L15.5989 5.33339L16.1858 8.79449L17.8232 9.67712L17.8223 9.67719ZM18.658 6.98277L19.6686 6.54839C19.6686 6.54839 19.6608 6.8816 19.2031 7.24257C18.9281 7.4657 18.7697 7.50239 18.7649 7.50636L18.658 7.55693L18.658 6.98277ZM19.8173 8.79559L20.4013 5.33449L18.1789 6.10505V9.67729L19.8173 8.79467L19.8173 8.79559ZM14.6776 17.9579C14.8943 18.0372 15.1567 18.0541 15.2917 18.0541C15.2966 18.0372 15.3044 18.0164 15.3112 17.9906C15.3219 17.9509 15.3335 17.9093 15.3423 17.8656C15.3802 17.6673 15.3928 17.4442 15.3967 17.2994C15.2724 17.224 15.1711 17.1148 15.1042 16.984C15.0216 16.8065 14.904 16.7232 14.732 16.7232C14.5085 16.7232 14.2685 16.862 14.1645 16.9255C14.0829 17.4194 14.4395 17.8676 14.6776 17.9569L14.6776 17.9579ZM19.5964 16.0627C19.1844 16.5219 18.3749 17.3222 18.336 17.3618L18.2874 17.4114L15.7317 17.3707C15.7296 17.5865 15.7022 17.8012 15.6501 18.0104L15.6297 18.0927L18.6684 18.652C18.9842 18.4259 19.8539 17.7764 20.1921 17.5215C19.9462 17.1546 19.9229 16.7192 19.9783 16.4138C19.8324 16.3197 19.7033 16.201 19.5964 16.0627Z"
                                        fill="white" />
                                    <path
                                        d="M23.4792 19.7179H12.5225V23.9316C12.5225 25.6552 13.7421 26.7331 15.5427 26.7331C17.046 26.7331 17.4425 26.7926 18.0013 27.3609C18.3871 26.9672 18.7058 26.8214 19.3617 26.7658L19.3763 26.7014L19.7213 25.6095C19.7019 25.5847 19.1382 24.9293 19.1382 24.9293C18.9147 25.0056 18.7262 25.0185 18.4094 25.0185C18.0858 25.0185 17.7194 24.9788 17.322 24.9035C17.2848 24.8945 17.2466 24.8898 17.2083 24.8896C17.1597 24.8896 17.1568 24.8936 17.1432 24.9183L17.0752 25.0344L16.9489 25.2466L16.7127 25.1901L15.6613 24.9372L15.5165 25.1802L15.5388 25.2069L15.6661 25.3507L15.6098 25.5391C15.532 25.7841 15.2813 26.0707 15.2045 26.15L14.9421 26.4376L14.7021 26.1292L14.5224 25.8981C14.3329 25.6819 14.2891 25.3507 14.396 25.0036C14.3929 25.006 14.3892 25.0073 14.3853 25.0076L14.0889 25.1335L13.9558 24.836L13.8616 24.6268C13.7711 24.4127 13.7548 24.1735 13.8154 23.9487C13.876 23.7239 14.0098 23.5269 14.1949 23.3902L15.0403 22.9013L15.8469 23.0629C15.8663 22.9836 15.8955 22.7019 15.9178 22.6295C15.9023 22.6276 15.8877 22.6246 15.8722 22.6246L15.4077 22.8011L14.9606 22.4858C14.9606 22.4858 14.7857 22.3132 14.9441 22.1406L15.3766 21.4692L14.2785 20.0611L15.9664 20.7691L16.0792 20.6273L16.3065 20.3477L16.565 20.5995C16.633 20.6674 16.6803 20.7538 16.7011 20.8485C17.1656 21.0339 17.9994 21.5803 18.0732 22.4689L17.8128 22.575V22.5819C17.8721 22.6543 17.9216 22.6841 17.9372 22.687L19.1421 22.808C19.1732 22.8021 19.2102 22.7882 19.2529 22.7763C19.4035 22.7237 19.628 22.6474 19.8943 22.6474C20.112 22.6474 20.3219 22.6989 20.523 22.7961C20.5979 22.7664 20.6882 22.7455 20.7951 22.7386L20.8534 22.7366C21.4977 22.7366 21.8184 23.2295 22.0759 23.6231C22.1186 23.6916 22.1614 23.755 22.2061 23.8185C22.4316 24.1438 22.726 24.6188 22.7377 24.6396L22.8708 24.8509L22.7075 25.0452C22.5832 25.194 22.3937 25.3675 22.071 25.3675C21.9979 25.3669 21.9251 25.3593 21.8534 25.3447C21.7873 25.3318 21.7227 25.3115 21.661 25.2842C21.6511 25.3542 21.6397 25.424 21.6269 25.4935L21.4161 26.621C22.6794 26.3037 23.482 25.3278 23.482 23.9316L23.4792 19.7179ZM12.5225 19.3788H21.0449C20.6193 18.9285 20.6261 18.3603 20.7339 17.9904C20.619 17.9341 20.5121 17.862 20.4162 17.7762C20.0829 18.0271 19.0664 18.7837 18.8011 18.9741L18.7438 19.0138L15.399 18.395H15.331C15.2513 18.395 15.1337 18.392 15.0054 18.3752C14.9917 18.4378 14.9605 18.4951 14.9155 18.5401C14.8705 18.585 14.8138 18.6157 14.7521 18.6284C14.6904 18.6411 14.6264 18.6352 14.5679 18.6116C14.5094 18.588 14.4588 18.5475 14.4224 18.4952C14.3967 18.4594 14.3784 18.4188 14.3684 18.3757C14.3584 18.3326 14.3569 18.2879 14.3641 18.2443L14.3767 18.1699C14.0327 17.922 13.713 17.3666 13.8548 16.7815L13.8684 16.72L13.917 16.6843C13.9661 16.6502 14.0167 16.6184 14.0686 16.5891L13.8257 16.5495C13.7825 16.5419 13.744 16.5175 13.7182 16.4814C13.6925 16.4452 13.6815 16.4003 13.6877 16.3561C13.7033 16.2629 13.7878 16.1974 13.8782 16.2143L14.4563 16.3075L14.5098 14.2239L15.3708 13.2918L15.9091 14.449L15.3417 16.4543L15.8528 16.5366C15.8965 16.5439 15.9355 16.5685 15.9613 16.6052C15.9872 16.6418 15.9978 16.6874 15.9908 16.7319C15.9845 16.7714 15.9646 16.8073 15.9347 16.8332C15.9047 16.859 15.8667 16.873 15.8275 16.8728L15.8013 16.8718L15.3844 16.8023C15.3902 16.8162 15.398 16.8232 15.4038 16.837C15.4502 16.9192 15.5201 16.9849 15.604 17.0255L18.1529 17.0681C18.2608 16.96 18.528 16.6923 18.804 16.4086C18.5638 16.3187 18.3529 16.1621 18.195 15.9567C18.0371 15.7512 17.9384 15.5049 17.91 15.2454C17.5602 15.0926 17.3172 14.8646 17.1831 14.5671C17.0199 14.1982 17.0782 13.8293 17.1219 13.6498C16.7818 13.5238 16.4242 13.2918 16.0588 12.9209H12.2186C12.3838 13.3731 12.5228 13.863 12.5228 14.3499V19.3778L12.5225 19.3788Z"
                                        fill="#FFE52B" />
                                    <path
                                        d="M18.0018 5.71245L15.5656 4.72867C15.7726 4.22688 16.7278 3.80046 18.0018 3.79947C19.2768 3.80046 20.232 4.22688 20.439 4.72867L18.0018 5.71245ZM19.818 8.7956L18.1806 9.67823V6.1042L20.4031 5.33265L19.8181 8.79375L19.818 8.7956ZM20.8326 9.74365L21.5808 10.188H21.5915L21.7801 10.3C21.3573 10.419 21.0337 10.6362 20.7626 10.9198L20.7335 10.9496C20.6696 11.0192 20.6083 11.0913 20.5498 11.1657L20.5158 11.2114C20.4575 11.2877 20.4021 11.3661 20.3506 11.4474L20.3224 11.488C20.2594 11.5862 20.1995 11.6865 20.1427 11.7885C19.6082 12.7277 18.7579 13.289 18.0019 13.291C17.2458 13.289 16.3946 12.7277 15.8621 11.7885C15.8054 11.6884 15.7461 11.5898 15.6842 11.493L15.6492 11.4404C15.5984 11.3639 15.546 11.2885 15.4918 11.2143C15.4782 11.1945 15.4656 11.1796 15.452 11.1628C15.3949 11.0904 15.3356 11.02 15.2741 10.9515C15.2615 10.9416 15.2528 10.9287 15.2411 10.9178C14.9635 10.6211 14.6116 10.4075 14.2237 10.3L14.4141 10.188H14.4219L15.1731 9.74366L15.9417 9.29242L17.998 10.4368L18.0019 10.4329L18.0077 10.4368L20.0629 9.29242L20.8326 9.74365ZM23.7867 12.921C23.6186 13.3733 23.4796 13.8631 23.4796 14.35L23.4816 17.4937C22.8392 17.3846 22.7625 16.6766 22.7605 16.6458L22.7489 16.502L22.6099 16.4891C22.3743 16.4679 22.1541 16.3605 21.9899 16.1867C21.6741 15.8643 21.6741 15.3427 21.6741 15.3378C21.6702 15.3645 21.3281 15.8535 21.7246 16.389C21.8918 16.6151 22.1347 16.7549 22.4476 16.8094C22.5215 17.2012 22.8071 17.7555 23.4816 17.8408V19.3779H21.5857C20.7111 18.8811 21.0813 18.0064 21.0989 17.9688L21.1727 17.8022L21.0056 17.7377C20.0581 17.3787 20.3195 16.4128 20.3322 16.3712L20.371 16.2303L20.2408 16.1689C19.4595 15.798 19.5655 14.8003 19.5762 14.7587C19.3352 14.958 19.2487 15.3636 19.4139 15.7633C19.3245 15.8684 19.204 15.9943 19.0728 16.1332C18.8445 16.0823 18.639 15.9561 18.488 15.7742C18.3369 15.5923 18.2487 15.3647 18.237 15.1266L18.2361 15.0096L18.1292 14.9679C17.8134 14.8489 17.5966 14.6684 17.4888 14.4274C17.3692 14.1607 17.411 13.882 17.4441 13.7462C17.6257 13.7846 17.8106 13.8045 17.996 13.8057H18.0087C18.1029 13.8057 18.1953 13.7997 18.2866 13.7908C18.7919 13.7392 19.3556 13.5181 19.9444 12.9211L23.7867 12.921ZM21.4175 26.6212L21.6294 25.4937L21.6634 25.2854C21.7942 25.3377 21.9331 25.3656 22.0735 25.3677C22.3961 25.3677 22.5846 25.1932 22.71 25.0454L22.8713 24.8521L22.7391 24.6398C22.7275 24.619 22.433 24.144 22.2076 23.8187C22.1628 23.7545 22.1197 23.689 22.0783 23.6224C21.8208 23.2297 21.4992 22.7368 20.8539 22.7368L20.7966 22.7388C20.7037 22.7439 20.612 22.7629 20.5245 22.7953C20.3281 22.6995 20.1134 22.6494 19.8958 22.6485C19.6768 22.6539 19.4603 22.6968 19.2553 22.7755C19.2126 22.7884 19.1737 22.8022 19.1436 22.8082L17.9386 22.6872C17.9231 22.6832 17.8745 22.6535 17.8142 22.5821V22.5752L18.0747 22.469C18.0018 21.5805 17.1671 21.0341 16.7025 20.8486C16.682 20.7536 16.6347 20.6668 16.5665 20.5987L16.308 20.3478L16.0806 20.6265L15.9689 20.7693L14.28 20.0603L15.378 21.4694L14.9456 22.1408C14.7862 22.3124 14.9621 22.4859 14.9621 22.4859L15.4091 22.8013L15.8736 22.6238C15.8892 22.6238 15.9028 22.6278 15.9193 22.6297C15.8969 22.7021 15.8678 22.9848 15.8483 23.0631L15.0428 22.9015L14.1973 23.3904C13.761 23.7176 13.7017 24.2571 13.864 24.627L13.9573 24.8372L14.0904 25.1337L14.3868 25.0088C14.3917 25.0068 14.3955 25.0058 14.3985 25.0028C14.2916 25.3509 14.3353 25.6811 14.5248 25.8983L14.7046 26.1294L14.9436 26.4388L15.206 26.1502C15.2837 26.0709 15.5344 25.7843 15.6112 25.5383L15.6676 25.3509L15.5403 25.2071L15.5189 25.1803L15.6627 24.9374L16.7142 25.1913L16.9513 25.2468L17.0776 25.0336L17.1456 24.9185C17.1583 24.8937 17.1612 24.8898 17.2098 24.8898C17.2477 24.8898 17.2846 24.8938 17.3244 24.9037C17.683 24.9759 18.0473 25.0141 18.4128 25.0177C18.7267 25.0177 18.9162 25.0058 19.1397 24.9295C19.1397 24.9295 19.7042 25.584 19.7237 25.6097L19.3777 26.7006L19.3622 26.7661C18.7082 26.8206 18.3895 26.9674 18.0037 27.3611C17.444 26.7938 17.0484 26.7333 15.5451 26.7333C13.7445 26.7333 12.5239 25.6554 12.5239 23.9308V19.7182H23.4814L23.4833 23.9308C23.4833 25.3281 22.6808 26.3029 21.4175 26.6212ZM14.6685 24.2392L14.7259 24.385C14.687 24.5119 14.2594 24.6924 14.2594 24.6924L14.1681 24.4851C14.1097 24.3431 14.0998 24.1852 14.1398 24.0367C14.1797 23.8882 14.2674 23.7577 14.3887 23.666L15.0815 23.2346L15.8171 23.3933C15.8026 23.6323 15.9425 23.8108 15.9425 23.8108L15.1729 23.66L14.7113 23.9853C14.6336 24.0408 14.6277 24.144 14.6685 24.2392ZM21.3008 25.4292L21.0647 26.6897C20.9131 26.7115 20.7537 26.7234 20.5905 26.7293L20.8392 25.5195C20.9131 25.1585 19.9686 25.0465 19.5011 24.3394C19.2728 24.6012 18.8442 24.6795 18.4128 24.6795C18.0182 24.6795 17.6256 24.6151 17.3856 24.5665C17.3278 24.5562 17.2693 24.5506 17.2107 24.5496C17.0717 24.5496 16.9464 24.5933 16.8589 24.743L16.7909 24.862L15.5023 24.5516L15.1817 25.0941C15.137 25.1823 15.1331 25.2557 15.206 25.338L15.2934 25.4352C15.2332 25.6266 14.9649 25.9172 14.9649 25.9172L14.7735 25.6722C14.6219 25.4997 14.6472 25.1823 14.8046 24.8888L15.3158 24.0062L16.407 24.1678L16.238 23.7721C16.0096 23.2495 16.3575 22.5851 16.3944 22.2023C16.3818 22.3183 16.2778 22.3441 16.1573 22.3441C16.0465 22.3441 15.9241 22.3233 15.8424 22.3233C15.8104 22.3233 15.7822 22.3263 15.7676 22.3372L15.4722 22.5206L15.239 22.3104C15.2108 22.2707 15.2021 22.1745 15.2701 22.1031L15.8104 21.4843L15.1729 20.7227L16.065 21.1819L16.338 20.8437C16.4129 20.9191 16.3798 21.1144 16.3798 21.1144C16.6587 21.1223 17.441 21.5637 17.4818 22.595C17.4847 22.6267 17.4847 22.6615 17.4847 22.6962L17.5051 22.7299C17.5605 22.8082 17.7131 23.0076 17.9065 23.0254L19.1406 23.1504H19.1454C19.2815 23.1504 19.5507 22.9877 19.8956 22.9877C20.0851 22.9877 20.294 23.0373 20.5176 23.1811C20.5176 23.1811 20.6303 23.0899 20.812 23.08C20.8256 23.078 20.8412 23.078 20.8538 23.078C21.4077 23.078 21.638 23.5897 21.9354 24.0151C22.1589 24.3384 22.4572 24.8184 22.4572 24.8184C22.3474 24.9522 22.2444 25.0266 22.0724 25.0266C22.0189 25.0268 21.9655 25.0215 21.913 25.0107C21.3202 24.8987 21.2338 23.6521 20.8956 23.553C20.8779 23.5482 20.8596 23.5459 20.8412 23.546C20.7324 23.546 20.6847 23.6452 20.6847 23.6452C20.8402 24.0707 20.7489 24.2422 20.916 24.5705C21.0404 24.8134 21.261 25.0128 21.3524 25.108C21.3524 25.108 21.3281 25.2924 21.3009 25.4303L21.3008 25.4292ZM20.1648 26.7382C19.9996 26.7382 19.8461 26.7402 19.7081 26.7462L20.0696 25.5948C20.126 25.4351 19.8403 25.2299 19.7227 25.0494C19.9005 25.1644 20.3621 25.4163 20.5846 25.5155C20.4404 25.9215 20.3005 26.3291 20.1648 26.7382ZM14.7889 16.3632L14.8404 14.3619L15.2797 13.8869L15.5556 14.478L15.0114 16.3989L14.7879 16.3642L14.7889 16.3632ZM15.1047 16.984C15.1714 17.1143 15.2724 17.2232 15.3963 17.2983C15.3929 17.4885 15.375 17.6782 15.3428 17.8656C15.3331 17.9092 15.3234 17.9499 15.3108 17.9905C15.3049 18.0163 15.2971 18.0371 15.2923 18.054C15.1572 18.054 14.8939 18.0372 14.6791 17.9568C14.44 17.8676 14.0834 17.4193 14.166 16.9255C14.269 16.861 14.5081 16.7232 14.7325 16.7232C14.9045 16.7232 15.0222 16.8065 15.1047 16.984ZM20.1929 17.5215C19.8557 17.7763 18.985 18.4259 18.6692 18.652L15.6295 18.0927L15.6509 18.0103C15.6898 17.8487 15.7315 17.6286 15.7335 17.3697L18.2883 17.4114L18.3368 17.3618C18.3757 17.3221 19.1852 16.5218 19.5972 16.0627C19.6954 16.1886 19.8178 16.3076 19.9791 16.4128C19.9247 16.7202 19.947 17.1546 20.1929 17.5215ZM16.0601 12.9213C16.4264 13.2922 16.7831 13.5233 17.1232 13.6502C17.0795 13.8287 17.0212 14.1996 17.1844 14.5675C17.3185 14.865 17.5615 15.0931 17.9123 15.2458C17.9512 15.6127 18.1776 16.1651 18.8063 16.409C18.5303 16.6927 18.2621 16.9604 18.1552 17.0675L15.6053 17.0269C15.5211 16.9858 15.4512 16.9193 15.4051 16.8365C15.4003 16.8236 15.3915 16.8166 15.3857 16.8027L15.8026 16.8722L15.8288 16.8732C15.868 16.8734 15.906 16.8594 15.936 16.8336C15.9659 16.8077 15.9858 16.7718 15.9921 16.7323C15.9991 16.6879 15.9887 16.6425 15.963 16.6059C15.9373 16.5693 15.8985 16.5445 15.8551 16.537L15.3429 16.4537L15.9104 14.4495L15.3731 13.2922L14.5111 14.2244L14.4586 16.3079L13.8795 16.2137C13.7901 16.1958 13.7045 16.2633 13.688 16.3555C13.6816 16.4001 13.6925 16.4456 13.7184 16.4821C13.7444 16.5186 13.7834 16.5433 13.827 16.5509L14.0699 16.5885C13.9825 16.6391 13.9251 16.6798 13.9183 16.6847L13.8697 16.7204L13.8561 16.7819C13.7152 17.367 14.034 17.9224 14.378 18.1703L14.3653 18.2447C14.3517 18.3339 14.3712 18.4232 14.4236 18.4956C14.4535 18.5395 14.4935 18.5754 14.5401 18.5999C14.5867 18.6245 14.6385 18.637 14.6909 18.6364C14.7645 18.6358 14.8358 18.6098 14.8931 18.5626C14.9505 18.5154 14.9905 18.4499 15.0067 18.3766C15.135 18.3914 15.2526 18.3954 15.3323 18.3954H15.4012L18.7451 19.0132L18.8025 18.9745C19.0687 18.7841 20.0852 18.0275 20.4175 17.7766C20.5098 17.8569 20.6119 17.9303 20.7353 17.9908C20.6274 18.3607 20.6206 18.9289 21.0462 19.3792H12.5238V14.3513C12.5238 13.8634 12.3849 13.3735 12.2197 12.9213L16.0601 12.9213ZM15.5995 5.33486L17.8238 6.10541V9.67766L16.1864 8.79503L15.5995 5.33393V5.33486ZM21.0256 4.90346C21.0256 4.03175 19.5903 3.24733 18.0063 3.24733H17.9966C16.4127 3.24733 14.9784 4.03175 14.9784 4.90346L15.0095 5.11767L15.6421 8.82965L15.0066 9.20646L13.3634 10.1883H13.3692C13.3692 10.1883 12.9999 10.3826 12.8279 10.5016C12.2021 10.9459 12.0689 11.5945 12.4324 11.8622C12.5218 11.3337 12.9309 10.7813 13.6957 10.7813C14.2477 10.7813 14.6674 11.0728 15.0075 11.5082C15.095 11.6182 15.1776 11.7363 15.2544 11.8622C15.3496 12.0219 15.4458 12.1627 15.5401 12.2976H11.3052C11.6161 12.9372 11.9125 13.6145 11.9125 14.3503V23.9322C11.9125 26.2507 13.6568 27.3574 15.544 27.3574C17.0026 27.3574 17.1989 27.29 18.0035 28.1091C18.8042 27.29 19.0014 27.3574 20.4611 27.3574C22.3492 27.3574 24.0908 26.2507 24.0908 23.9322V14.3503C24.0908 13.6145 24.3872 12.9372 24.7001 12.2976H20.4631C20.5583 12.1627 20.6536 12.0219 20.7488 11.8622C20.8265 11.7363 20.9091 11.6183 20.9946 11.5082C21.3367 11.0708 21.7565 10.7813 22.3085 10.7813C23.0732 10.7813 23.4813 11.3337 23.5717 11.8622C23.9352 11.5945 23.804 10.9459 23.1733 10.5016C23.0062 10.3826 22.635 10.1883 22.635 10.1883H22.6418L20.9946 9.20646L20.363 8.82965L20.9946 5.11767L21.0256 4.90346ZM3.78463 9.43144C4.1267 9.07144 4.48719 8.96239 4.79818 8.96239C5.27627 8.96239 5.63875 9.22321 5.63875 9.22321C4.34633 9.92731 4.08004 11.0558 3.34153 11.3107C3.22125 11.3533 3.0947 11.3744 2.96741 11.3732C2.42417 11.3732 1.89846 11.0142 1.71965 10.6046C1.71965 10.6046 2.7147 10.5421 3.78463 9.43144ZM2.96737 11.8254C3.1452 11.8254 3.31916 11.7976 3.48434 11.7401C3.94688 11.5834 4.24233 11.2075 4.55329 10.8148C4.87106 10.4152 5.22864 9.96197 5.84863 9.6248L6.48611 9.27472L5.89333 8.84831C5.84474 8.81757 5.40065 8.51112 4.79818 8.51112C4.30452 8.51112 3.84585 8.7164 3.46786 9.11109C2.54761 10.072 1.72258 10.1494 1.69244 10.1504L1.05106 10.189L1.31343 10.791C1.5797 11.391 2.2755 11.8254 2.96737 11.8254ZM5.86612 17.0851C5.7981 15.3784 6.22564 13.995 6.89619 12.8544C6.52304 14.0424 6.57356 15.4962 7.84853 16.855C7.84853 16.855 5.31417 13.7511 8.85623 10.5717C10.2731 9.36086 11.823 8.61313 12.6201 8.08354C9.73784 9.04549 8.32978 7.98635 8.32978 7.98635C9.25003 8.80249 10.4424 8.78962 11.1819 8.67061C10.9817 8.77077 10.7718 8.8749 10.5483 8.99887C8.116 10.3485 5.9326 12.5711 5.55736 15.647V15.6242C4.9928 18.6449 3.73533 19.4204 3.73533 19.4204C4.73624 18.9147 5.36595 17.5759 5.51946 17.0939C5.6866 19.7497 6.95378 21.592 8.43472 23.3662C9.20435 24.2855 9.47451 25.1791 9.47451 25.1791C9.47451 25.1791 9.32486 24.1666 8.65725 23.3425C7.27738 21.6437 5.96354 19.5295 5.86637 17.0847L5.86612 17.0851ZM17.1685 10.8601V11.4709C17.3745 11.2141 17.771 11.2666 17.771 11.2666V12.1463C17.771 12.1463 17.7583 12.5787 17.6077 12.7661H18.4687C18.319 12.5787 18.3045 12.1463 18.3045 12.1463V11.2666C18.3045 11.2666 18.7029 11.2141 18.907 11.4709V10.8601H17.1675H17.1685ZM16.7992 7.24265C17.0742 7.46578 17.2336 7.50346 17.2385 7.50644L17.3454 7.55702V6.98283L16.3347 6.54845C16.3347 6.54845 16.3435 6.88168 16.7992 7.24265ZM19.2033 7.24265C19.6601 6.88166 19.6698 6.54847 19.6698 6.54847L18.6582 6.98285V7.55803L18.7651 7.50646C18.7699 7.50347 18.9283 7.46579 19.2033 7.24265ZM31.2077 8.96321C31.5167 8.96321 31.8782 9.07131 32.2183 9.4313C33.2892 10.542 34.2853 10.6045 34.2853 10.6045C34.1045 11.014 33.5798 11.374 33.0365 11.374C32.9112 11.374 32.7839 11.3542 32.6605 11.3096C31.9229 11.0557 31.6596 9.92616 30.3662 9.22305C30.3662 9.22305 30.7257 8.96321 31.2077 8.96321ZM30.1553 9.62369C30.7743 9.96087 31.1358 10.414 31.4526 10.8147C31.7635 11.2064 32.058 11.5833 32.5215 11.74C32.6848 11.7975 32.8587 11.8253 33.0365 11.8253C33.7294 11.8253 34.4261 11.3909 34.6905 10.7899L34.9558 10.189L34.3134 10.1493C34.2833 10.1493 33.4563 10.071 32.5371 9.11102C32.1581 8.71632 31.7003 8.51006 31.2077 8.51006C30.6052 8.51006 30.1582 8.81748 30.1096 8.84923L29.5188 9.27468L30.1553 9.62369ZM30.4458 15.6244V15.6472C30.0727 12.571 27.8882 10.3494 25.4556 8.99903C25.2321 8.87607 25.0232 8.77095 24.822 8.67177C25.5616 8.78879 26.7539 8.80267 27.6751 7.98751C27.6751 7.98751 26.2661 9.04564 23.3831 8.0837C24.1799 8.61327 25.7318 9.36099 27.1487 10.5709C30.6888 13.7522 28.1564 16.8542 28.1564 16.8542C29.4293 15.4966 29.4818 14.0428 29.1067 12.8549C29.7773 13.9954 30.2048 15.3788 30.1388 17.0857C30.0416 19.5302 28.7268 21.6442 27.344 23.3434C26.6793 24.1665 26.5316 25.18 26.5316 25.18C26.5316 25.18 26.7998 24.2865 27.5685 23.3672C29.0504 21.5921 30.3185 19.7505 30.4837 17.0949C30.6373 17.5778 31.2689 18.9166 32.2698 19.4214C32.2698 19.4214 31.0113 18.6459 30.4458 15.6252L30.4458 15.6244ZM11.1855 27.2627C7.49589 27.2627 7.59031 24.0288 7.59031 24.0288C7.59031 24.0288 7.33182 24.9868 6.30468 25.2357C6.17922 25.2679 6.05022 25.2836 5.92084 25.2823C5.59044 25.2823 5.3028 25.203 5.3028 25.203C5.3028 25.203 5.84019 24.0407 5.30475 22.4153C4.86356 21.0666 4.93551 20.066 4.93551 20.066C4.93551 20.066 4.43896 20.8346 3.20577 20.8425H3.19314C2.16791 20.8425 1.71993 20.0462 1.71993 20.0462C4.17847 19.002 3.93748 15.6331 3.93748 15.6331C3.93748 15.6331 3.61679 15.8771 2.99486 15.9009H2.92975C1.57315 15.9009 1.11354 14.4173 1.11354 14.4173H1.14172C1.39243 14.4173 3.40494 14.3578 4.82857 12.5063C5.7663 11.2895 6.53594 10.2194 8.05078 9.79895L8.20335 9.77119L8.23541 9.61549C8.27817 9.37947 8.11881 9.15633 7.75928 8.91736C5.66514 7.51513 7.08685 5.72712 7.08685 5.72712C7.08685 5.72712 7.68155 7.15612 9.02358 7.15612L9.12076 7.15513C9.27235 7.1472 9.42103 7.14025 9.56776 7.10852L9.81459 7.05993C9.81459 7.05993 9.43172 5.99881 10.3549 5.02499C11.0487 4.28913 11.8912 4.16419 12.3781 4.16419C12.6259 4.16419 12.7785 4.19692 12.7785 4.19692C12.3179 4.81473 11.9836 5.84114 12.5161 6.47385C12.9786 7.01831 14.1049 7.04409 14.1049 7.85429C14.1049 8.19841 13.791 8.59906 13.2284 8.95903C11.5327 10.0499 9.85062 11.4978 9.1506 13.4383C8.27798 15.858 9.26333 17.4646 10.6695 18.3869C10.6695 18.3869 10.2273 18.8014 9.58789 18.8539C9.46257 18.8663 9.33675 18.8726 9.21084 18.8728C7.86202 18.8728 7.16433 18.2262 7.16433 18.2262C7.16433 18.2262 7.28094 19.1197 7.97866 19.9508C8.62977 20.7163 9.48002 21.1675 10.7774 21.1864C10.7774 21.1864 10.8191 21.8013 10.2448 22.3348C9.87654 22.672 9.02817 22.781 9.02817 22.781C9.02817 22.781 10.6189 23.1103 10.7939 25.5102C10.8891 26.8112 11.2117 27.2625 11.2117 27.2625L11.1855 27.2627ZM11.5771 27.0049C11.5762 26.9999 11.3186 26.5884 11.236 25.4777C11.1389 24.1469 10.6472 23.3694 10.1603 22.9231C10.3012 22.8557 10.4324 22.7714 10.5412 22.6702C11.2555 22.0137 11.2253 21.2422 11.2205 21.1569L11.1933 20.7404L10.7842 20.7345C9.69388 20.7166 8.933 20.3834 8.31593 19.6515C8.18291 19.4931 8.06449 19.3225 7.96219 19.1418C8.30232 19.2479 8.71824 19.3263 9.21092 19.3263C9.34211 19.3263 9.4801 19.3183 9.6249 19.3084C10.1209 19.2579 10.5898 19.0537 10.9688 18.7233L11.3935 18.3237L10.9096 18.0063C9.82513 17.2973 8.71636 15.9535 9.56856 13.5964C10.1196 12.0642 11.3935 10.6769 13.4652 9.34576C14.1648 8.89452 14.5477 8.36197 14.5477 7.85424C14.5477 7.06982 13.9063 6.76042 13.436 6.53926C13.2067 6.4272 12.9676 6.31614 12.852 6.17827C12.4876 5.74688 12.7937 4.92082 13.1328 4.47254L13.5662 3.89241L12.8637 3.7506C12.8442 3.74762 12.6596 3.71292 12.3778 3.71292C11.854 3.71292 10.8521 3.84284 10.0359 4.70858C9.35466 5.42854 9.26526 6.19515 9.30024 6.68998C9.23416 6.69592 9.16808 6.6989 9.09811 6.70188H9.02329C7.99712 6.70188 7.51318 5.5912 7.49472 5.54853L7.2061 4.85435L6.73966 5.43945C6.71342 5.47514 6.03026 6.34387 6.19739 7.43375C6.3072 8.15769 6.75227 8.78243 7.51608 9.29614C7.59966 9.35068 7.65699 9.39729 7.69877 9.43597C6.25668 9.91493 5.45304 10.9651 4.60373 12.0689L4.48129 12.2256C3.18302 13.9144 1.34531 13.965 1.12581 13.965L0.5 13.9452L0.690464 14.5541C0.712814 14.6274 1.2667 16.356 2.9294 16.356L3.00909 16.353C3.18498 16.348 3.34338 16.3232 3.4833 16.2955C3.41528 17.2376 3.07518 18.98 1.54755 19.6276L1.0811 19.8259L1.33376 20.2752C1.35708 20.3158 1.92459 21.2946 3.20927 21.2946C3.66907 21.2993 4.12316 21.1904 4.5328 20.9773C4.58236 21.4037 4.68537 21.9502 4.88557 22.562C5.35006 23.9762 4.91763 24.9689 4.90112 25.0085L4.67178 25.5024L5.18972 25.6422C5.2247 25.6521 5.54346 25.7334 5.92047 25.7334C6.43924 25.7348 6.94128 25.5462 7.33536 25.2019C7.47626 25.6452 7.71822 26.146 8.13704 26.5893C8.8503 27.338 9.87553 27.7158 11.2146 27.7158L12.026 27.7049L11.5771 27.0049ZM16.0326 21.5457C16.0178 21.5445 16.0029 21.5463 15.9888 21.5511C15.9747 21.5558 15.9617 21.5634 15.9506 21.5734C15.9395 21.5834 15.9304 21.5956 15.9239 21.6092C15.9175 21.6229 15.9138 21.6377 15.913 21.6528C15.9119 21.6679 15.9137 21.6831 15.9184 21.6975C15.9232 21.7119 15.9307 21.7251 15.9406 21.7364C15.9505 21.7478 15.9626 21.7569 15.976 21.7633C15.9895 21.7697 16.0041 21.7733 16.019 21.7738C16.0487 21.7757 16.0779 21.7657 16.1004 21.7458C16.123 21.726 16.137 21.6979 16.1395 21.6677C16.1411 21.6371 16.1307 21.607 16.1107 21.5842C16.0906 21.5613 16.0626 21.5475 16.0326 21.5457ZM21.111 30.3816L20.6105 28.9734C21.2062 28.7879 22.2295 28.3893 22.6891 28.1245L22.383 29.1489L23.4199 29.501C22.7921 29.8223 22.0322 30.1228 21.111 30.3806L21.111 30.3816ZM18.0033 31.646C16.7974 31.646 15.4213 31.3624 15.0152 31.2146L15.6312 29.5108C16.1424 29.6636 17.2055 29.8252 17.978 29.8203H18.0266C18.7982 29.8252 19.8603 29.6626 20.3744 29.5108L20.9895 31.2146C20.5833 31.3633 19.2074 31.646 18.0033 31.646ZM12.5849 29.501L13.6227 29.1489L13.3156 28.1245C13.7733 28.3893 14.7995 28.7889 15.3933 28.9734L14.8928 30.3815C13.9745 30.1237 13.2117 29.8223 12.5849 29.501ZM23.4667 29.1886L22.835 28.9407L23.0099 28.2742L23.2014 27.5473C23.2014 27.5473 22.0839 28.1681 20.5067 28.6333C20.0597 28.7642 19.7215 28.8247 19.7215 28.8247V29.3195C19.7215 29.3195 18.878 29.4683 18.0268 29.4683H17.9782C17.125 29.4683 16.2835 29.3195 16.2835 29.3195V28.8237C16.2835 28.8237 15.9443 28.7642 15.4973 28.6333C13.9221 28.1672 12.8046 27.5473 12.8046 27.5473L12.9931 28.2742L13.1719 28.9407L12.5383 29.1886L11.8357 29.4563C12.6404 29.854 13.7559 30.4322 14.7763 30.7178L14.5362 31.3902C14.5362 31.3902 15.8306 31.9931 17.987 31.999V32H18.0162V31.999C20.1755 31.9931 21.4698 31.3902 21.4698 31.3902L21.2269 30.7178C22.2482 30.4322 23.3657 29.855 24.1664 29.4563L23.4667 29.1886ZM15.3669 2.05876L15.6536 2.0905L15.777 1.82274L16.1385 1.03238L16.809 1.38742L17.0694 1.52328L18.0003 0.579176L18.7263 1.31304L18.9342 1.52328L19.1946 1.38742L19.8612 1.03238L20.2286 1.82274L20.35 2.0905L20.6367 2.05876L20.9108 2.02604C20.7854 2.31462 20.6931 2.58934 20.626 2.81739C19.9021 2.40385 18.9614 2.16982 18.0013 2.16982C17.0451 2.16982 16.1045 2.40386 15.3776 2.81739C15.2992 2.54785 15.2044 2.28356 15.0938 2.02604L15.3659 2.05876H15.3669ZM18.0004 2.58139C19.286 2.58139 20.3131 3.01773 20.8816 3.48084C20.8816 3.48084 21.0507 2.44255 21.626 1.52721L20.5911 1.64621L20.0498 0.471038L19.01 1.01944L18.0004 0L16.9946 1.01944L15.9529 0.471038L15.4125 1.64721L14.3776 1.52622C14.9539 2.44256 15.122 3.47985 15.122 3.47985C15.6934 3.01671 16.7176 2.58139 18.0004 2.58139ZM34.2853 20.0458C34.2853 20.0458 33.8383 20.8421 32.8121 20.8421H32.7995C31.5673 20.8342 31.0697 20.0656 31.0697 20.0656C31.0697 20.0656 31.1416 21.0652 30.6985 22.4149C30.1641 24.0413 30.7024 25.2016 30.7024 25.2016C30.7024 25.2016 30.4148 25.2819 30.0834 25.2819C29.9571 25.2819 29.8249 25.269 29.6996 25.2353C28.6705 24.9864 28.4139 24.0284 28.4139 24.0284C28.4139 24.0284 28.5092 27.2623 24.8194 27.2623H24.7903C24.7903 27.2623 25.1158 26.8111 25.212 25.51C25.3869 23.1101 26.9767 22.7799 26.9767 22.7799C26.9767 22.7799 26.1284 22.6708 25.7601 22.3346C25.1858 21.802 25.2256 21.1862 25.2256 21.1862C26.5239 21.1674 27.3752 20.7162 28.0233 19.9496C28.441 19.4592 28.7228 18.8638 28.8396 18.2251C28.8396 18.2251 28.1419 18.8726 26.7921 18.8726C26.6736 18.8726 26.5473 18.8667 26.417 18.8538C25.7776 18.8012 25.3365 18.3857 25.3365 18.3857C26.7416 17.4644 27.727 15.8569 26.8534 13.4371C26.1537 11.4984 24.4706 10.0496 22.777 8.95855C22.2134 8.59855 21.8985 8.19791 21.8985 7.85381C21.8985 7.0436 23.0257 7.01783 23.4883 6.47337C24.0228 5.84066 23.6875 4.81428 23.2249 4.19644C23.2249 4.19644 23.3804 4.16371 23.6263 4.16371C24.1141 4.16371 24.9576 4.28866 25.6514 5.02451C26.5717 5.99837 26.1898 7.05945 26.1898 7.05945L26.4366 7.10903C26.5843 7.13978 26.7311 7.14672 26.8836 7.15465L26.9827 7.15565C28.3209 7.15565 28.9185 5.72565 28.9185 5.72565C28.9185 5.72565 30.3411 7.51465 28.247 8.91688C27.8865 9.15588 27.7271 9.37903 27.7689 9.61501L27.802 9.77071L27.9506 9.79748C29.4685 10.219 30.2372 11.29 31.175 12.5058C32.5997 14.3573 34.6152 14.4168 34.8629 14.4168H34.8902C34.8902 14.4168 34.4305 15.9014 33.0749 15.9014C33.0526 15.9014 33.0331 15.9014 33.0108 15.8994C32.3888 15.8766 32.0682 15.6326 32.0682 15.6326C32.0682 15.6326 31.8262 19.0012 34.2857 20.0458L34.2853 20.0458ZM33.0745 16.3555C34.7362 16.3555 35.292 14.6271 35.3154 14.5536L35.5 13.9438L34.8781 13.9636H34.8763C34.6557 13.9636 32.823 13.914 31.5237 12.2252L31.4002 12.0685C30.5509 10.9647 29.7453 9.91455 28.3052 9.43554C28.3628 9.38412 28.4242 9.33737 28.4889 9.29571C29.2526 8.78201 29.6977 8.15826 29.8085 7.43332C29.9727 6.34345 29.2915 5.47476 29.2624 5.43902L28.7998 4.85392L28.5102 5.54811C28.4908 5.59075 28.0049 6.70145 26.9826 6.70145H26.9068C26.8369 6.69847 26.7698 6.6955 26.7037 6.68955C26.7397 6.1937 26.6513 5.42812 25.971 4.70816C25.1538 3.84238 24.151 3.7125 23.6262 3.7125C23.3463 3.7125 23.1597 3.7482 23.1394 3.75018L22.4407 3.89199L22.8712 4.47211C23.2093 4.92036 23.5164 5.74645 23.153 6.17785C23.0364 6.31668 22.7973 6.42676 22.569 6.53884C22.0986 6.75999 21.4553 7.0694 21.4553 7.85382C21.4553 8.36155 21.8411 8.8941 22.5407 9.34533C24.6086 10.6752 25.8856 12.0635 26.4366 13.596C27.2899 15.9522 26.1772 17.2969 25.0956 18.0048L24.6117 18.3232L25.0364 18.7218C25.0937 18.7734 25.6116 19.2405 26.3783 19.3079C26.5241 19.3178 26.6631 19.3258 26.7933 19.3258C27.284 19.3258 27.7029 19.2464 28.043 19.1413C27.9413 19.3224 27.8229 19.4931 27.6893 19.651C27.0721 20.3829 26.3122 20.7161 25.219 20.734L24.8128 20.7399L24.7817 21.1564C24.7778 21.2407 24.7477 22.0132 25.4619 22.6697C25.5717 22.7709 25.7039 22.8552 25.8428 22.9226C25.3569 23.3689 24.8653 24.1464 24.77 25.4772C24.6894 26.5879 24.4299 26.9994 24.427 27.0044L23.978 27.7045L24.7894 27.7154C26.1295 27.7154 27.1557 27.3386 27.866 26.5889C28.2339 26.1951 28.5085 25.7205 28.6687 25.2015C29.0633 25.5449 29.565 25.7333 30.0835 25.733C30.4625 25.733 30.7793 25.6507 30.8143 25.6428L31.3322 25.502L31.1039 25.0081C31.0864 24.9685 30.6549 23.9768 31.1194 22.5616C31.3196 21.9498 31.4216 21.4023 31.4712 20.9749C31.7977 21.1495 32.234 21.2923 32.7986 21.2943C34.0813 21.2943 34.646 20.3154 34.6712 20.2748L34.9239 19.8246L34.4555 19.6282C32.9279 18.9797 32.5897 17.2383 32.5217 16.2961C32.6607 16.3228 32.8181 16.3476 32.9959 16.3526L33.0745 16.3555Z"
                                        fill="#171717" />
                                </svg>
                            </div>
                            <div>В рассрочку 1 833₽/мес.</div>
                        </button>
                        <button
                            class="pt-5 pb-3.5 sm:py-3.5 text-black border border-gray-120 rounded-lg w-full font-['Onest_Medium'] text-xs sm:text-base leading-[1.3em]">Оплатить
                            с иностр. карты</button>

                    </div>
                </div>
            </div>
        </section>

    </div>
</Main></template>

<script setup>

import { Head, Link } from '@inertiajs/inertia-vue3';

</script>


