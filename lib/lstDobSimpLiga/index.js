import { ListaDobleLigada } from "./lista.js";
import { ListaDobleLigadaCanvas } from "./listaCanvas.js";
import {bootbox_prompt, bootbox_alert} from '../utils/dialog.js';

var lista = null;
let listaCanvas=null;

export async function dob_insertar_al_inicio() {
    let canvas=document.getElementById('tutorial3'); 
    if (lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        let DATO = await bootbox_prompt("INSERTAR INICIO-> Ingrese dato del nuevo nodo: ");
        if(DATO==null || DATO=="")
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("El dato ya se inserto previamente");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_insertar_al_final() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true){//Error, la lista se encuentra vacia
            throw new Error("La lista esta vacia");
        }
        let DATO = await bootbox_prompt("INSERTAR FINAL->Ingrese dato del nuevo nodo: ");
        if(DATO==null || DATO=="")
            return;

        if(lista.buscar(DATO)==true)
            throw new Error("El dato ya se inserto previamente");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_insertar_antes_x() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("La lista esta vacia");

        let DATO1 = await bootbox_prompt("INSERTAR ANTES DE  X->Ingrese un dato para el nuevo nodo: ");
        if(DATO1==null || DATO1=="")
            return;

        if(lista.buscar(DATO1)==true)
            throw new Error("El dato ya se inserto previamente");


        let DATO2 = await bootbox_prompt("Ingrese valor del nodo de referencia: ");
        if(DATO2==null || DATO2=="")
            return;

        
        lista.inserta_antes_X(DATO1, DATO2);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_inserta_despues_X() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("Error, la lista se encuentra vacia");

        let DATO1 = await bootbox_prompt("INSERTAR DESPUES DE X->Ingrese un dato para el nuevo nodo: ");
        if(DATO1==null || DATO1=="")
            return;

        if(lista.buscar(DATO1)==true)
            throw new Error("El dato ya se inserto previamente");

        let DATO2 = await bootbox_prompt("Ingrese valor del nodo de referencia:");
        if(DATO2==null || DATO2=="")
            return;

        lista.inserta_despues_X(DATO1, DATO2);
        lista.dibujarNodosLog();
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_elimina_inicio() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("La lista esta vacia");

        lista.elimina_inicio();
        lista.dibujarNodosLog();
        await bootbox_alert("Nodo inicial eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_elimina_ultimo() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("La lista esta vacia");

        lista.elimina_ultimo();
        lista.dibujarNodosLog();
        await bootbox_alert("Nodo final eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_elimina_X() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("La lista esta vacia");

        let DATO = await bootbox_prompt("ELIMINAR X->Ingrese valor del nodo: ");
        if(DATO==null || DATO=="")
            return;

        lista.elimina_X(DATO);
        lista.dibujarNodosLog();
        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_elimina_antes_X() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("La lista esta vacia");

        let DATO = await bootbox_prompt("ELIMINAR ANTES DE X->Ingrese valor del nodo de referencia: ");
        if(DATO==null || DATO=="")
            return;

        lista.elimina_antes_X(DATO);
        lista.dibujarNodosLog();
        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function dob_elimina_despues_X() {
    let canvas=document.getElementById('tutorial3'); 
    if(lista == null){
        listaCanvas = new ListaDobleLigadaCanvas(canvas);
        lista = new ListaDobleLigada(listaCanvas);
    }

    try{
        if(lista.isVacio()==true)//Error, la lista se encuentra vacia
            throw new Error("La lista esta vacia");

        let DATO = await bootbox_prompt("ELIMINAR DESPUES DE X->Ingrese valor del nodo de referencia: ");
        if(DATO==null || DATO=="")
            return;

        lista.elimina_despues_X(DATO);
        lista.dibujarNodosLog();
        await bootbox_alert("Nodo eliminado correctamente");
    }catch(e){
        await bootbox_alert(e.message);
    }
}

export async function borrar_LstDobleLig() {
    lista = null;
    listaCanvas = null;
    let canvas=document.getElementById('tutorial3'); 
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}
