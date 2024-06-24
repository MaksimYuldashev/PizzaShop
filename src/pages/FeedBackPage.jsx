

function FeedBackPage() {
    return (
        <main>
            <section>
                <div className="text-orange-500 py-20">
                    <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
                        <div className="flex flex-col w-full lg:w-1/3 p-8">
                            <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">Оставьте нам отзыв!</p>
                            <p className="text-sm md:text-base leading-snug text-orange-500 text-opacity-100">
                            Пожалуйста, оставьте свой ценный отзыв и что-нибудь ...
                            </p>
                        </div>
                        <div className="flex flex-col w-full lg:w-2/3 justify-center">
                            <div className="container w-full px-4">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-6/12 px-4">
                                        <div
                                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-500">
                                            <div className="flex-auto p-5 lg:p-10">
                                                <h4 className="text-2xl mb-4 text-white font-semibold">Есть предложение?</h4>
                                                <form id="feedbackForm" action="" method="">
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-white text-xs font-bold mb-2"
                                                            htmlFor="email">Почта</label><input type="email" name="email" id="email" className="focus:outline-none focus:ring focus:border-black border-0 px-3 py-3 rounded text-sm shadow w-full" required />
                                                    </div>
                                                    <div className="relative w-full mb-3">
                                                        <label className="block uppercase text-white text-xs font-bold mb-2"
                                                            htmlFor="feedback">Сообщение</label><textarea maxLength="300" name="feedback" id="feedback" rows="4"
                                                                cols="80"
                                                                className="border-0 px-3 py-3 bg-white placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                                                                placeholder="" required></textarea>
                                                    </div>
                                                    <div className="text-center mt-6">
                                                        <button id="feedbackBtn"
                                                            className="bg-white text-orange-500 text-center mx-auto hover:bg-green-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                                            type="submit">Отправить
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default FeedBackPage