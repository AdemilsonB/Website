const main = document.querySelector('main')

//Requisição AJAX
function carregarHTML(url){
fetch(url)
    .then(res => res.text())
    .then(html =>{
        main.innerHTML = html
    })
}

function carregarHome(){
    fetch('html/home.html')
        .then(res => res.text())
        .then(html => {
            main.innerHTML = html
        })
        const section = document.querySelector('section')
        fetch('http://localhost:8000/home')
            .then(res => res.json())
            .then(home => {
                const mainImg = document.querySelector("#principal")
                mainImg.src = "../img/" + home.imagemPrincipal
                const img = document.querySelector("#dress")
                img.src = "../img/" + home.foto
            })
    }

carregarHome()

//Eventos onclick
const mnHome = document.querySelector('#first')
mnHome.onclick = function(e){
    e.preventDefault()
    alert('Carregar home') 
    carregarHTML('html/home.html')
}
const mnSobre = document.querySelector('#sobre')
mnSobre.onclick = function(e){
    e.preventDefault()
    alert('Carregar sobre')
    carregarHTML('html/sobre.html')

} 

const mnCatalogo = document.querySelector('#catalogo')
mnCatalogo.onclick = function(e){
    e.preventDefault()
    alert('Carregar catalogo')
    carregarHTML('html/catalogo.html')
}

const mnAcessorios = document.querySelector('#acessorios')
mnAcessorios.onclick = function(e){
    e.preventDefault()
    alert('Carregar acessorios')
    carregarHTML('html/acessorios.html')
}

const mnCalcados = document.querySelector('#calcados')
mnCalcados.onclick = function(e){
    e.preventDefault()
    alert('Carregar calcados')
    carregarHTML('html/calcados.html')
}

const mnConjuntos = document.querySelector('#conjuntos')
mnConjuntos.onclick = function(e){
    e.preventDefault()
    alert('Carregar conjutnos')
    carregarHTML('html/conjuntos.html')
}

const mnVestidos = document.querySelector('#last')
mnVestidos.onclick = function(e){
    e.preventDefault()
    alert('Carregar vestidos')
    carregarHTML('html/vestidos.html')
}

const mnContato = document.querySelector('#contato')
mnContato.onclick = function(e){
    e.preventDefault()
    alert('Carregar contato')
    carregarHTML('html/contato.html')
}