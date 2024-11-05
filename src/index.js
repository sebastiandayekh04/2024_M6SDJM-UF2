import { header } from "./componentes/header.js"
import { menu } from "./componentes/menu.js"
import { home } from "./vistas/home.js";
import { about } from "./vistas/about.js";
console.log("Cargando");

console.log(header());
function app(){
    return `
    ${header()}
    <div id="vistas">Aqui van las vistas</div>

    
    `
}
// const app = `<h1>SPA</h1>`

document.querySelector('#root').innerHTML = app();

//cargamos la vista home por defecto


function navegar(){
    if(pagina == 'home') {
        document.querySelector('#vistas').innerHTML = home();
    } else if (pagina == 'about'){
        document.querySelector('#vistas').innerHTML = home();
    }
}

document.querySelector('#btn-home').addEventListener('click', function(){
    navegar('home')
});
//cargar por defecto home
navegar(home);