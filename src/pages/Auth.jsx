import { useNavigate, NavLink } from "react-router-dom"
import { formSubmit } from "../helper/FormSubmit";

function AuthPage() {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col h-screen bg-orange-500">
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
                <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg">

                    <h2 className="text-center font-semibold text-3xl lg:text-4xl text-orange-500">
                        Вход
                    </h2>

                    <form onSubmit={(e) => formSubmit(e, navigate)} className="mt-10" method="POST">
                        <label htmlFor="email" className="block text-xs font-bold text-orange-500 uppercase">Почта</label>
                        <input id="email" type="email" name="email" placeholder="почта email" autoComplete="email"
                            className="block w-full py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-200
                    focus:text-gray-500 focus:outline-none focus:border-orange-500"
                            required />

                        <label htmlFor="password" className="block mt-2 text-xs font-bold text-orange-500 uppercase">Пароль</label>
                        <input id="password" type="password" name="password" placeholder="пароль" autoComplete="current-password"
                            className="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-200
                    focus:text-gray-500 focus:outline-none focus:border-orange-500"
                            required />

                        <button type="submit"
                            className="w-full py-3 mt-10 bg-orange-500 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-green-600 hover:shadow-none ease-in duration-300">
                            Вход
                        </button>

                        <div className="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
                            <button type="submit"
                                className="w-full py-3 mt-10 bg-orange-500 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-green-600 hover:shadow-none ease-in duration-300">
                                <NavLink to="register" className="block py-2 pr-4 pl-3 font-bold text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Зарегестрироваться</NavLink>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AuthPage