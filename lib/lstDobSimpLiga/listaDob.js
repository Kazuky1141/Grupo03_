class Nodo{

    info=0;
    ligaDer=null;
    ligaIzq=null;
}
export class ListaDob{
  
   INICIO=null;
   FIN=null;
   canvas=null;

   constructor(canvas) {
    this.canvas = canvas;
   }///////////////////////////////////////////
   isVacio(){
     if(this.INICIO==null)
        return true;
     else 
        return false;
   }///////////////////////////////////////////

   dibujarNodosLogDer(){

    var	tmp=this.INICIO;
    var cad="";
    while(tmp!=null){
        cad+=tmp.info+"::";
        tmp=tmp.ligaDer;
    }
    console.log(cad);
    }///////////////////////////////////////////
    dibujarNodosLogIzq(){

        var	tmp=this.FIN;
        var cad="";
        while(tmp!=null){
            cad+=tmp.info+"::";
            tmp=tmp.ligaIzq;
        }
        console.log(cad);
    }///////////////////////////////////////////

   buscar(DATO){
    var encontrado=false;
    var	tmp=this.INICIO;
    while(tmp!=null){
        if(tmp.info==DATO){
            encontrado=true;
            break;
        }
        tmp=tmp.liga;
    }
    return encontrado;
   }///////////////////////////////////////////

    /////////////////////////////////////////////
    //-------- FUNCIONES PARA AGREGAR --------// 
    /////////////////////////////////////////////

   dob_inserta_inicio(DATO){

    if(this.INICIO==null){
        var Q=new Nodo();
        Q.info=DATO;
        this.INICIO=Q;
        this.FIN=Q;

    }else{//Algoritmo cairo
            
        var P=this.INICIO;
            
        var Q=new Nodo();
        Q.info=DATO;
        Q.ligaDer=P;
        P.ligaIzq=Q;
        Q.ligaIzq=null;//Opcional no es necesario
        P=Q;
        
        this.INICIO=P;    
    }
   }///////////////////////////////////////////
   dob_inserta_final(DATO){
        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        var F=this.FIN;
        var Q=new Nodo();
        Q.info=DATO;
        F.ligaDer=Q;
        Q.ligaIzq=F;
        Q.ligaDer=null;
        F=Q;

        this.FIN=F;

    }/////////////////////////////////////////////
    dob_inserta_antes_X (DATO,X){
        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }

        var P=this.INICIO;
        var Q = P;
        
        while ( Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q;
            var R=Q.ligaIzq;
            Q.ligaIzq=T;
                if(P==Q){
                    P=T;
                    T.ligaIzq=null;
                }else{
                    R.ligaDer=T;
                    T.ligaIzq=R;
                }
		}else{

            throw new Error("El nodo dado como referencia no se encuentra en la lista\n");
        }
        this.INICIO=P;
    }/////////////////////////////////////////////
    dob_inserta_despues_X ( DATO,X){
        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }

        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;
        var BAND= 1;
        while(Q.ligaDer!=null && BAND==1){
            if(Q.ligaDer!=null){
                Q=Q.ligaDer;
            }
            else{
                BAND =0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q.ligaDer
            Q.ligaDer=T;
            T.ligaIzq=Q;
            
                if(Q==F){
                    F=T;
                    this.FIN=F;
                }else{
                    T.ligaDer.ligaIzq=T;
                }
	    }else{
            throw new Error("El nodo dado como referencia no se encuentra en la lista\n");
        }

    }/////////////////////////////////////////////


    /////////////////////////////////////////////
    //-------- FUNCIONES PARA ELIMINAR --------// 
    /////////////////////////////////////////////


    dob_elimina_inicio(){
        let P=this.INICIO;
        let Q=P;
            if(Q.ligaDer!=null){
                P=Q.ligaDer;
                P.ligaIzq=null;
                
            }else{
                P=null;
                F=null;
            }
        Q=null;
        this.INICIO=P;
    }/////////////////////////////////////////////
    dob_elimina_ultimo(){
        let F=this.FIN;
        let Q=F;
            if(Q.ligaIzq!=null){
                F=Q.ligaIzq;
                F.ligaDer=null;
                
            }else{
                F=null;
            }
        Q=null;
        this.FIN=F;
    }/////////////////////////////////////////////
    dob_elimina_X(DATO){
        var P=this.INICIO;
	    var F=this.FIN;
	    var Q=P;
        while(Q.ligaDer!=null && Q.info!=DATO){
            Q=Q.ligaDer;
        }
        if(Q.info==DATO){
            if(Q==P && Q==F){
                P=null;
                F=null;
            }else{
                if(Q==P){
                    P=Q.ligaDer;
                    P.ligaIzq=null;
                }else{
                    if(Q==F){
                        F=Q.ligaIzq;
                        F.ligaDer=null;
                    }else{
                        var T=Q.ligaIzq;
                        var R=Q.ligaDer;
                        T.ligaDer=R;
                        R.ligaIzq=T;
                    }
                }
            }
            Q=null;
        }else{
            throw new Error("El elemento con informacion X no se encuentra en la lista\n");
        }
        this.INICIO=P;
	    this.FIN=F;
        
    }/////////////////////////////////////////////
    dob_elimina_antes_X(DATO){
        var P=this.INICIO;
        var F=this.FIN;
        var Q=P;

        while(Q.ligaDer!=null && Q.info!=DATO){
            Q=Q.ligaDer;
        }
        if(Q.info==DATO){
            if(P==Q){
                throw new Error("No existe un nodo que precede al que contiene a " + DATO);
            }else{
                var T=Q.ligaIzq;
                }
                if(P==T){
                    P=Q;
                    P.ligaIzq=null;
                }else{
                    var R=T.ligaIzq;
                    Q.ligaIzq=R;
                    R.ligaDer=Q;
                }
                T=null;
        }else{
            throw new Error("El elemento no se encuentra en la lista");
        }
        this.INICIO=P;
        this.FIN=F;         
    }/////////////////////////////////////////////

    dob_elimina_despues_X(DATO){
        var P=this.INICIO;
	    var F=this.FIN;
	    var Q=P;
	    

        while(Q.ligaDer!=null && Q.info!=DATO){
            Q=Q.ligaDer;
        }
        if(Q.info==DATO){
            if(F==Q){
                throw new Error("No hay nodo despues de "+DATO);
            }else{
                var T=Q.ligaDer;
                if(F==T){
                    F=Q;
                    F.ligaDer=null;
                }else{
                    var R=T.ligaDer;
                    Q.ligaDer=R;
                    R.ligaIzq=Q;
                }
            }
            T=null;
        }else{
            throw new Error("El nodo dado como referencia no se encuentra en la lista\n");
        }
        this.FIN=F;
        
    }/////////////////////////////////////////////
}

