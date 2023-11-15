/// JS por Amisadai Morales

// para números y signos:
function Input(i){
    let inp = document.getElementById('screen');  // screen
    inp.value += i; // nums y signos aquí (string)
}
// para borrar uno para atras:
function Delete(){ 
    let del = document.getElementById('screen');  // screen
    del.value = del.value.slice(0,-1); // quita 1 
}
// para borrar todo:
function Clear(){
   let ac = document.getElementById('screen');  // screen
   ac.value = ''; // cambia a blanco
}
// para resultado:
function Resultado(){ 
   let string = document.getElementById('screen').value;  // screen
   let matematica = eval(string); // convierte string en valores
   document.getElementById('screen').value = matematica; // aquí se muestra resultado
}