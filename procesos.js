function calcula() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById('resultado').innerHTML = resultado;
}

function calcularPromedio() {
    var examen1 = parseFloat(document.getElementById("examen1").value);
    var examen2 = parseFloat(document.getElementById("examen2").value);
    var examen3 = parseFloat(document.getElementById("examen3").value);
    var examen4 = parseFloat(document.getElementById("examen4").value);
    var promedio = (examen1 + examen2 + examen3 + examen4) / 4;
    document.getElementById("promedio").innerHTML = "El promedio de los exámenes es: " + promedio;
}


function calcularArea() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let area = Math.abs(base * altura)
    document.getElementById("area").innerHTML = area.toFixed(2);
}

function calcular_areaTriangulo() {
    let base_t = parseFloat(document.getElementById("base_t").value);
    let altura_t = parseFloat(document.getElementById("altura_t").value);
    let area_t = Math.abs(base_t * altura_t) / 2
    document.getElementById("area_t").innerHTML = area_t.toFixed(2);

}

function calcular_areaCircunferencia() {
    let radio_c = parseFloat(document.getElementById("radio_c").value);
    let area_c = Math.abs((radio_c * radio_c)*3.14);
    document.getElementById("area_c").innerHTML = area_c.toFixed(2);

}

function salario() {
    let horas = parseFloat(document.getElementById("horas").value);
    let salario = parseFloat(document.getElementById("salario").value);
    let sueldo = parseFloat(horas * salario / 24);
    document.getElementById("sueldo").innerHTML = "El sueldo semanal es: " + Math.round(sueldo * 100) / 100;
}

function calcularPulgadas() {
    let metros = parseFloat(document.getElementById("metros").value);
    let pulgadas = parseFloat(metros * (0.0254));
    document.getElementById("pulgadas").innerHTML = "Las pulgadas necesarias son: " + Math.round(pulgadas);
}

function convertir() {

    let soles = parseFloat(document.getElementById("soles").value);
    let dolarprecio = parseFloat(document.getElementById("dolarprecio").value);
    let dolartotal = Math.abs(soles * dolarprecio)
    document.getElementById("dolartotal").innerHTML = "La cantidad de dolares al pasarlo desde soles es: $" + dolartotal;
}


function edad() {

    let actualy = parseFloat(document.getElementById("actualy").value);
    let firsty = parseFloat(document.getElementById("firsty").value);
    let edad = Math.abs(actualy - firsty)
    document.getElementById("edad").innerHTML = "El/La joven tiene una edad de " + edad + " años";
}

function menoredad() {
    var nombre1 = document.getElementById("nombre1").value;
    var edad1 = Number(document.getElementById("edad1").value);
    var nombre2 = document.getElementById("nombre2").value;
    var edad2 = Number(document.getElementById("edad2").value);
    var nombre3 = document.getElementById("nombre3").value;
    var edad3 = Number(document.getElementById("edad3").value);

    if (edad1 < edad2 && edad1 < edad3) {
        console.log("La persona de menor edad es " * + nombre1 + "&nbsp;" + edad1);
        document.getElementById("menor").innerHTML = "*" + nombre1 + "&nbsp;" + edad1;
    } else if (edad2 < edad1 && edad2 < edad3) {
        console.log("La persona de menor edad es " * + nombre2 + "&nbsp;" + edad2);
        document.getElementById("menor").innerHTML = "*" + nombre2 + "&nbsp;" + edad2;
    } else {
        console.log("La persona de menor edad es " * + nombre3 + "&nbsp;" + edad3);
        document.getElementById("menor").innerHTML = "*" + nombre3 + "&nbsp;" + edad3;
    }
}

function calcularBono(antiguedad) {
    if (antiguedad > 0 && antiguedad <= 1) {
        return 100; 
    } else if (antiguedad > 1 && antiguedad <= 2) {
        return 200;
    } else if (antiguedad > 2 && antiguedad <= 3) {
        return 300;
    } else if (antiguedad > 3 && antiguedad <= 4) {
        return 400;
    } else if (antiguedad > 4 && antiguedad <= 5) {
        return 500;
    } else if (antiguedad > 5) {
        return 1000;
    }
    document.getElementById("antiguedad").innerHTML = "El bono total es: " + (antiguedad);
}