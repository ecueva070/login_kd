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
    }
}