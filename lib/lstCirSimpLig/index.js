import {ListaCir} from './listaCir.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let listaCir=null;

export async function inserIni(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();	
        listaCir.canvas=canvas;	
    }
    var result= await bootbox_prompt("INSERTAR INICIO-> Ingrese dato del nuevo nodo: ");
    if(result==null||result==''){
        return;
    }
    try{
        if(listaCir.buscar(result)==true){
            throw new Error("El dato ya se inserto previamente");
        }
        listaCir.insertarInicio(result);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos(result);
    }catch(e){
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////

export async function inserFinal(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new ListaCir();	
        listaCir.canvas=canvas;
        listaCir.consola=consola;	
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        var result= await bootbox_prompt("INSERTAR FINAL->Ingrese dato del nuevo nodo: ");
        if(result==null||result==''){
        return;
        }
        if(listaCir.buscar(result)==true){
            throw new Error("El dato ya se inserto previamente");
        }
        listaCir.insertarFinal(result);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos(result);
    }catch(e){
        await bootbox_alert(e.message);
    }
    
}////////////////////////////////////////////////////////

export async function inserAntes_X(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new Lista();
        listaCir.canvas=canvas;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        var result= await bootbox_prompt("INSERTAR ANTES DE  X->Ingrese un dato para el nuevo nodo: ");
        if(result==null||result=='') return;
        if(listaCir.buscar(result)==true){
            throw new Error("El dato ya se inserto previamente");
        }
        var x= await bootbox_prompt("Ingrese valor del nodo de referencia: ");
        if(x==null||x=='') return;
            listaCir.insertarAntesX(result,x);	
            listaCir.dibujarNodosLog();
            listaCir.dibujarNodos(result);
    }catch(e){
        await bootbox_alert(e.message);
    }
}
////////////////////////////////////////////////////////


export async function inserDespues_X(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new Lista();
        listaCir.canvas=canvas;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        var result= await bootbox_prompt("INSERTAR DESPUES DE X->Ingrese un dato para el nuevo nodo: ");
        if(result==null||result=='') return;
        if(listaCir.buscar(result)==true){
            throw new Error("El dato ya se inserto previamente");
        }
        var x= await bootbox_prompt("Ingrese valor del nodo de referencia: ");
        if(x==null||x=='') return;
            listaCir.insertarDespuesX(result,x);	
            listaCir.dibujarNodosLog();
            listaCir.dibujarNodos(result);
    }catch(e){
        await bootbox_alert(e.message);
    }
   
}////////////////////////////////////////////////////////


export async function eliminarPrimerCir(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new Lista();
        listaCir.canvas=canvas;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        listaCir.eliminarPrimero();	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();
        await bootbox_alert("Nodo inicial eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarFinalCir(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new Lista();
        listaCir.canvas=canvas;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        listaCir.eliminarFinal();	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();
        await bootbox_alert("Nodo final eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarXCir(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new Lista();
        listaCir.canvas=canvas;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        var x= await bootbox_prompt("ELIMINAR X->Ingrese valor del nodo: ");
        if(x==null||x=='') return;
        listaCir.eliminarX(x);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}
export async function eliminarAntesXCir(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new Lista();
        listaCir.canvas=canvas;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        var x= await bootbox_prompt("ELIMINAR ANTES DE X->Ingrese valor del nodo de referencia: ");
        if(x==null||x=='') return;
        listaCir.eliminarAntesX(x);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();

        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function eliminarDespuesXCir(){
    var canvas=document.getElementById('tutorial2'); 
    if(listaCir==null){
        listaCir=new Lista();
        listaCir.canvas=canvas;		
    }
    try{
        if(listaCir.isVacio()==true){
            throw new Error("La lista esta vacia");
        }
        var x= await bootbox_prompt("ELIMINAR ANTES DE X->Ingrese valor del nodo de referencia: ");
        if(x==null||x=='') return;
        listaCir.eliminarDespuesX(x);	
        listaCir.dibujarNodosLog();
        listaCir.dibujarNodos();

        await bootbox_alert("NODO ELIMINADOS SATISFACTORIAMENTE");
    }catch(e){
        await bootbox_alert(e.message);
    }
}




