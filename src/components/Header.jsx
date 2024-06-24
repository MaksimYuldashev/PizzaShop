import { useState } from 'react';
import { NavLink } from "react-router-dom"
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="container mx-auto">
            <nav className="border-gray-200 mb-5 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <NavLink to="/home" className="flex items-center">
                        <img src="/src/assets/logo.png" className="h-20 w-20 object-contain sm:h-9" alt="Pizza Shop" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-orange-500 dark:text-white">Pizza</span>
                    </NavLink>
                    <button onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-orange-500'>
                        <RxHamburgerMenu className='text-3xl' />
                    </button>
                    <div className={` ${isOpen ? 'block animate-fade-down bg-orange-500' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1 transition ease-in-out delay-150 lg:bg-orange-500 rounded-3xl p-3`}>
                        <ul className="flex flex-col items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/home" className="block py-2 pr-4 pl-3 font-bold text-white hover:animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal animate-fill-forwards hover:text-green-600 ounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:text-white" aria-current="page">Домой</NavLink>
                            </li>
                            <li>
                                <NavLink to="order" className="block py-2 pr-4 pl-3 font-bold text-white hover:animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal animate-fill-forwards hover:text-green-600 ounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-gray-400 dark:hover:text-white" aria-current="page">Заказать</NavLink>
                            </li>
                            <li>
                                <NavLink to="about" className="block py-2 pr-4 pl-3 font-bold text-white hover:animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal animate-fill-forwards hover:text-green-600 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">О нас</NavLink>
                            </li>
                            <li>
                                <NavLink to="contact" className="block py-2 pr-4 pl-3 font-bold text-white hover:text-green-600 hover:animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal animate-fill-forwards lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Контакты</NavLink>
                            </li>
                            <li>
                                <NavLink to="feedback" className="block py-2 pr-4 pl-3 font-bold text-white hover:text-green-600 hover:animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal animate-fill-forwards lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Задать вопрос</NavLink>
                            </li>
                            <li>
                                <NavLink to="selected" className="block py-2 pr-4 pl-3 font-bold text-white hover:text-green-600 hover:animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal animate-fill-forwards lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className="flex items-center">
                                    <button className="font-semibold border-white border py-1 w-full rounded-md hover:animate-fade animate-once animate-duration-500 animate-ease-linear animate-normal animate-fill-forwards hover:border-green-600 hover:text-green-600 text-white">Регистрация</button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header