const aranha = document.getElementById('homemAranha');
const ferro = document.getElementById('homemFerro');
const capitao = document.getElementById('capitao');
const viuva = document.getElementById('viuvaNegra');
const img = document.getElementById('img');


function tink(){
    img.src =  "/img/pngwing.com (26).png";
}
aranha.addEventListener('click', tink);

function homemF(){
    img.src = "/img/pngwing.com (25).png"
}
ferro.addEventListener('click', homemF);

function capitaoA(){
    img.src = "/img/pngwing.com (24).png";
}
capitao.addEventListener('click', capitaoA);

function viuvaV(){
    img.src = "/img/pngwing.com (27).png";
}
viuva.addEventListener('click', viuvaV);