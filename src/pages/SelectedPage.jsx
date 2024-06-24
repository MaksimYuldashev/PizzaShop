import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { remove } from "../slice/pizzaSlice";

function SelectedPage() {
    const dispatch = useDispatch()
    let pizza = useSelector((state) => state.pizza)
    const [selectedPizza, setSelectedPizza] = useState(null);

    useEffect(() => {
        setSelectedPizza(JSON.parse(localStorage.getItem('selectedPizzas')));
    }, []);
    const handleRemove = (id) => {
        dispatch(remove({ id }));
        const currentPizzas = JSON.parse(localStorage.getItem('selectedPizzas'));
        const updatedPizzas = currentPizzas.filter((pizza) => pizza.id !== id);
        localStorage.setItem('selectedPizzas', JSON.stringify(updatedPizzas));
        setSelectedPizza(updatedPizzas);
    }

    return (
        <main className="container mx-auto">
            <section>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-orange-500 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Название пиццы
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Изображение
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Кол-во
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Цена
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Удалить
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectedPizza && selectedPizza.map((pizza, id) => {
                                return (
                                    <tr key={pizza.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {pizza.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            <img className="w-20 h-20" src={pizza.url} alt="" />
                                        </td>
                                        <td className="px-6 py-4">
                                            {pizza.count}
                                        </td>
                                        <td className="px-6 py-4">
                                            {pizza.price}₽
                                        </td>
                                        <td className="px-6 py-4">
                                            <div onClick={() => handleRemove(pizza.id)}>
                                                <svg className="w-6 h-6 text-orange-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                                    <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}

export default SelectedPage