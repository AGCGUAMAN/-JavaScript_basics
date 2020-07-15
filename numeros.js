var edad = 44

// edad = edad + 1
edad += 2

var peso = 70

// peso = peso - 2
peso -= 2

var almuerzo = 1

peso += almuerzo

var jugarFutbol = 3

peso -= jugarFutbol

var precioDeVino = 20500.3

// redondea los decimales
var total = Math.round(precioDeVino * 100 * 3) / 100

// cantidad de decimales en pantalla
var totalStr = total.toFixed(2)

// pasa Strings a número
var total2 = parseFloat(totalStr)

var pizza = 8
var personas = 2
var cantidadDePorcionesPorPersona = pizza / personas
