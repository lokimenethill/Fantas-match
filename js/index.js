let t=0;
let tr=30;
let puntos=0;
var numero_aleatorio;
var textozo="";
var opt=0;
var opt2=0;
var trabar=false;
var estado_votar=false;

document.getElementById("puntos").innerHTML=puntos;
var imagen_muestra = document.getElementById("muestra_fantoche");
function estado(){
    var combo = document.getElementById("seleccion");
     opt = combo.options[combo.selectedIndex].value;

    switch(opt){
       
        case "0":
            imagen_muestra.setAttribute("src","img/pregunta.png")
        break;
        case "1":
            imagen_muestra.setAttribute("src","img/ejempls/sombra_blanca.jpg")
        break;
        case "2":
            imagen_muestra.setAttribute("src","img/ejempls/sombra_negra.gif")
        break;
        case "3":
            imagen_muestra.setAttribute("src","img/ejempls/hombre.gif")
        break;
        case "4":
            imagen_muestra.setAttribute("src","img/ejempls/movimiento.gif")
        break;
        case "5":
            imagen_muestra.setAttribute("src","img/ejempls/nina.gif")
        break;
        case "6":
            imagen_muestra.setAttribute("src","img/ejempls/polvo.gif")
        break;
        case "7":
            imagen_muestra.setAttribute("src","img/ejempls/novia.gif")
        break;
    }
   
   
}


function reiniciar_tiempo(){
    t=0;
    tr=30;
}
var pause = false;
function pausar(){
    pause=true;
}
function seguir(){
    pause=false;
}


function tiempo(){
document.getElementById('tiempo_R').innerHTML=tr;
if(tr==0){
   votar();
   
}
if(pause==true){
    return;
}
else{
t++;
tr--;
if(tr>20 && tr<30){
    document.getElementById("tiempo_R").className = "alert alert-success";
}
if(tr>10 && tr<20){
    document.getElementById("tiempo_R").className = "alert alert-warning";
}
if(tr>2 && tr<10){
    document.getElementById("tiempo_R").className = "alert alert-danger";
}
if(tr>0 && tr<2){
    document.getElementById("tiempo_R").className = "alert alert-danger";
}
}
}

setInterval(tiempo,1000);
//objetos

var pantasma0={
    indice:3,
    tipo:"Hombre Blanco Heterosexual",
    imagen:"img/0.jpg",
    descripcion:"Joven camina por un bosque, en la noche y captura algo espeluznate,  en una imagen",
    link:"https://www.elcolombiano.com/redes-sociales/internet-tambien-tiene-fantasmas-LK2628863"
    };
    var pantasma1={
    indice:1,
    tipo:"Sombra Blanca",
    imagen:"img/1.jpg",
    descripcion:"En una casa con cámara de seguridad , queda grabada una imagen espectral",
    link:"https://www.pinterest.es/pin/54254370490781058/"
    };
    var pantasma2={
    indice:1,
    tipo:"Sombra Blanca",
    imagen:"img/2.jpg",
    descripcion:"Un joven se reúne con sus amigos, y mientras jugaban por la noche en su casa , capturan una imagen horrorosa",
    link:"https://i.pinimg.com/originals/d0/83/c1/d083c1bdd4b3c24c8e944ffcbe0ec171.jpg"
    };
    var pantasma3={
    indice:2,
    tipo:"Sombra Negra",
    imagen:"img/3.jpg",
    descripcion:"Una enfermera, durante el turno nocturno , logra capturar la imagen de una entidad que pertuba a los pacientes",
    link:"https://www.pinterest.com.mx/pin/403916660320783133/"
    };
    var pantasma4={
    indice:3,
    tipo:"Hombre Blanco Heterosexual",
    imagen:"img/4.jpg",
    descripcion:"Un padre de familia toma una imagen perturbante dentro de su Garage",
    link:"https://www.pinterest.com.mx/pin/452611831298525972/"
    };
    var pantasma5={
    indice:5,
    tipo:"Niña",
    imagen:"img/5.jpg",
    descripcion:"Un joven capta algo temeroso dentro de su casa , por la noche",
    link:"https://www.pinterest.com.mx/pin/72620612712044715/"
    };
    var pantasma6={
    indice:2,
    tipo:"Sombra Negra",
    imagen:"img/6.jpg",
    descripcion:"Una pareja que se hospedaba en un hotel de paso , se encuentra con una entidad por la noche",
    link:"https://www.pinterest.com.mx/pin/72620612712044715/"
    };
    var pantasma7={
    indice:6,
    tipo:"Polvo Estelar",
    imagen:"img/7.jpg",
    descripcion:"Unos Jóvenes realizan un exploramiento urbano nocturno donde captan una imagen de miedo",
    link:"https://i.pinimg.com/originals/ac/be/cb/acbecbf7108b3990f7470682016435e4.jpg"
    };
    var pantasma8={
    indice:5,
    tipo:"Niña",
    imagen:"img/8.jpg",
    descripcion:"Una joven residente de un hospital pediátrico descubre una imagen en su móvil",
    link:"https://www.pinterest.com.mx/pin/672162313121674595/"
    };
    var pantasma9={
    indice:2,
    tipo:"Sombra Negra",
    imagen:"img/9.jpg",
    descripcion:"Unos amigos salen de paseo en el bosque y al sacarse una foto de recuerdo , queda impresa una imagen que les hace pensar que al parecer no estaban solos",
    link:"https://www.pinterest.com.mx/pin/289637819769107062/"
    };
    var pantasma10={
    indice:3,
    tipo:"Hombre Blanco Heterosexual",
    imagen:"img/10.jpg",
    descripcion:"Durante la cuarentena , una mujer le saca foto a una criatura pasando por la calle a alta horas de la noche",
    link:"https://www.pinterest.com.mx/pin/289637819769107062/"
    };
    var pantasma11={
    indice:1,
    tipo:"Sombra Blanca",
    imagen:"img/11.jpg",
    descripcion:"En una cámara de vigilancia de un cementerio se ve un espectro por la noche ",
    link:"https://www.pinterest.com.mx/pin/340936634271725897/"
    };
    var pantasma12={
    indice:7,
    tipo:"Novia tóxica",
    imagen:"img/12.jpg",
    descripcion:"Un hombre taxista capta la última imagen antes de morir, en un accidente de carretera ",
    link:"https://www.pinterest.com.mx/pin/340936634271725897/"
    };
    var pantasma13={
    indice:6,
    tipo:"Polvo Estelar",
    imagen:"img/13.jpg",
    descripcion:"Una familia capta eventos paranormales con su cámara , en medio del bosque",
    link:"https://www.google.com.mx/search?q=fotos+orbez+reales&tbm=isch&ved=2ahUKEwi6zO6-gZ7pAhVCHKwKHVfHCp8Q2-cCegQIABAA&oq=fotos+orbez+reales&gs_lcp=CgNpbWcQAzoICAAQCBAHEB5QpNQCWLjqAmDo6wJoAHAAeACAAc0IiAHKFJIBDzAuMi4wLjEuMS4xLjAuMZgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ei=3giyXrrlOMK4sAXXjqv4CQ&bih=619&biw=1349&hl=es-419#imgrc=HIdAKNWe1tde5M&imgdii=qVBr982tSq5EpM"
    };
    var pantasma14={
    indice:6,
    tipo:"Polvo Estelar",
    imagen:"img/14.jpg",
    descripcion:"Un hombre capta un evento fantástico con su celular en el patio trasero de su casa",
    link:"https://blogs.elconfidencial.com/tecnologia/relatos-relativos/2015-09-07/los-fantasmas-no-existen-explicaciones-cientificas-de-los-fenomenos-paranormales_1001342/"
    };
    var pantasma15={
    indice:5,
    tipo:"Niña",
    imagen:"img/15.jpg",
    descripcion:"Una reunión de ex-compañeros de escuela ,se toman la foto de recuerdo y captan algo insólito ",
    link:"http://mundo-paranorma.blogspot.com/2013/02/apariciones-de-fantasmas-reales.html"
    };
    var pantasma16={
    indice:1,
    tipo:"Sombra blanca",
    imagen:"img/16.jpg",
    descripcion:"Esta foto fue tomada en una cueva durante una visita a Edimburgo en 1998",
    link:"http://mundo-paranorma.blogspot.com/2013/02/apariciones-de-fantasmas-reales.html"
    };
    var pantasma17={
    indice:1,
    tipo:"Sombra blanca",
    imagen:"img/17.jpg",
    descripcion:"En una casa abandonada una familia capta un ente fantasmagórico",
    link:"https://www.reymisterios.com/videos/Fantasmas/La-imagen-fantasmag-rico-Puerta-de-la-Casa-l1317.html"
    };
    var pantasma18={
    indice:7,
    tipo:"Novia Tóxica",
    imagen:"img/18.jpg",
    descripcion:"Desde fuera de un hospital psiquiátrico queda grabada una imagen de miedo",
    link:"https://rolloid.net/los-12-momentos-mas-terrorificos-apariciones-fantasmas-i1/"
    };
    var pantasma19={
    indice:5,
    tipo:"Niña",
    imagen:"img/19.jpg",
    descripcion:"Una pareja que se encontraba de viaje y captan un ente por la carretera ",
    link:"https://cadenaser.com/emisora/2019/03/19/ser_cuenca/1553010115_450754.html"
    };
    var pantasma20={
    indice:2,
    tipo:"Sombra Negra",
    imagen:"img/20.jpg",
    descripcion:"Un joven caminaba por la calle , de noche y se encontro con algo espectral ",
    link:"https://www.pinterest.es/pin/569072102907403532/"
    };
    var pantasma21={
    indice:3,
    tipo:"Hombre Blanco Heterosexual",
    imagen:"img/21.jpg",
    descripcion:"En una revisión a una joven embarazada , queda captado algo raro en su ultrasonido",
    link:"https://www.pinterest.es/pin/599682506601686266/"
    };
    var pantasma22={
    indice:4,
    tipo:"Movimiento Perpetuo",
    imagen:"img/22.gif",
    descripcion:"Una joven pareja pone una cámara de vigilancia en su cocina y captaron algo paranormal",
    link:"https://difundir.org/2015/06/03/esta-familia-cometio-el-peor-error-de-su-vida-al-contactar-un-programa-de-television-de-fenomenos-paranormales/"
    };
    var pantasma23={
    indice:4,
    tipo:"Movimiento Perpetuo",
    imagen:"img/23.gif",
    descripcion:"Una cámara de vigilancia de una escuela capta en la zona de casilleros una cosa perturbadora",
    link:"https://www.snopes.com/fact-check/ghost-on-camera-hallways-ireland-school/"
    };
    var pantasma24={
        indice:5,
        tipo:"Niña",
        imagen:"/img/25.jpg",
        descripcion:"Cámaras de Google Maps captan algo extraño en Chérnobyl",
        link:"https://www.chvnoticias.cl/viral/quiso-recorrer-chernobil-desde-su-casa-a-traves-de-google-maps-y-se-encontro-con-espeluznantes-imagenes_20190103/"
        };
    var pantasma25={
    indice:5,
    tipo:"Niña",
    imagen:"img/25.jpg",
    descripcion:"Cámaras de Google Maps captan algo extraño en Chérnobyl",
    link:"https://www.chvnoticias.cl/viral/quiso-recorrer-chernobil-desde-su-casa-a-traves-de-google-maps-y-se-encontro-con-espeluznantes-imagenes_20190103/"
    };
    var pantasma26={
    indice:4,
    tipo:"Movimiento Perpetuo",
    imagen:"img/26.gif",
    descripcion:"Durante un en vivo el presentador deja la cámara sola en la cocina y queda grabado esto",
    link:"https://casadelgrito.blogspot.com/2019/04/bueno-la-mayoria-sabemos-que-es-un.html"
    };
    var pantasma27={
    indice:4,
    tipo:"Movimiento Perpetuo",
    imagen:"img/27.gif",
    descripcion:"Un bar en Moscú graba cosas paranormales en su interior",
    link:"https://www.mundoesotericoparanormal.com/camaras-seguridad-graban-actividad-poltergeist-bar-moscu/"
    };
    var pantasma28={
    indice:6,
    tipo:"Polvo Estelar",
    imagen:"img/28.gif",
    descripcion:"Una señora mayor graba en su cocina algo impactante",
    link:"https://www.syscomblog.com/2018/01/cctv-y-fantasmas.html"
    };
    var pantasma29={
    indice:1,
    tipo:"Sombra Blanca",
    imagen:"img/29.gif",
    descripcion:"En una cámara de vigilancia , queda grabado algo en la calle , mientras la gente pasaba",
    link:"https://www.pinterest.com.mx/pin/451908143838590886/"
    };
    var pantasma30={
    indice:1,
    tipo:"Sombra Blanca",
    imagen:"img/30.gif",
    descripcion:"Una joven graba su calle desde casa y esto es lo que captó",
    link:"https://gfycat.com/amusedsameaidi-ghostly-figure-passing-caught-on-camera"
    };
    var pantasma31={
    indice:5,
    tipo:"Niña",
    imagen:"img/31.gif",
    descripcion:"Unos jóvenes graban algo durante un paseo nocturno en el bosque ",
    link:"https://gfycat.com/frequentbluecygnet-top-5-ghost-videos-real-ghost-videos"
    };
    var pantasma32={
    indice:4,
    tipo:"Movimiento Perpetuo",
    imagen:"img/32.gif",
    descripcion:"Una cámara de segurirdad graba algo en la parte trasera de un Hospital ,mientras un trabajador salía ",
    link:"https://www.scoopwhoop.com/real-ghosts-caught-on-camera/"
    };
    var pantasma33={
    indice:1,
    tipo:"Sombra Blanca",
    imagen:"img/33.gif",
    descripcion:"Una cámara de segurirdad de un hotel graba algo durante la noche  ",
    link:"https://gfycat.com/gifs/search/ghosts+caught+on+camera"
    };
    var pantasma34={
    indice:4,
    tipo:"Movimiento Perpetuo",
    imagen:"img/34.gif",
    descripcion:"Una familia cansada de los ruidos de la casa , pone una cámara y esto es lo que grabó",
    link:"https://tenor.com/es/ver/adventures-paranormal-door-opening-gif-5486452"};
    var pantasma35={
    indice:3,
    tipo:"Homble Blanco Heterosexual",
    imagen:"img/35.jpg",
    descripcion:"Un grupo de amigos sale a pasear y antes de un accidente horrible en carretera captan algo en un móvil",
    link:"https://www.pinterest.com.mx/pin/592504894705593232/"
    };
//arreglo de pantasmas
var pantasmas = [];
pantasmas[0]=pantasma0;
pantasmas[1]=pantasma1;
pantasmas[2]=pantasma2;
pantasmas[3]=pantasma3;
pantasmas[4]=pantasma4;
pantasmas[5]=pantasma5;
pantasmas[6]=pantasma6;
pantasmas[7]=pantasma7;
pantasmas[8]=pantasma8;
pantasmas[9]=pantasma9;
pantasmas[10]=pantasma10;
pantasmas[11]=pantasma11;
pantasmas[12]=pantasma12;
pantasmas[13]=pantasma13;
pantasmas[14]=pantasma14;
pantasmas[15]=pantasma15;
pantasmas[16]=pantasma16;
pantasmas[17]=pantasma17;
pantasmas[18]=pantasma18;
pantasmas[19]=pantasma19;
pantasmas[20]=pantasma20;
pantasmas[21]=pantasma21;
pantasmas[22]=pantasma22;
pantasmas[23]=pantasma23;
pantasmas[24]=pantasma24;
pantasmas[25]=pantasma25;
pantasmas[26]=pantasma26;
pantasmas[27]=pantasma27;
pantasmas[28]=pantasma28;
pantasmas[29]=pantasma29;
pantasmas[30]=pantasma30;
pantasmas[31]=pantasma31;
pantasmas[32]=pantasma32;
pantasmas[33]=pantasma33;
pantasmas[34]=pantasma34;

var turno =0;
var   x = 0,arr = [];
    for(x=0;x<pantasmas.length;x++){
        arr[x]=x;
    }
    arr.sort(function(a,b){
        return Math.random() - 0.5;
    });

numero_aleatorio=arr[turno];
var pantasma_seleccionado=pantasmas[numero_aleatorio];
document.getElementById("texto").innerHTML=pantasmas[numero_aleatorio].descripcion;

function seleccionar_nuevo_pantasma(){
    turno++;
    if(turno>=arr.length){
    alert("ya no tenemos mas fantasmas para ti =( vuelve pronto")
    location.href="index.html";
    }
    else{
numero_aleatorio=arr[turno];
console.log(numero_aleatorio); 
pantasma_seleccionado=pantasmas[numero_aleatorio];
}
}
function mostrar_imagen(){
    document.getElementById("img_fantoche").setAttribute("src",pantasma_seleccionado.imagen);
}

function votar(){
    var voto = document.getElementById("seleccion");
    opt2 = voto.options[voto.selectedIndex].value;
   if(estado_votar==false){
    if(opt2==0){
       alert("No se selecciono respuesta")
    puntos=puntos-3;
    document.getElementById("puntos").innerHTML=puntos;
    reiniciar_tiempo();
    mostrar_imagen();
    pausar();
        estado_votar=true;
        document.getElementById("respuesta").setAttribute("class","badge badge-danger text-wrap");
        document.getElementById("esperando").innerHTML="No seleccionaste una respuesta pierdes 3 puntos";
        document.getElementById("alerta").setAttribute("class","alert alert-warning alert-dismissible fade show");
      
    }
    else{
    if(opt2==pantasma_seleccionado.indice){
        puntos=puntos+10;
        document.getElementById("puntos").innerHTML=puntos;
        reiniciar_tiempo();
        mostrar_imagen();
        alert("Correcto!!");
        pausar();
        estado_votar=true;
        document.getElementById("respuesta").setAttribute("class","badge badge-success text-wrap");
        document.getElementById("esperando").innerHTML="Correcto!! Ganas 10 puntos";
        document.getElementById("alerta").setAttribute("class","alert alert-success alert-dismissible fade show");
    }
    else{
        puntos=puntos-2;
        document.getElementById("puntos").innerHTML=puntos;
        reiniciar_tiempo();
        mostrar_imagen();
       alert("Respuesta Incorrecta!!");
      pausar();
      estado_votar=true;
      document.getElementById("respuesta").setAttribute("class","badge badge-danger text-wrap");
      document.getElementById("esperando").innerHTML="Respuesta Incorrecta!! =( intentalo de nuevo , pierdes 2 puntos";
        document.getElementById("alerta").setAttribute("class","alert alert-danger alert-dismissible fade show");
       
    }
}
    estado_votar=true;
}
else{
    alert("ya no puedes volver a votar")
}
    //console.log(opt2);
    document.getElementById("respuesta").innerHTML="La Respuesta correcta es :"+pantasma_seleccionado.tipo;
    document.getElementById("direccion").setAttribute("href",pantasma_seleccionado.link)
    document.getElementById("direccion").innerHTML="Imagen original";

    
}
function siguiente(){
    document.getElementById("img_fantoche").setAttribute("src","img/pregunta.png");
    reiniciar_tiempo();
    seguir();
    seleccionar_nuevo_pantasma();
    document.getElementById("texto").innerHTML=pantasmas[numero_aleatorio].descripcion;
    estado_votar=false;
    document.getElementById("respuesta").innerHTML="";
    
    document.getElementById("esperando").innerHTML="Esperando respuesta ......<div class='spinner-grow spinner-grow-sm' role='status'><span class='sr-only'>Loading...</span></div>";
    document.getElementById("alerta").setAttribute("class","alert alert-info alert-dismissible fade show");
    document.getElementById("direccion").innerHTML="";
}
/*
function nuevonumero() { 
    numero_aleatorio=Math.floor(Math.random() * (pantasmas.length - 0) + 0);
    console.log(numero_aleatorio);
 }
 
setInterval(nuevonumero,1000);
*/

