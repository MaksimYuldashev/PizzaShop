

function HeroPage() {
    return (
        <main className="py-48 gradient">
            <section>
                <div className="flex flex-col items-center justify-evenly md:flex-row lg:flex-row xl:flex-row">
                    <div>
                        <h1 className="text-orange-500 text-6xl font-bold sm:text-4xl">Доставим пиццу</h1>
                        <h2 className="text-5xl font-bold pb-8">прямо к дому</h2>
                        <h3 className="font-semibold text-2xl">Закажите одну пиццу, <span className="text-orange-500">вторая в подарок!</span></h3>
                    </div>
                    <div>
                        <div>
                            <img src="src/assets/hero.jpg" alt="Pizza Image" className="rounded-full object-cover w-80 h-80" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HeroPage