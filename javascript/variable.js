//==================================//
// testes com var, let e const

//if (true) let a = 1; // SyntaxError: Lexical declaration cannot appear in a single-statement context

// {
//     //diferença entre var e let quando não são atribuidas
//     // TDZ começa no início do escopo
//     console.log(bar); // "undefined"
//     console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
//     var bar = 1;
//     let foo = 2; // Fim da TDZ (para foo)
// }


//==================================//
// error de reference error do let


// {
//     // TDZ começa no início do escopo
//     const func = () => console.log(letVar); // OK
  
//     // Dentro da TDZ, o acesso a letVar lança `ReferenceError`
  
//     let letVar = 3; // Fim da TDZ (para letVar)
//     func(); // Chamada fora da TDZ!
// }

// {
//     typeof i; // ReferenceError: Cannot access 'i' before initialization
//     let i = 10;
// }


//==================================//
// error de redeclarar

// function foo(a) {
//     let a = 1; // SyntaxError: Identifier 'a' has already been declared
//   }
  
//   try {
//   } catch (e) {
//     let e; // SyntaxError: Identifier 'e' has already been declared
//   }


//errado
// let x = 1;

// switch (x) {
//   case 0:
//     let foo;
//     break;
//   case 1:
//     let foo; // SyntaxError: Identifier 'foo' has already been declared
//     break;
// }

//certo

// let x = 1;

// switch (x) {
//   case 0: {
//     let foo;
//     break;
//   }
//   case 1: {
//     let foo;
//     break;
//   }
// }

// diferença de escopo

// function varTest() {
//     var x = 1;
//     {
//       var x = 2; // mesma variável!
//       console.log(x); // 2
//     }
//     console.log(x); // 2
// }

// function letTest() {
//     let x = 1;
//     {
//         let x = 2; // variável diferente
//         console.log(x); // 2
//     }
//     console.log(x); // 1
// }

// varTest();
// letTest();


//===========================//
//redeclarar uma const

// const x = 10;
// console.log(x);

// x = 20;
// console.log(x);


// a const tem que ser atribuida lego na sua declaração
// const x;
// x = 10;








