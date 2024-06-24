
function UICard({ title, url, ingredients, price, selectedPizza }) {
    return (
        <div className='flex flex-col items-center w-full max-w-xs shadow-2xl bg-orange-500 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 justify-between'>
            <div>
                <img className="p-8" src={url} alt="product image" />
            </div>
            <div className="flex flex-col flex-wrap items-center px-5 pb-5 gap-y-5">
                <h5 className="break-all text-2xl font-bold tracking-tight text-white dark:text-white">{title}</h5>
                <p className="break-all font-semibold text-white">{ingredients}</p>
                <h3 className="text-4xl text-white">{price}₽</h3>
                <button onClick={selectedPizza} className="font-semibold border-black border py-1 w-full rounded-md hover:border-white hover:text-white">Выбрать</button>
            </div>
        </div>
    )
}

export default UICard