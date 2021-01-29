var nameuser = 'ecueva07'
var passuser = 'Mane07'
var matriculaa = '0052'
var nombalumno = "Jessica Nayeli Contreras Zamora"

function buscarusua() {
    var usuariotemp = document.getElementById('usuario')
    var passtemp = document.getElementById('contrasena')

    if (usuariotemp.value === nameuser && passtemp.value === passuser) {
        console.log('Bienvenido')
        window.location.href = "menus.html"
    } else {
        console.log('Usuario o contraseña incorrecta')
        window.alert("Contraseña Incorrecta")
        document.getElementById('usuario').value = ""
        document.getElementById('contrasena').value = ""
        document.getElementById('usuario').focus()
    }
}

function buscaralumno() {
    var matriculatemp = document.getElementById('matricula')

    if (matriculatemp.value === matriculaa) {
        document.getElementById('NombreAlumno').innerHTML = nombalumno;
    } else {
        document.getElementById('NombreAlumno').innerHTML = 'Alumno no encontrado';
        window.alert("Matricula Incorrecta")

    }
}

function pulsarenter(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 13) buscarusua(); {

    }
}

function pulsarenter1(e) {
    tecla = (document.getElementById('matricula')) ? e.keyCode : e.which;
    if (tecla == 13) buscaralumno(); {

    }
}