
function register(e, navigate) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (email == '' || password == '') {
        alert('Заполните все поля')
    } else {
        let users = JSON.parse(localStorage.getItem('users')) || []
        if (users.some(user => user.email === email)) {
            alert('Аккаунт уже существует')
        } else {
            const user = { email: email, password: password }
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
            alert('Успешная регистрация! Пожалуйста, войдите в систему.')
            navigate('/')
        }
    }
}

function formSubmit(e, navigate) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    if (email == '' || password == '') {
        alert('Заполните все поля')
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || []
        const user = users.find(user => user.email === email && user.password === password)
        if (user) {
            navigate('/home')
        } else {
            alert('Неверный пароль или адрес электронной почты, или аккаунт не существует. Пожалуйста, зарегистрируйтесь.')
        }
    }
}

export { register, formSubmit }


