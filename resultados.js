var count1 = 0;
var count2 = 0;
var count3 = 0;

        var LA = document.getElementById("LA");
  
        LA.onclick = function () {
            count1++;
            alert ("Su voto ha sido registrado");
        }

        var LB = document.getElementById("LB");
  
        LB.onclick = function () {
            count2++;
            alert ("Su voto ha sido registrado");
        }

        var NULO = document.getElementById("NULO");
  
        NULO.onclick = function () {
            count3++;
            alert ("Su voto ha sido registrado");
        }

        function limpiar(){
            var pass = prompt("Ingrese el password:");
            if (pass == "UEEA") {
                count1 = 0;
                count2 = 0;
                count3 = 0;
                document.getElementById("A").value = "";
                document.getElementById("B").value = "";
                document.getElementById("NUL").value = "";
                document.getElementById("GAN").value = "";
            }
            else {
                alert ("Usuario no autorizado");
            }
            
        }

        function resultados(){
            document.getElementById("A").value = count1;
            document.getElementById("B").value = count2;
            document.getElementById("NUL").value = count3;

            if ( count1 > count2) {
                document.getElementById("GAN").value = "LISTA 1";
            }
            else {
                document.getElementById("GAN").value = "EMPATE";
            }

            if ( count1 < count2) {
                document.getElementById("GAN").value = "LISTA 2";
            }
        }

        function acta(){
            window.location = "pdfPage.html";
            }
                   