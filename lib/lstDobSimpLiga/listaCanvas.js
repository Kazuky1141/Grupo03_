export class ListaDobleLigadaCanvas{
    canvas = null;

    constructor(canvas) {
        this.canvas = canvas;
    }

    dibujarNodos(lista, valor) {
        let canvas = this.canvas;
        let elemCanvas = canvas.getContext("2d");
        let iterador = lista;

        // coordenadas de los elementos del canvas
        let ejeX = 0;
        let ejeY = 0;
        let ancho = 50;
        let alto = 30;
        let columna = 0; // indicador de columna(1, 2, 3, ...)
        let newfila = 8; // indicador de nueva fila(1, 2, 3, ...) //8
        let temp = newfila;


        //limpiar el lienzo canva antes de dibujar
        elemCanvas.clearRect(0, 0, canvas.width, canvas.height);

        // si encuentra el nodo agregar efecto de dibujo
        let nodo=null;

        // dibujando elementos uno por uno
        while (iterador != null)
        {
            if(valor != undefined && iterador.info==valor){
                //Dibujar rectangulo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "rgb(51,51,0)";//GRIS
                elemCanvas.fillRect (ejeX, ejeY, ancho,alto);

                nodo = {};
                nodo.x = ejeX;
                nodo.y = ejeY;
                nodo.width = ancho;
                nodo.height = alto;
                nodo.info = iterador.info;
            }
            else{
                //Dibujar rectangulo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "purple";
                elemCanvas.fillRect(ejeX, ejeY, ancho, alto);
            }
            //texto
            elemCanvas.fillStyle = "white"; //color de relleno
            elemCanvas.font = "16px Arial";
            elemCanvas.textAlign = "center"; // centrar texto
            elemCanvas.fillText(iterador.info, ejeX + ancho*0.5, ejeY + alto*0.7); // centrar texto
            elemCanvas.closePath();

            //Dibujar flecha
            //cabeza de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho*1.1, ejeY + alto*0.25);
            elemCanvas.lineTo(ejeX + ancho, ejeY + alto*0.5);
            elemCanvas.lineTo(ejeX + ancho*1.1, ejeY + alto*0.75);
            elemCanvas.closePath();
            elemCanvas.fill();
            //linea de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho, ejeY + alto/2);
            elemCanvas.lineTo(ejeX + ancho*1.7, ejeY + alto/2);
            elemCanvas.closePath();
            elemCanvas.stroke();
            //cabeza de la flecha
            elemCanvas.beginPath();
            elemCanvas.fillStyle = "black";
            elemCanvas.moveTo(ejeX + ancho*1.6, ejeY + alto*0.25);
            elemCanvas.lineTo(ejeX + ancho*1.55 + alto*0.3, ejeY + alto*0.5);
            elemCanvas.lineTo(ejeX + ancho*1.6, ejeY + alto*0.75);
            elemCanvas.closePath();
            elemCanvas.fill();

            ejeX = (ancho * 1.7) * ++columna;
            iterador = iterador.ligaDer;

            // nueva fila
            temp--;
            if(temp == 0)
            {
                // linea a la nueva fila
                //abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto/2);
                elemCanvas.lineTo(ejeX, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //atras
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ejeX, ejeY + alto*1.7);
                elemCanvas.lineTo(ancho/2, ejeY + alto*1.7);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //linea abajo
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho/2, ejeY + alto*1.7);
                elemCanvas.lineTo(ancho/2, ejeY + alto*2.5);
                elemCanvas.closePath();
                elemCanvas.stroke();
                //cabeza de la flecha
                elemCanvas.beginPath();
                elemCanvas.fillStyle = "black";
                elemCanvas.moveTo(ancho/2.5, ejeY + alto*2);
                elemCanvas.lineTo(ancho/2, ejeY + alto*2.5);
                elemCanvas.lineTo(ancho/1.6, ejeY + alto*2);
                elemCanvas.closePath();
                elemCanvas.fill();

                // nueva fila
                temp = newfila;
                ejeY += 50;
                ejeX = 0;
                columna = 0;
            }
            //console.log(temp+" "+ejeX+" "+ejeY);

            // dar color original luego del efecto de dibujo
            if(nodo!=null){

                setTimeout(function(){
                    //Dibujar rectangulo
                    elemCanvas.beginPath();
                    elemCanvas.fillStyle = "red";//ROJO
                    elemCanvas.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
                    //texto
                    elemCanvas.fillStyle = "white"; //color de relleno
                    elemCanvas.font = "15px Arial";
                    elemCanvas.textAlign = "center"; // centrar texto
                    elemCanvas.fillText(nodo.info, nodo.x + nodo.width*0.5, nodo.y + nodo.height*0.7); // centrar texto
                    elemCanvas.closePath();
                },350);
            }
        }
    }
}