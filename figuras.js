// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm2") ;
console.groupEnd();

// Código del triángulo
console.group("Triaungulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("Los lados del triangulo miden: "
    + ladoTriangulo1 
    + " cm, "
    + ladoTriangulo2 
    + " cm, "
    + baseTriangulo
    + " cm"
);
console.log("El perímetro del triángulo mide: "+ perimetroTriangulo + " cm");
console.log("El área del triángulo mide: "+ areaTriangulo + " cm2");
console.groupEnd();

// Código del circulo
console.group("Circulos");
const radio = 4;
const diametro = radio * 2;
const circunferencia = diametro * Math.PI;
const areaCirculo =  (radio * radio ) * Math.PI;

console.log("El radio del circulo mide: "+ radio + " cm");
console.log("El diametro del circulo mide: "+ diametro + " cm");
console.log("El perímetro del circulo mide: "+ circunferencia + " cm");
console.log("El área del circulo mide: "+ areaCirculo + " cm2");


console.groupEnd();