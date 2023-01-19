let vocales=["a","e","i","o","u"];

function encriptandolo(){
const mensaje=document.getElementById("entrada").value;    
    if(mensaje!=""){
        let mapObj={
            a:"ai",
            e:"enter",
            i:"imes",
            o:"ober",
            u:"ufat"
        }
        
        encriptado= mensaje.replace(/a|e|i|o|u/g,function(matched){
            return mapObj[matched];
        })
        document.getElementById("salida").innerHTML=encriptado;
        document.getElementById('existe').style.display="block";
        document.getElementById('noexiste').style.display="none";
        
    }else{
        
        document.getElementById('existe').style.display="none";
        document.getElementById('noexiste').style.display="block";

    }

}



function desencriptandolo(){

    const mensaje=document.getElementById("entrada").value;    
        if(mensaje!=""){

            let mapObj={
                ai:"a",
                enter:"e",
                imes:"i",
                ober:"o",
                ufat:"u"
            }
            
            encriptado= mensaje.replace(/ai|enter|imes|ober|ufat/g,function(matched){
                return mapObj[matched];
            })
            document.getElementById("salida").innerHTML=encriptado;
            
        }else{
        
            document.getElementById('existe').style.display="none";
            document.getElementById('noexiste').style.display="block";
    
        }
    
    }


    document.getElementById("copy").onclick =function(){
        let text =document.getElementById("salida").value;
        navigator.clipboard.writeText(text)
        .then(()=>{
            console.log('texto copiado en portapapeles');
        })
        .catch (err=>{
           console.error('error en copiar el texto', err)
        });
    }
    