

function AboutPage() {
    return (
        <main className="container mx-auto">
            <section className="flex flex-col items-center justify-center mb-20">
                <div className="flex items-center justify-center flex-col w-1/2">
                    <div className="font-serif">
                        <h1 className="font-semibold xl:text-5xl lg:text-5xl md:text-5xl xl:text-left md:text-left lg:text-left text-2xl text-center text-orange-500">Мы</h1>
                        <p className="pb-5 text-1xl xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-2xl text-center">Обычно люди приходят в Pizza, чтобы просто поесть. Наши промоутеры раздают листовки про кусочек пиццы  или ещё что-то выгодное. Мы делаем это как первый шаг, чтобы познакомиться.</p>
                        <p className="pb-5 text-1xl xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-2xl text-center">Но для нас Pizza — не только пицца. Это и пицца тоже, но в первую очередь это большое дело, которое вдохновляет нас, заставляет каждое утро просыпаться и с интересом продолжать работу.</p>
                        <p className="pb-5 text-1xl xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-2xl text-center">В чём же наш интерес? Сейчас расскажем.</p>
                    </div>
                </div>
            </section>
            <section className="mb-10 px-10">
                <div>
                    <h1 className="font-semibold xl:text-5xl lg:text-5xl md:text-5xl xl:text-left md:text-left lg:text-left text-2xl text-center text-orange-500">Идеальные ингредиенты</h1>
                    <p className="pb-5 text-1xl xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-2xl text-center">Почему мы так хотим познакомиться? Потому что дальше пицца делает всё сама. Люди видят, что она вкусная, и возвращаются снова. Нам главное первый раз это показать.</p>
                    <p className="pb-5 text-1xl xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-2xl text-center">Вообще пицца — очень простая штука, её сложно испортить. Достаточно хороших ингредиентов и правильного теста. Это конструктор, если детали качественные, то и результат будет в порядке. Вот они, наши детали:</p>
                    <div className="grid xl:grid-cols-2 md:grid-cols-1 text-center items-center gap-10 border-orange-500 border-2 p-5">
                        <div className="xl:border-r-2 xl:border-orange-500">
                            <h2 className="font-semibold xl:text-5xl lg:text-5xl md:text-5xl xl:text-left md:text-left lg:text-left text-2xl text-center text-orange-500">Тесто</h2>
                            <p className="pb-5 text-base xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-center">Самая тонкая вещь. Главное - сделать его «живым». Это целый квест из граммов, градусов, процентов и часов с минутами. Процесс непростой, но у нас получается!</p>
                        </div>
                        <div>
                            <h2 className="font-semibold xl:text-5xl lg:text-5xl md:text-5xl xl:text-left md:text-left lg:text-left text-2xl text-center text-orange-500">Моцарелла</h2>
                            <p className="pb-5 text-base xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-center">Сыр в пицце - ключевой ингредиент. Мы используем настоящую моцареллу от российских поставщиков. Сыр должен тянуться, как на картинке.</p>
                        </div>
                        <div className="xl:border-r-2 xl:border-orange-500">
                            <h2 className="font-semibold xl:text-5xl lg:text-5xl md:text-5xl xl:text-left md:text-left lg:text-left text-2xl text-center text-orange-500">Начинка</h2>
                            <p className="pb-5 text-base xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-center">Есть два главных правила вкусной начинки: не экономить на начинке; фанатично соблюдать режим хранения. Это и весь секрет.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold xl:text-5xl lg:text-5xl md:text-5xl xl:text-left md:text-left lg:text-left text-2xl text-center text-orange-500">Томатный соус</h2>
                            <p className="pb-5 text-base xl:text-2xl lg:text-2xl md:text-2xl xl:text-left md:text-left lg:text-left text-center">Главное, что нужно знать про хороший томатный соус: он должен быть сделан из томатов. Звучит логично, но задумайтесь!</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage