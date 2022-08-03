import {ListaDob} from './listaDob.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let listaDob=null;

export async function dob_insertar_al_inicio(){
    let canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;			
    }

    let DATO = await bootbox_prompt("INSERTAR INICIO-> Ingrese dato del nuevo nodo: ");
    if(DATO==null||DATO==''){
        return;
    } 
    try{
        if(listaDob.buscar(DATO)==true)
            throw new Error("El dato ya se inserto previamente");

            listaDob.dob_inserta_inicio(DATO);

        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();

        //listaDob.dibujarNodos(DATO);
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function dob_insertar_al_final(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;			
    }
    
    try{
        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }

        let DATO = await bootbox_prompt("INSERTAR FINAL->Ingrese dato del nuevo nodo: ");
        if(DATO==null||DATO==''){
            return;
        }
        if(listaDob.buscar(DATO)==true)
                throw new Error("El dato ya se inserto previamente");

                listaDob.dob_inserta_final(DATO);

        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();
        	
        //listaDob.dibujarNodos(DATO); 
    }catch(e){
        console.log(e);
       await bootbox_alert(e.message);
    }
}//////////////////////////////////////////////////////////
export async function dob_insertar_antes_x(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;		
    }
    try{

        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("INSERTAR ANTES DE  X->Ingrese un dato para el nuevo nodo: ");
        if(DATO==null||DATO==''){
            return;
        }  
        if(listaDob.buscar(DATO)==true){
            throw new Error("El dato ya se inserto previamente");
        }
        let X = await bootbox_prompt("Ingrese valor del nodo de referencia: ");
        if(X==null||X=='')
                return;
                listaDob.dob_inserta_antes_X(DATO,X);
        
        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();

        //listaDob.dibujarNodos(DATO);
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////
export async function dob_inserta_despues_X(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;		
    }
    
    try{

        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("INSERTAR DESPUES DE X->Ingrese un dato para el nuevo nodo: ");
        if( DATO==null||DATO==''){
            return;
        }        
        if(listaDob.buscar(DATO)==true){
            throw new Error("El dato ya se inserto previamente");
        }       
        let X = await bootbox_prompt("Ingrese valor del nodo de referencia: ");
        if(X==null||X==''){
            return;
        }       
        listaDob.dob_inserta_despues_X(DATO,X);
        
        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();
	
        //listaDob.dibujarNodos(DATO);
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function dob_elimina_inicio(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;			
    }

    try{
        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }

        listaDob.dob_elimina_inicio();
        
        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();
		
        //listaDob.dibujarNodos(null);
        await bootbox_alert("Nodo inicial eliminado correctamente");
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function dob_elimina_ultimo(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;		
    }

    try{
        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }

        listaDob.dob_elimina_ultimo();
        
        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();
		
        //listaDob.dibujarNodos(null);

        await bootbox_alert("Nodo final eliminado correctamente");
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function dob_elimina_X(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;			
    }

    try{
        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("ELIMINAR X->Ingrese valor del nodo: ");
        if(DATO==null||DATO==''){
            return;
        }
        listaDob.dob_elimina_X(DATO);
        
        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();
		
        //listaDob.dibujarNodos(null);
        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function dob_elimina_antes_X(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;		
    }
    try{
        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("ELIMINAR ANTES DE X->Ingrese valor del nodo de referencia: ");
        if(DATO==null||DATO=='' ){
            return;
        }
        listaDob.dob_elimina_antes_X(DATO);
        
        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();
		
        //listaDob.dibujarNodos(DATO);
        await bootbox_alert("Nodo eliminado correctamente");
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////

export async function dob_elimina_despues_X(){
    var canvas=document.getElementById('tutorial3'); 
    if(listaDob==null){
        listaDob=new ListaDob();
        listaDob.canvas=canvas;			
    }
    try{
        if(listaDob.isVacio()==true){//la lista esta vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("ELIMINAR DESPUES DE X->Ingrese valor del nodo de referencia: ");
        if(DATO==null||DATO=='' ){
            return;
        } 
        listaDob.dob_elimina_despues_X(DATO);
        
        console.log("recorrido derecha");
        listaDob.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        listaDob.dibujarNodosLogIzq();
		
        //listaDob.dibujarNodos(DATO);
        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}/////////////////////////////////////////////////////////




