// exemplo de funções utilizadas em arrays

//criação

var myArray = new Array("maçã", "banana",1);
//console.log(myArray)

var myNewArray = new Array(8);//tamanho do array
//console.log(myNewArray)

var msgArray = new Array();
msgArray[0] = "Hello";
msgArray[99] = "Wordl";
//console.log(msgArray.length);

var frutas = ['maçã','banana'];
//console.log(frutas, frutas[0], frutas[frutas.length-1])

// Array.from -> trans forma uma coisa que não é um array mais se parece com um array em um array
// como argumentos de uma função ou coisas que se parence com um array como string, Set, Map,
// Array.fromAsync() -> funciona igual o from mas ele aceita e espera os resultados quando eles ainda estão sendo feitos alem de sempre returnar um Promise

function f() {
  return Array.from(arguments);
}

//console.log(f(1, 2, 3));

var s = new Set(["foo", "window"]);
//console.log(Array.from(s));

var m = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
])

//console.log(Array.from(m));

//console.log(Array.from("transforma"))

// isArray() faz a verificação e é um array

//console.log(Array.isArray([1, 3, 5]));
// Expected output: true

//console.log(Array.isArray("[]"));
// Expected output: false

//console.log(Array.isArray(new Array(5)));
// Expected output: true

//console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false

// .of()
Array.of(2);// cria um array com o elemento 2 e não com o tamanho 2
Array.of(1, 2, 3); 

/*
============================================================================
============================================================================
============================================================================
============================================================================
*/
//iterar 
frutas.push("manga");// adiciona no fim do array um novo elemento
frutas.forEach(function(item, index, array){
    //console.log(item,index);
});

frutas.pop(); // remove do final

frutas.map((item, index)=>{
   // console.log(item,index);
})

frutas.push("manga");
frutas.push("laranja")
frutas.shift();//remove do começo

frutas.map((item, index)=>{
    //console.log(item,index);
})

frutas.unshift("morango");//adiciona no começo
frutas.map((item, index)=>{
    //console.log(item,index);
})

var elemento = frutas.at(-1);//retorno o elemento de acordo com o index colocado
//console.log(elemento)
//indexOf e lastIndexOf
//lastIndexOf retorna o index da ultima ocorrencia do elemento procurado
var find = frutas.indexOf("banana");//procura o item e se achar retorna o index e se não achar retorna -1
//console.log(find);

frutas.splice(find, 1);//altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

frutas.map((item,index)=>{
    //console.log(item,index);
})

var copiaFrutas = frutas.slice();//copia o array
//console.log(copiaFrutas);

//array bidimencional - matriz

var board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

//console.log(board.join("\n") + "\n\n");

//mudança dos valores
board[4][4] = board[6][4];
board[6][4] = " ";
//console.log(board.join("\n"));

values = [];
for (var x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
//console.log(values);
//console.table(values);//faz uma tabela dos valores

var juntaArray = frutas.concat(copiaFrutas); //unto dois arrays, pode ter mais valores dentro do concat
//console.log(juntaArray)

var array1 = ["a", "b", "c", "d", "e"];


var arr = ["a", "b", "c"];
var eArr = arr.entries(); //retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.

//console.log(eArr.next().value)

const isBelowThreshold = (currentValue) => currentValue < 40;
var array1 = [1, 30, 39, 29, 10, 13];
//console.log((array1.every(isBelowThreshold)));//testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

//fill
[1,2,3].fill(4); //muda tudo para 4
[1, 2, 3].fill(4, 1); // muda apnas o index1
[1, 2, 3].fill(4, 1, 2); // muda do 2 ao 3
[1, 2, 3].fill(4, 1, 2); // muda do index2 ao 3

//filter

const words = ["spray", "elite", "exuberant", "destruction", "present"];
const resultFilter = words.filter((word) => word.length > 6); //cria um novo array com os elemnetos que passaram na condição 
//console.log(resultFilter)

//find e findLast

const found = array1.find((element) => element > 10); //retorna o pŕimeiro valor que encontrar
const found2 = array1.findLast((element) => element > 10); //igual o find mas returna o ultimo
//console.log(found, found2)

///findIndex e findLastIndex

//igual aos finds mas retoirna o index não o valor 

//includes
//console.log(words.includes("spray"));// procura um elemento e se encontro returna true e false se não encontrar

//join

const elements = ["Fire", "Air", "Water"];

//console.log(elements.join()); //junta os elementos da string
//console.log(elements.join("12"));


var arr = ["a", "b", "c"];
var iterator = arr.keys();// retorna um novo Array Iterator que contém as chaves para cada index do array.

//console.log(iterator.next()); 
//console.log(iterator.next()); 
//console.log(iterator.next()); 
//console.log(iterator.next()); 


//reverse
//console.log(arr.reverse());// inverte o array

//sort
//console.log(frutas.sort());//ordena o array




