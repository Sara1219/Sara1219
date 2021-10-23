function limpiar () {
    document.getElementById("form").reset ();
}

function calcular () {
    document.getElementById("cal").addEventListener('click', () =>{
       const num1 = parseInt(document.querySelector('#num1').value);
       const num2 = parseInt(document.querySelector('#num2').value);
       const operacion = document.querySelector('#operacion').value;
       let r;
       if(operacion == '+'){
           r = num1 + num2;
        }else if (operacion == '-'){
            r= num1 - num2; 
        }else if(operacion == '*'){
            r= num1 * num2; 
        }else if(operacion == '/'){
            r= num1 / num2; 
        }
        console.log(r)
    });
}; 