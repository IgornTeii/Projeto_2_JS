//buscando uma lista de uma arrey usando o for

let msg = document.getElementById('msg')

const usuario = [
    {nome: "Huginho", idade: 18},
    {nome: "Zezinho", idade:19},
    {nome: "Luizinho", idade: 20},

];

const Users = usuario.length;
for(let i=0; i<Users; i++){
    msg.innerHTML +=`<p> ${usuario[i].nome} ${usuario [i].idade}</p>`
}



var image =[
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
];
//Declaracando variaveis//
var Index =0;
var time = 2000;

//Criando uma funcao
function slideShow(){
    document.getElementById('image').src = image[Index]//Pega id e o caminho
    Index++;//Incrementa 
    if (Index == image.length){Index =0;} //Verificando se tem imagens e conta 
    setTimeout ("slideShow()", time); //Definindo o tempo de milisegundos
}

slideShow(); //chamando a função
