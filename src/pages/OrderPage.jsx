import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import UICard from "../UI/UICard"
import { useGetPizzaQuery } from "../slice/pizzaApi"
import LoadingPage from "./LoadingPage";
import { selectedPizza } from "../helper/SelectedPizza";
import { handleSearch } from "../helper/SearchPizza";
import { useDispatch } from "react-redux";
import { sortData } from "../helper/SortedPizza";

function OrderPage() {
    const [findEl, setFindEl] = useState(null)
    const [sortedData, setSortedData] = useState(null)
    const dispatch = useDispatch()
    const { isLoading, isError, error, data } = useGetPizzaQuery(findEl)
    useEffect(() => {
        setSortedData(data)
    }, [data])
    if (isLoading) return <LoadingPage />
    return (
        <main className="container mx-auto py-10">
            <section>
                <h1 className="text-center font-bold text-orange-500 text-4xl pb-12">Выберите пиццу</h1>
                <div className="flex items-center justify-center mb-10 gap-x-10">
                    <div className="flex rounded-lg shadow-sm">
                        <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">Label</label>
                        <input onChange={(e) => handleSearch(e, setFindEl, isLoading, data)} type="text" id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="py-2 outline-none px-4 block w-full border-2 border-r-0 border-orange-500 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Поиск пиццы..." />
                        <button type="button" className="w-[2.5rem] h-[2.5rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </button>
                    </div>
                    <div>
                        <button onClick={() => sortData(sortedData, setSortedData)} type="button" className="font-semibold border-orange-500 border py-1 px-2 w-full rounded-md hover:text-white hover:bg-orange-500">Сортировать по цене</button>
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-y-20 justify-items-center">
                    {findEl ? (
                        <UICard
                            key={findEl.id}
                            title={findEl.title}
                            ingredients={findEl.ingredients}
                            url={findEl.url}
                            price={findEl.price}
                            selectedPizza={() => selectedPizza(dispatch, findEl.id, findEl.title, findEl.url, findEl.count, findEl.price)}
                        />

                    ) : sortedData && sortedData.map(pizza => {
                        return (
                            <UICard
                                key={pizza.id}
                                title={pizza.title}
                                ingredients={pizza.ingredients}
                                url={pizza.url}
                                price={pizza.price}
                                selectedPizza={() => selectedPizza(dispatch, pizza.id, pizza.title, pizza.url, pizza.count, pizza.price)}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default OrderPage