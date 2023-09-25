const modoNoturno = document.querySelector('#modo-noturno')
const elemento = document.querySelector('body')

modoNoturno.addEventListener('click', () => {
    const modo = modoNoturno.checked ? 'dark' : 'light'
    elemento.setAttribute("data-bs-theme", modo)
})