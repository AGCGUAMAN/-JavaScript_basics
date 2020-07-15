var nombre = 'Alexander', primerApellido = 'Guamán', segundoApellido = 'Cruz'

// pasar a mayusculas
var nombreEnMayusculas = nombre.toUpperCase()

// pasar a minusculas
var primerApellidoEnMinusculas = primerApellido.toLowerCase()

// tomar una caracter del Strings
var primeraLetraDelNombre = nombre.charAt(0)

// Longitud del Strings
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${primerApellido.toUpperCase()} ${segundoApellido.toLowerCase()}`

// seleccionar dentro del Strings dos o mas posiciones de un Strings
var str = nombre.substr(1, 2)

// seleccionar el ultimo caracter de un Strings
var strUltimo = nombre.substr(-1)
