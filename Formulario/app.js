var nameuser = 'ecueva07'
var passuser = 'Mane07'

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

function pulsarenter(e) {
    tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 13) buscarusua(); {

    }


}