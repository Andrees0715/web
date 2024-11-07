function login(){
var U ="ELOYALFARO";
var C= "UEEA1917";
if (document.form.usuario.value==U && document.form.password.value==C ){
    alert ("BIENVENIDO AL SISTEMA DE VOTACIONES");
    window.location = "papeleta.html";
}
else {
    alert ("DATOS INCORRECTOS");
}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        