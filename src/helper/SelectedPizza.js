import { add } from "../slice/pizzaSlice";

export const selectedPizza = (dispatch, id, title, url, count = 1, price) => {
    if (title == '' || price == '' || count == '' || url == '') return
    const currentPizzas = JSON.parse(localStorage.getItem('selectedPizzas')) || [];
    const userLogin = JSON.parse(localStorage.getItem('users'))    
    const existingPizzaIndex = currentPizzas.findIndex(pizza => pizza.id === id && pizza.title === title && pizza.url === url);
    if (existingPizzaIndex !== -1) {
        currentPizzas[existingPizzaIndex].count += count;
        currentPizzas[existingPizzaIndex].price += price * count;
    } else if(!userLogin) {
        alert('Зарегистрируйтесь!')
    }else {
        currentPizzas.push({ id, title, url, count, price });
    }
    localStorage.setItem('selectedPizzas', JSON.stringify(currentPizzas));
    dispatch(add({ id, title, url, count, price }))
}