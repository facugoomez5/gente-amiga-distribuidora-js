let nombre = prompt("Ingrese su nombre y apellido:");
if(nombre != ""){
    alert(`Bienvenido ${nombre} a Distribuidora Gente Amiga`)
}
else{
    alert("Datos incorrectos, ingrese nuevamente su nombre ")
}  

const salameK = 2300;
const quesoFrescoK = 2900;
const quesoCremosoK = 2000;
const JamonK = 1900;

function calcularPrecioxKilo(){
    producto = Number (prompt (`Ingrese la cantidad del producto que desea: \n 1-Kilo de salame $${salameK} \n 2-Kilo de queso fresco$${quesoFrescoK} \n 3-Kilo de queso cremoso$${quesoCremosoK} \n 4- Kilo de jamon$${JamonK} \n 0-Salir`))

    while(producto != 0){
        switch(producto){
            case 1: 
                let salame = (Number(prompt("Ingrese la cantidad de salame que quiere(100 = 1kg):")));
                let totals = (salameK * salame) / 100;
                alert(`El precio final es: $${totals}`);
                calcularPrecioxKilo();
                break;
            case 2: 
                let quesoFresco = (Number(prompt("Ingrese la cantidad de queso fresco que quiere(100 = 1kg):")));
                let totalqf = (quesoFrescoK * quesoFresco) / 100;
                alert(`El precio final es: $${totalqf}`);
                calcularPrecioxKilo();
                break;
            case 3: 
                let quesoCremoso = (Number(prompt("Ingrese la cantidad de queso cremoso que quiere(100 = 1kg):")));
                let totalqc = (quesoCremosoK * quesoCremoso) / 100;
                alert(`El precio final es: $${totalqc}`);
                calcularPrecioxKilo();
                break;
            case 4: 
                let jamon = (Number(prompt("Ingrese la cantidad de jamon que quiere(100 = 1kg):")));
                let totalj = (JamonK * jamon) / 100;
                alert(`El precio final es: $${totalj}`);
                calcularPrecioxKilo();
                break
            default:
                alert("Ingrese una opcion valida")
                break
        }
    }

}
calcularPrecioxKilo();





